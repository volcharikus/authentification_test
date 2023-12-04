import React from 'react';

import {useFormik} from "formik";

import Flag from "../../assets/Flag";
import {SelectedCountry} from "../../types";
import {UpDownIcon} from "../../assets/UpDown";
import {loginFormSchema} from "./index.schema";
import {
    Container,
    InputContainer,
    Input,
    ErrorText,
    CountryIconButton,
    CountryCode,
    VerifyButton
} from './index.components'



const formatPhoneNumber = (phoneNumber: string) => {
    const digits = phoneNumber.replace(/\D/g, '');

    return digits.replace(/(\d{3})(\d{0,3})(\d{0,4})/, function (_, first, second, third) {

        let result = first;
        if (second) {
            result += `-${second}`;
        }
        if (third) {
            result += `-${third}`;
        }
        return result;
    });
}

interface LogInFormProps {
    setPopUpOpen: React.Dispatch<React.SetStateAction<boolean>>,
    selectedCountry: SelectedCountry,
    onSubmit: (data: string) => void
}

const LogInForm = ({selectedCountry, setPopUpOpen, onSubmit}: LogInFormProps) => {

    const formik = useFormik({
        initialValues: {
            phone: '',
        },
        validationSchema: loginFormSchema,
        onSubmit: values => {
            const phoneNumber = selectedCountry.dial_code + values.phone.replace(/-/g, "");
            onSubmit(phoneNumber)
        },
    });

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <Container $ContainerGap="32px">
                    <div>
                        <Container>
                            <InputContainer $primary={!!formik.errors.phone && formik.touched.phone}>
                                <CountryIconButton
                                    onClick={() => setPopUpOpen(true)}
                                    type="button">
                                    <Flag/>
                                    <CountryCode>{selectedCountry.dial_code}</CountryCode>
                                    <UpDownIcon/>
                                </CountryIconButton>

                                <Input placeholder={'Phone number'} id={'phone'} name={'phone'} type={'tel'}
                                       maxLength={12}
                                       autoComplete={'off'}
                                       onChange={(e) => {
                                           formik.setFieldValue('phone', formatPhoneNumber(e.target.value))
                                       }}
                                       value={formik.values.phone}/>
                            </InputContainer>
                        </Container>
                        {!!formik.errors.phone && formik.touched.phone &&
                            <ErrorText> {formik.errors.phone}</ErrorText>}
                    </div>
                    <VerifyButton $disabled={!formik.values.phone} type={'submit'}
                                  disabled={!formik.values.phone}>Continue</VerifyButton>
                </Container>
            </form>
        </div>
    );
};

export default LogInForm;


