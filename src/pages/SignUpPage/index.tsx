import React from 'react';

import {useNavigate} from "react-router-dom";
import styled from "styled-components";

import Heading from "../../components/Heading";
import SignUpForm from "../../forms/SignUpForm";
import {usePostUserDataMutation} from "../../Redux/services/auth";
import {UserSignUpData} from "../../types";


const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;
`

const SignUpPage = () => {
    const navigate = useNavigate()

    const [postUserData] = usePostUserDataMutation();

    const handleSubmit = (data: UserSignUpData) => {
        postUserData(data)
            .then(response => {
                localStorage.setItem('isUser', "true")
                navigate('/auth/avatar')
            })
    }

    return (
        <FlexContainer>
            <Heading title={'Personal Information'} subTitle={'Tell us a little bit about yourself.'}/>
            <SignUpForm onSubmit={handleSubmit}/>
        </FlexContainer>
    );
};

export default SignUpPage;