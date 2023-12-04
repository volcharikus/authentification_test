import React from 'react';
import styled from "styled-components";

const DialogOverlay = styled.div`
  background-color: #000000;
  width: 100vw;
  height: 100vh;
  z-index: 1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
`

const Centred = styled.div`
  position: fixed;
  z-index: 10;
  top: 50%;
  left: 50%;
  height: 70%;
  transform: translate(-50%, -50%);
`

interface DialogProps {
    setIsOpen: (isOpen: boolean) => void
    children: React.ReactElement
}


const Dialog = ({setIsOpen, children}: DialogProps) => {


    return (
        <>
            <DialogOverlay onClick={() => setIsOpen(false)}/>
            <Centred>
                    {children}
            </Centred>
        </>

    );
};

export default Dialog;