import React, {useRef, useState, KeyboardEvent} from 'react';


import {useLocation, useNavigate} from "react-router-dom";
import {useFormik} from "formik";

import {verifyFormSchema} from "./index.schema";
import Timer from "../../components/Timer";
import {
    GapContainer,
    VerifyButton,
    CodeInputContainer,
    ResendCodeButton,
    CodeInput,
    Container
} from "./index.components";


interface VerifyFormProps {
    onVerify: (data: string) => Promise<unknown>,
    onResendCode: (data: string) => void
}

const VerifyForm = ({onVerify, onResendCode}: VerifyFormProps) => {


    const navigate = useNavigate();
    const {state} = useLocation();

    const refs = [
        useRef<HTMLInputElement | null>(null),
        useRef<HTMLInputElement | null>(null),
        useRef<HTMLInputElement | null>(null),
        useRef<HTMLInputElement | null>(null),
    ];

    const formik = useFormik({
        initialValues: {
            code: ['', '', '', ''],
        },
        validationSchema: verifyFormSchema,
        onSubmit: values => {
            onVerify(values.code.join(''))
                .then(response => {
                    //TODO: enter Types

                    // @ts-ignore
                    if (!!response.error) {

                        // That is example of handling user navigation depending on response, currently it is not working cause of mocked backend data
                        // if (response.error.message === 'User not found') navigate('auth/sign-up', { phone: state?.phone })

                        navigate('/auth/sign-up', { state: {phone: state?.phoneNumber} })

                        // else {
                        //     formik.setFieldValue('code', ['', '', '', '']);
                        //     refs[0]?.current?.focus();
                        // }

                    } else {
                        navigate('/main-page')
                    }
                })
                .catch(() => {
                })
        },

    });

    const [timerCompleted, setTimerCompleted] = useState(false)


    const code = formik.values.code
    const handleChange = (index: number, value: string, e: React.ChangeEvent<HTMLInputElement>) => {

        if (/^\d*$/.test(value) && value.length <= 1) {
            const newCode = [...code];
            newCode[index] = value;
            formik.setFieldValue('code', newCode);
            if (index < 3 && value.length === 1) {
                refs[index + 1]?.current?.focus();
            }
        }
    };

    const handleResendCode = () => {
        setTimerCompleted(false)
        onResendCode(state.phoneNumber)
    }

    const handlePreviousNumber = (e: KeyboardEvent<HTMLInputElement>, index: number) => {
        if (e.code === 'Backspace' && !code[index]) {
            refs[index - 1]?.current?.focus();
        }
    }

    const handleTimerCompleted = () => {
        setTimerCompleted(true)
    }


    return (
        <form onSubmit={formik.handleSubmit}>
            <GapContainer>
                <Container>
                    <CodeInputContainer>
                        {code.map((digit, index) => (
                            <CodeInput
                                key={index}
                                id={'code'}
                                name={'code'}
                                type="text"
                                maxLength={1}
                                value={digit}
                                /*$error*/ // props for invalid code
                                autoComplete={'off'}
                                onChange={(e) => handleChange(index, e.target.value, e)}
                                onKeyDown={(e) => handlePreviousNumber(e, index)}
                                ref={refs[index]}
                            />
                        ))}
                    </CodeInputContainer>
                    {timerCompleted ? <ResendCodeButton onClick={handleResendCode}>Resend code</ResendCodeButton> :
                        <Timer onTimerCompleted={handleTimerCompleted}/>}
                </Container>
                <CodeInputContainer>
                    <VerifyButton $primary type="button" onClick={(() => navigate("/auth/login"))}>Back</VerifyButton>
                    <VerifyButton onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            e.preventDefault();
                            formik.handleSubmit();
                        }
                    }} type={'submit'} $disabled={!code.every((i: string) => !!i)}>Continue</VerifyButton>
                </CodeInputContainer>
            </GapContainer>
        </form>
    );
};

export default VerifyForm;