import React, {useState} from 'react';


import {ButtonIcon} from "../common/ButtonIcon";
import {TitlePopUp} from "../common/TitlePopUp";
import SearchIcon from "../../assets/SearchIcon";
import {Input} from "../common/Input";
import {positionList} from "../../mocked";
import {Accordion} from "./Accordion";

import Xmark from "../../assets/Xmark";
import {HeaderDialog, InputBox, DividerBox, PaddingBox, CancelButton, DialogBox} from "./index.components";


interface SelectPositionProps {
    setPopUpOpen: React.Dispatch<React.SetStateAction<boolean>>,
    setSelectedPosition: (value: string) => void
    selectedPosition: string
};


const SelectPosition = ({setPopUpOpen, setSelectedPosition, selectedPosition}: SelectPositionProps) => {
    const [inputValue, setInputValue] = useState('')

    return (
        <DialogBox>
            <HeaderDialog>
                <ButtonIcon onClick={() => setPopUpOpen(false)}><Xmark/></ButtonIcon>
                <TitlePopUp>Position</TitlePopUp>
            </HeaderDialog>
            <PaddingBox>
                <InputBox>
                    <SearchIcon/>
                    <Input type={'text'} placeholder={'Search'} value={inputValue}
                           onChange={(e) => setInputValue(e.target.value)}/>
                </InputBox>
                {!!inputValue.length &&
                    <CancelButton onClick={() => setInputValue('')}>Cancel</CancelButton>}
            </PaddingBox>
            <DividerBox/>
            <Accordion data={positionList} setSelectedPosition={setSelectedPosition}
                       selectedPosition={selectedPosition} inputValue={inputValue}/>
        </DialogBox>
    );
};

export default SelectPosition;