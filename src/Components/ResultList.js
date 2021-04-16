import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
display:flex;
height:10%;
background:rgba(0,0,0,0.05);
justify-content: space-around;
align-items:center
`
const SubWrapper = styled.div`
`
function ResultList({ tasks, complete, open }) {
    return (
        <Wrapper>
            <SubWrapper>{tasks} Tasks</SubWrapper>
            <SubWrapper>{complete} Complete</SubWrapper>
            <SubWrapper>{open} Open</SubWrapper>
        </Wrapper>
    )
}
export default ResultList