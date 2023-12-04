import styled from "styled-components";

export const Content = styled.div`
  background: #131415;
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: center;
`

export const Caption = styled.span<{ $primary?: boolean; }>`
  font-size: 14px;
  color: ${props => props.$primary ? "#7F7E80" : "#FAFAFA"};
`

export const Container = styled.div`
  display: flex;
  gap: 2px;
  align-items: center;
  justify-items: center;
  margin-top: 8px;
`

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`