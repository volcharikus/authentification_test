import React, {ChangeEvent, useState} from 'react';

import Heading from "../../components/Heading";
import {useNavigate} from "react-router-dom";
import {AvatarIcon} from "../../assets/avatarIcon";
import {usePatchUserDataMutation} from "../../Redux/services/auth";
import {
    Container,
    ImageContainer,
    IconContainer,
    ContentContainer,
    VerifyButton,
    ButtonGroup,
    AvatarInput
} from "./index.components";



const AvatarPage = () => {
    const navigate = useNavigate();

    const [patchUserData,] = usePatchUserDataMutation();

    const [avatar, setAvatar] = useState<File | null>(null);
    console.log(avatar);
    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) setAvatar(file)
    };
    const handleSubmit = (avatar:File | null) => {
        patchUserData({avatar})
            .then(response => navigate('/main-page'))
    }

    return (

        <Container>
            <Heading title={'Profile picture'} subTitle={'Add a cool pic to be easily recognizable.'}/>
            <ContentContainer>
                <AvatarInput onChange={handleFileChange} type='file' accept="image/*"/>
                <IconContainer><AvatarIcon/></IconContainer>
                {avatar && <ImageContainer><img style={{width: '100%', height: '100%',}}
                                                src={URL.createObjectURL(avatar as File)}
                                                alt={'avatar'}/></ImageContainer>}
            </ContentContainer>
            <ButtonGroup>
                <VerifyButton $primary type={'button'} onClick={(() => navigate("/auth/sign-up"))}>Back</VerifyButton>
                <VerifyButton type={'submit'} onClick={() => handleSubmit(!!avatar ? avatar : null)}>Finish</VerifyButton>
            </ButtonGroup>
        </Container>

    );
};

export default AvatarPage;