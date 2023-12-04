import React, {useState} from "react";

import {ButtonIcon} from "../common/ButtonIcon";
import {TitlePopUp} from "../common/TitlePopUp";
import {Input} from "../common/Input";
import {countrysData} from "../../mocked";
import {Caption} from "../common/Caption";
import {SelectedCountry} from "../../types";

import Xmark from "../../assets/Xmark";
import SearchIcon from "../../assets/SearchIcon";
import Flag from "../../assets/Flag";
import {DialogBox, HeaderDialog, InputBox, PaddingBox, Container} from "./index.components";

interface SelectCountryProps {
    setPopUpOpen: React.Dispatch<React.SetStateAction<boolean>>,
    setSelectedCountry: React.Dispatch<React.SetStateAction<SelectedCountry>>
}


const SelectCountryDialog = ({setPopUpOpen, setSelectedCountry}: SelectCountryProps) => {

    const [value, setValue] = useState('')
    const handleCountrySelect = (country: SelectedCountry) => {
        setSelectedCountry((prev) => ({...prev, dial_code: country.dial_code, flag: country.flag}))
        setPopUpOpen(false)
    }

    return (
        <DialogBox>
            <HeaderDialog>
                <ButtonIcon onClick={() => setPopUpOpen(false)}><Xmark/></ButtonIcon>
                <TitlePopUp>Country</TitlePopUp>
            </HeaderDialog>
            <PaddingBox>
                <InputBox>
                    <SearchIcon/>
                    <Input type={'text'} placeholder={'Search'} value={value}
                           onChange={(e) => setValue(e.target.value)}/>
                </InputBox>
            </PaddingBox>
            {value.length !== 0 &&
                countrysData.filter((country) =>
                    country.name.toLowerCase().includes(value.toLowerCase()) || country.dial_code.includes(value)).slice(0, 7).map((item, index) =>
                    <Container key={index} onClick={() => handleCountrySelect(item)}>
                        <Flag/>
                        <Caption $primary>{item.dial_code}</Caption>
                        <Caption>{item.name}</Caption>
                    </Container>
                )}
        </DialogBox>
    );
};
export default SelectCountryDialog;