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
export const ContentContainer = styled.div`
  margin-top: 48px;
  width: 128px;
  height: 128px;
  border-radius: 50%;
  background: #1c1a1f;
  cursor: pointer;
  position: relative;
  overflow: hidden;
`

export const AvatarInput = styled.input`
  position: absolute;
  z-index: 100000;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  cursor: pointer;
`
export const ButtonGroup = styled.div`
  display: flex;
  gap: 8px;
  width: 100%;
  margin-top: 32px;
`
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const IconContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export const ImageContainer = styled.div`
  
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom:0 ;
  height: auto;
  object-fit: contain;
`