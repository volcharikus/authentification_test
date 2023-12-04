import styled from "styled-components";

export const Container = styled.div<{ $ContainerGap?: string; }>`
  display: flex;
  flex-direction: column;
  gap: ${props => props.$ContainerGap || '48px'};
`

export const InputContainer = styled.div<{ $primary?: boolean; }>`
  display: flex;
  height: 48px;
  align-items: center;
  gap: 12px;
  border-radius: 16px;
  border: ${props => props.$primary ? " 1px solid  #F74F8C" : "1px solid #222024"};
  background: #1C1A1F;
  width: 100%;
  padding: 16px;
`

export const Input = styled.input`
  background: inherit;
  border: none;
  color: #7F7E80;
  font-size: 16px;
  line-height: 16px;

  &:focus {
    color: #FAFAFA;
    outline: none;
  }
`
export const CountryIconButton = styled.button`
  background: none;
  border: none;
  color: #FAFAFA;
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 4px;
`
export const ErrorText = styled.span`
  font-size: 14px;
  font-style: normal;
  font-weight: 450;
  line-height: normal;
  color: #F74F8C;
`
export const CountryCode = styled.span`
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
  margin-left: 4px;
`

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