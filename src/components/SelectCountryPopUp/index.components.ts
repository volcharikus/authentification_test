import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  cursor: pointer;
  padding: 24px 8px;
`
export const PaddingBox = styled.div`
  padding: 8px 24px;
  height: 64px;
`
export const InputBox = styled.div`
  display: flex;
  padding: 12px 16px 12px 12px;
  align-items: center;
  border-radius: 24px;
  border: 1px solid #222024;
  background: #1C1A1F;
  gap: 12px;
`
export const HeaderDialog = styled.div`
  height: 64px;
  display: flex;
  gap: 100px;
  padding: 12px 16px;
  border-bottom: 1px solid #222024;
`

export const DialogBox = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 384px;
  max-width: 768px;
  background: #141315;
  border-radius: 32px;
  box-shadow: 8px 16px 16px 0 rgba(0, 0, 0, 0.24);
  height: 100%;
  
`