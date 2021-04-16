import React from 'react'
import styled from 'styled-components'
import Moon from '../Images/Moon.jpg'

const Wrapper = styled.div`
display:flex;
flex-direction:column;
height:15%;
padding:10px;
background-image: url(${Moon});
background-repeat: no-repeat, repeat;
background-size: cover;
`
const DateContainer = styled.h2`
color:black;
padding:2px 0;
margin:0px !important;
color:white;
`
const DateSubContainer = styled.h3`
color:black;
margin:5px 0 !important;
color:white;
`
function Toolbar() {
    return (
        <Wrapper>
            <DateContainer>
                Thursday, 15th
            </DateContainer>
            <DateSubContainer>
                April
            </DateSubContainer>
        </Wrapper>
    )
}
export default Toolbar