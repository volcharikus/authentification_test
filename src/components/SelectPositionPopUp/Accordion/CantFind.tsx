import React from 'react';
import {Crab} from "../../../assets/Crab";
import styled from "styled-components";

const SubTitle = styled.h2`
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  color: #FCFEFF;
  text-align: center;
`
const Flex = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
`
const CantFind = () => {
    return (
        <Flex>
          <Crab/>
            <SubTitle>Oh crab, we can`t find <br/> a position</SubTitle>
        </Flex>
    );
};

export default CantFind;