import React, {useState} from 'react';

import {useLocation} from "react-router-dom";
import {useFormik} from "formik";

import {UpDownIcon} from "../../assets/UpDown";
import {ButtonIcon} from "../../components/common/ButtonIcon";
import {SignUpnFormSchema} from "./index.schema";
import SelectPosition from "../../components/SelectPositionPopUp";
import Dialog from "../../components/Dialog";
import {GapContainer, Button, FlexContainer, InputField, InputBox} from "./index.components";
import {UserSignUpData} from "../../types";

interface SignUpFormProps {
    onSubmit: (data: UserSignUpData) => void
}

const SignUpForm = ({onSubmit}: SignUpFormProps) => {
    const {state} = useLocation();

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            position: '',
        },
        validationSchema: SignUpnFormSchema,
        onSubmit: values => {
            onSubmit({...values, phone: state?.phone})

        },
    });

    const [popUpOpen, setPopUpOpen] = useState(false)

    return (
        <form onSubmit={formik.handleSubmit}>
            <GapContainer>
                <FlexContainer $primary>
                    <FlexContainer>
                        <InputBox $primary={!!formik.errors.firstName && formik.touched.firstName}>
                            <InputField
                                value={formik.values.firstName}
                                autoComplete={'off'}
                                id={'firstName'}
                                name={'firstName'}
                                placeholder={'First name'}
                                onChange={formik.handleChange}
                            />
                        </InputBox>
                        <InputBox $primary={!!formik.errors.lastName && formik.touched.lastName}>
                            <InputField
                                value={formik.values.lastName}
                                autoComplete={'off'}
                                id={'lastName'}
                                name={'lastName'}
                                placeholder={'Last name'}
                                onChange={formik.handleChange}
                            />
                        </InputBox>
                    </FlexContainer>

                    <InputBox $primary={!!formik.errors.position && formik.touched.position}>
                        <InputField
                            value={formik.values.position}
                            id={'position'}
                            name={'position'}
                            placeholder={'Position'}
                            disabled={true}
                        />
                        <ButtonIcon type={'button'} onClick={() => setPopUpOpen(true)}><UpDownIcon/></ButtonIcon>
                    </InputBox>
                    {popUpOpen && <Dialog setIsOpen={setPopUpOpen}>
                        <SelectPosition
                            setPopUpOpen={setPopUpOpen}
                            setSelectedPosition={(value) => formik.setFieldValue('position', value)}
                            selectedPosition={formik.values.position}
                        />
                    </Dialog>}
                </FlexContainer>
                <Button type="submit"
                        $disabled={!formik.values.firstName || !formik.values.lastName || !formik.values.position}>Continue</Button>
            </GapContainer>
        </form>
    );
};

export default SignUpForm;