import React, {useState} from 'react';
import Logo from "../../assets/Logo";

import {SelectedCountry} from "../../types";
import SelectCountryDialog from "../../components/SelectCountryPopUp";
import LogInForm from "../../forms/LogInForm";
import Heading from "../../components/Heading";
import {useNavigate} from "react-router-dom";
import {usePostAuthWithPhoneMutation} from "../../Redux/services/auth";
import {Container, FlexContainer, Content, Caption} from "./index.components";
import Dialog from "../../components/Dialog";


const LogInPage = () => {

    const navigate = useNavigate()

    const [selectedCountry, setSelectedCountry] = useState<SelectedCountry>({flag: 'us', dial_code: '+1'})
    const [popUpOpen, setPopUpOpen] = useState(false)
    const [postAuthWithPhone] = usePostAuthWithPhoneMutation();

    const handleSignUp = (data: string) => {
        postAuthWithPhone({phone: data})
            .then(response => navigate('/auth/verify', {state: {phoneNumber: data}}))
    }

    return (
        <div>
            {popUpOpen ?
                <Dialog setIsOpen={setPopUpOpen}><SelectCountryDialog setPopUpOpen={setPopUpOpen} setSelectedCountry={setSelectedCountry}/></Dialog>
                :
                <FlexContainer>
                    <Content>
                        <Logo/>
                        <Heading title={'Let’s get you started.'} subTitle={'Sign in or create an account.'}/>
                        <LogInForm onSubmit={handleSignUp} selectedCountry={selectedCountry}
                                   setPopUpOpen={setPopUpOpen}/>
                    </Content>
                    <Container>
                        <Caption $primary>Having trouble? </Caption>
                        <Caption>Contact us</Caption>
                    </Container>
                </FlexContainer>
            }
        </div>
    );
};

export default LogInPage;