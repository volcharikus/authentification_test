import React, {useEffect} from 'react';
import styled from "styled-components";
import {Outlet, useNavigate} from "react-router-dom";

const Container = styled.div`
  background: #131415;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`



const AppLayout = () => {
    const navigate = useNavigate();

    useEffect(() => {
        if (!localStorage.getItem('isUser')) {
            navigate('/auth')
        }
    }, [navigate]);



    return (
        <Container>
            <Outlet/>
        </Container>
    );
};

export default AppLayout;