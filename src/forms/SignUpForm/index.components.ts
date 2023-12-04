import styled from "styled-components";

export const Button = styled.button<{ $disabled?: boolean; }>`
  width: 100%;
  height: 48px;
  border-radius: 16px;
  background: #7A11FF;
  font-size: 16px;
  opacity: ${props => props.$disabled ? '0.5' :'1'};
  line-height: 16px;
  color: #FAFAFA;
  padding: 16px 24px;
  border: none;
  cursor: pointer;
  &:active {
    background: #9341FF;
  }
  `
export const InputBox = styled.div<{ $primary?: boolean; }>`
  display: flex;
  height: 48px;
  padding: 16px;
  align-items: center;
  gap: 12px;
  align-self: stretch;
  border-radius: 16px;
  border: ${props => props.$primary ? " 1px solid  #F74F8C" : "1px solid #222024"};
  background:  #1C1A1F;
`

export const FlexContainer = styled.div<{ $primary?: boolean; }>`
  display: flex;
  flex-direction: ${props => props.$primary ? "column" : "row"};
  gap: 16px;
`
export const InputField = styled.input`
  width: 100%;
  background: inherit;
  border: none;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
  color: #7F7E80;

  &:focus {
    color: #FAFAFA;
    outline: none;
  }
`
export const GapContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;
`