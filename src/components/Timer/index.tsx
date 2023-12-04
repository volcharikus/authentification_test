import React, {useEffect, useState} from 'react';
import styled from "styled-components";


interface TimerProps {
    onTimerCompleted: () => void
}

const Text = styled.span`
  font-size: 14px;
  font-style: normal;
  font-weight: 450;
  line-height: 14px;
  color: #7F7E80;
  text-align: center;
  margin-top: 16px;
`
const Timer = ({onTimerCompleted}: TimerProps) => {

    const [time, setTime] = useState(60)

    useEffect(() => {
        const timerFunction = () => {
            if (time >= 1) {
                setTime(prev => prev - 1)
            } else {
                onTimerCompleted()
            }
        }
        const interval = setInterval(timerFunction, 1000)

        return () => clearInterval(interval);
    })


    return (
        <Text> Resend code in {time} </Text>
    );
};

export default Timer;