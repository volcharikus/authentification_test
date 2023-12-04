import React, {useState, useMemo} from "react";

import {ArrowIcon} from "../../../assets/ArrowIcon";
import {Selected} from "../../../assets/Selected";
import CantFind from "./CantFind";
import {
    AccordionPosition,
    AccordionContent,
    AccordionHeader,
    AccordionSection,
    AccordionContainer,
    ArrowIconBox
} from "./index.components";

interface Position {
    title: string;
}

interface Department {
    department: string;
    positions: Position[];
}

interface AccordionProps {
    data: Department[];
    setSelectedPosition: (value: string) => void
    selectedPosition: string
    inputValue: string
}

interface PositionListProps extends Department {
    setSelectedPosition: (value: string) => void
    selectedPosition: string
    inputValue: string
}


const PositionList = ({department, positions, setSelectedPosition, selectedPosition}: PositionListProps) => {
    const [isSelected, setIsSelected] = useState(false)
    return (
        <AccordionContent isOpen={true}>
            {positions.map((position, index) => (
                <AccordionPosition onClick={(e) => {
                    const isSamePosition = position.title === selectedPosition
                    setSelectedPosition(isSamePosition ? '' : position.title)
                    setIsSelected(!selectedPosition ? true : !isSamePosition)
                }} key={index}>
                    {position.title}
                    {isSelected && selectedPosition === position.title && <Selected/>}
                </AccordionPosition>
            ))}
        </AccordionContent>
    )
}

export const Accordion = ({data, setSelectedPosition, selectedPosition, inputValue}: AccordionProps) => {
    const [openSectionIndexes, setOpenSectionIndexes] = useState<number[]>([]);

    const positions = useMemo(() => data.filter(item => item.positions.some(({title}) =>
        title.toLowerCase().includes(inputValue.toLowerCase()))), [data, inputValue])

    const toggleSection = (index: number) => {
        setOpenSectionIndexes((prevIndexes) => {
            return prevIndexes.includes(index) ? prevIndexes.filter(i => i !== index) : [...prevIndexes, index]
        });
    };
    return (
        <>
            <AccordionContainer>
                {positions.map((item, index) => {
                    const isOpen = openSectionIndexes.includes(index)
                    return (
                        <AccordionSection key={index}>
                            <AccordionHeader isOpen={isOpen || !!inputValue} onClick={() => toggleSection(index)}>
                                {item.department} <ArrowIconBox
                                isOpen={isOpen || !!inputValue}><ArrowIcon/></ArrowIconBox>
                            </AccordionHeader>
                            <AccordionContent isOpen={isOpen || !!inputValue}>
                                <PositionList {...item} setSelectedPosition={setSelectedPosition}
                                              selectedPosition={selectedPosition} inputValue={inputValue}/>
                            </AccordionContent>
                        </AccordionSection>
                    )
                })
                }
            </AccordionContainer>
            {!positions.length && <CantFind/>}
        </>
    );
};