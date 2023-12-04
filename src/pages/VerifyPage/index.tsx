import React from 'react';
import Heading from "../../components/Heading";
import VerifyForm from "../../forms/VerifyForm";
import {useLocation} from "react-router-dom";
import styled from "styled-components";
import {usePostAuthWithCodeMutation, usePostAuthWithPhoneMutation} from "../../Redux/services/auth";

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px
`

const VerifyPage = () => {
    const {state} = useLocation()
    const phoneNumber = state?.phoneNumber

    const [postAuthWithCode,] = usePostAuthWithCodeMutation();
    const [postAuthWithPhone,] = usePostAuthWithPhoneMutation();
    const handleVerify = (data: string) => postAuthWithCode({code: data})

    const handleResendCode = (phoneNumber: string) => {
        postAuthWithPhone({phone: phoneNumber})
    }

    return (
        <Flex>
            <Heading title={'Verify'} subTitle={'Enter the code we’ve sent to '} phoneNumber={phoneNumber}/>
            <VerifyForm onVerify={handleVerify} onResendCode={handleResendCode}/>
        </Flex>
    );
};

export default VerifyPage;