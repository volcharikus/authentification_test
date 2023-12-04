import styled from "styled-components";

export const AccordionContainer = styled.div`
  position: relative;
  width: 100%;
  background: inherit;

`;

export const AccordionSection = styled.div`
  overflow: hidden;
  border-bottom: 1px solid #222024;
  border-collapse: collapse;
`;

export const AccordionHeader = styled.div<{ isOpen: boolean }>`

  background: inherit;
  cursor: pointer;
  user-select: none;
  color: #FCFEFF;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 24px;
  border-bottom: ${(props) => (props.isOpen ? '1px solid #222024' : 'none')};
`;

export const AccordionContent = styled.div<{ isOpen: boolean }>`
  color: #FCFEFF;
  flex-direction: column;
  height: ${(props) => (props.isOpen ? '200px' : '0')};
  transition: height 0.4s ease;
  padding-top: 8px;
`;

export const AccordionPosition = styled.div`
  height: 64px;
  padding-left: 24px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;

export const ArrowIconBox = styled.div<{ isOpen: boolean }>`
  transform: ${(props) => (props.isOpen ? 'rotate(-180deg)' : 'none')};
  transition: transform 0.4s ease;
`