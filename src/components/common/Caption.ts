import styled from "styled-components";

export const Caption = styled.span<{ $primary?: boolean; }>`
  font-size: ${props => props.$primary ? '16px'  : '14px' };
  font-weight:${props => props.$primary ? '500'  : '450' };
  line-height: ${props => props.$primary ? '16px'  : '14px' };
  color:${props => props.$primary ? '#FCFEFF'  : '#7F7E80' };
  flex-basis: ${props => props.$primary ? '44px'  : 'none' };
`