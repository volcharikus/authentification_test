import styled from "styled-components";

export const HeaderDialog = styled.div`
  height: 64px;
  display: flex;
  gap: 100px;
  padding: 12px 16px;
`
export const InputBox = styled.div`
  display: flex;
  padding: 12px 16px 12px 12px;
  align-items: center;
  border-radius: 12px;
  border: 1px solid #222024;
  background: #1C1A1F;
  gap: 12px;
  width: 100%;
`
export const DividerBox = styled.div<{ $primary?: boolean; }>`
  border-bottom: 1px solid #222024;
  width: 100%;
  visibility:   ${props => props.$primary ? "hidden" : "visible"};
  
`
export const PaddingBox = styled.div`
  padding: 8px 24px;
  border-top: 1px solid #222024;
  height: 64px;
  display: flex;
  align-items: center;
  gap: 16px;

`
export const CancelButton = styled.button`
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
  background: inherit;
  color:#7F7E80;
  border: none;
`

export const DialogBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 384px;
  background: #141315;
  border-radius: 32px;
  box-shadow: 8px 16px 16px 0 rgba(0, 0, 0, 0.24);
  height: 100%;  
`