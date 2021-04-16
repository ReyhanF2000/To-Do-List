import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const Wrapper = styled.div`
display:flex;
border-bottom:2px solid gray;
padding:7px 5px;
margin:0px 5px
`
const IconWrapper = styled.div`
flex: 0.1 1 auto;
`
const InputWrapper = styled.input`
flex: 0.1 1 auto;
margin:2px;
filter: hue-rotate(90deg);
webkit-filter: hue-rotate(90deg);
moz-filter: hue-rotate(90deg);
`
const SubWrapper = styled.span`
flex: 3 1 auto;
`
function TaskItem({ id, text, check, handleClick, handleChange }) {

    const handleCheck = e => {
        handleChange(e.target.checked, id)
    }

    return (
        <Wrapper key={id}>
            <InputWrapper
                type='checkbox'
                checked={check}
                onChange={handleCheck}
            />
            {check &&
                <SubWrapper style={{ textDecorationLine: 'line-through', color: '#FF1493' }}>{text}</SubWrapper>
            }
            {!check &&
                <SubWrapper>{text}</SubWrapper>
            }
            <IconWrapper>
                <FontAwesomeIcon
                    icon={faTrash}
                    style={{ color: 'gray' }}
                    onClick={() => handleClick(id)}
                />
            </IconWrapper>
        </Wrapper>
    )
}
export default TaskItem