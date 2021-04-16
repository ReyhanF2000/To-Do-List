import React, { useRef } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'

const Wrapper = styled.div`
height:10%;
dispaly:flex;
background:white;
`
const Input = styled.input`
border:none !important;
height:95%;
width:90%;
font-size:16px;
outline: none;
`
function SearchInput({ onClick, onKeyPress }) {

    const inputText = useRef()

    const handleKeyEnter = e => {
        if (e.key === "Enter") {
            onKeyPress(inputText.current.value)
            inputText.current.value = ""
        }
    }

    const handleClick = () => {
        onClick(inputText.current.value)
        inputText.current.value = ""
    }

    return (
        <Wrapper>
            <Input
                placeholder='Add Task...'
                defaultValue=""
                ref={inputText}
                onKeyPress={handleKeyEnter}
            >
            </Input>
            <FontAwesomeIcon
                icon={faEdit}
                style={{ color: 'gray' }}
                onClick={handleClick}
            />
        </Wrapper>
    )
}
export default SearchInput