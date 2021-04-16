import React from 'react'
import styled from 'styled-components'
import TaskItem from './TaskItem'

const Wrapper = styled.div`
height:65%;
padding:0px !important;
`
const SubWrapper = styled.div`
margin:0px !important;
height:100%;
overflow-y:auto;
`
const SubText = styled.div`
height:100%;
`
function TaskList({ items, show, onClick, onChange }) {

    const results = items.map(item => {
        return <TaskItem
            id={item.id}
            text={item.text}
            check={item.check}
            handleClick={onClick}
            handleChange={onChange}
        />
    })
    
    return (
        <Wrapper>
            {show === 0 ?
                <SubText>
                    You are all caught up! :

            </SubText>
            :
            <SubWrapper>
                    {results}
            </SubWrapper>
            }
        </Wrapper>
    )
}
export default TaskList