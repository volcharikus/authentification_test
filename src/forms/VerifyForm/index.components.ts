import styled from "styled-components";

export const VerifyButton = styled.button<{$primary?:boolean, $disabled?:boolean}>`
  height: 48px;
  padding: 16px 24px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  color:#FAFAFA ;
  border-radius: 16px;
  border: none;
  width: 100%;
  pointer-events: ${props => props.$disabled ? "none" : "auto"};
  opacity: ${props => props.$disabled ? "0.5" : "1"};
  cursor: pointer;
  background: ${props => props.$primary ? "#1C1A1F" : "#7A11FF"};
  &:active {
    background: ${props => props.$primary ? "#1C1A1F" : "#9341FF"};
  }
`


export const CodeInputContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
`;

export const CodeInput = styled.input<{ $error?: boolean; }>`
  width: 48px;
  height: 48px;
  text-align: center;
  margin: 0 5px;
  font-size: 16px;
  border: ${props => props.$error ? " 1px solid  #F74F8C" : "1px solid #222024"};
  border-radius: 16px;
  background: #1C1A1F;
  color: #7F7E80;

  &:focus {
    color: #FAFAFA;
    outline: none;
  }
`;
export const ResendCodeButton = styled.button`
  color: #FAFAFA;
  text-align: center;
  font-size: 14px;
  font-weight: 450;
  line-height: 14px;
  text-decoration-line: underline;
  width: 100%;
  background: inherit;
  box-shadow: none;
  border: none;
  cursor: pointer;
  margin-top: 16px;

`
export const GapContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`
export const Container = styled.div`
display: flex;
  flex-direction: column;
  align-items: center;
`
