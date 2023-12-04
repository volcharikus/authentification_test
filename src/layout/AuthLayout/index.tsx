import React from 'react';
import styled from "styled-components";
import {Outlet} from "react-router-dom";

const Container = styled.div`
  background: #131415;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`



const AuthLayout = () => {
    return (
        <Container>
            <Outlet/>
        </Container>
    );
};

export default AuthLayout;