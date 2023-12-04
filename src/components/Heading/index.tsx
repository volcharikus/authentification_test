import React from 'react';
import styled from "styled-components"

interface HeadingProps {
    title: string,
    subTitle: string,
    phoneNumber?: string
}

const Heading = ({title, subTitle, phoneNumber}: HeadingProps) => {

    const HeadingBox = styled.div`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-items: center;
      gap: 8px;
      width: 100%;
    `
    const PhoneNumber = styled.span`
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: 20px;
      color: #FAFAFA;
    `
const Flex = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`
    const HeadingText = styled.h1<{ $primary?: boolean; }>`
      font-size: ${props => props.$primary ? "32px" : "16px"};
      color: ${props => props.$primary ? "#FAFAFA" : "#666469"};
      line-height: ${props => props.$primary ? "40px" : " 20px"};
      margin: 0;
    `

    return (
        <HeadingBox>
            <HeadingText $primary>{title} </HeadingText>
            <Flex>
                <HeadingText>{subTitle}</HeadingText>
                <PhoneNumber >{phoneNumber}</PhoneNumber>
            </Flex>
        </HeadingBox>
    );
};

export default Heading;