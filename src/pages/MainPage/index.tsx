import React from 'react';
import styled from "styled-components";
import {useNavigate} from "react-router-dom";

const FlexContainer =  styled.div`
display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap:10px;
`
const MainPage = () => {
const navigate = useNavigate()
   const clearStore = () =>{
   localStorage.clear();
       navigate('/auth')
   }
    return (
        <FlexContainer>
            MainPage
            <button onClick={clearStore}>Logout</button>
        </FlexContainer>
    );
};

export default MainPage;