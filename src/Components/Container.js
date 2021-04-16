import React, { useState } from 'react'
import styled from 'styled-components'
import Toolbar from './Toolbar'
import SearchInput from './SearchInput'
import TaskList from './TaskList'
import ResultList from './ResultList'

const Wrapper = styled.div`
display:flex;
flex-direction:column;
width:25vw;
height:40vw;
border:1px solid rgba(0,0,0,0.05);
background:rgba(0,0,0,0.05);
margin:50px auto;
`
function Contianer() {

    const [tasks, setTasks] = useState(0)
    const [complete, setComplete] = useState(0)
    const [items, setItems] = useState([])

    function GenerateId() {
        return Math.floor(Math.random() * 1500) + 1;
    }

    const handleClick = value => {
        const result = {
            id: GenerateId().toString(),
            text: value,
            check: false
        }
        const copyItems = [...items]
        copyItems.push({ ...result })
        setTasks(tasks + 1)
        setItems(copyItems)
    }

    const handleEnter = value => {
        const result = {
            id: GenerateId().toString(),
            text: value,
            check: false
        }
        const copyItems = [...items]
        copyItems.push({ ...result })
        setTasks(tasks + 1)
        setItems(copyItems)
    }

    const handleRemoveItem = id => {
        const copyItems = [...items]
        const index = copyItems.findIndex(item => item.id === id)
        const item = copyItems.find(item => item.id === id)
        const result = item.check === false ? 0 : -1
        copyItems.splice(index, 1)
        setComplete(complete + result)
        setTasks(tasks - 1)
        setItems(copyItems)
    }

    const handleChecked = (value, id) => {
        const copyItems = [...items]
        let item = copyItems.find(item => item.id === id)
        item.check = value
        const result = value === false ? -1 : 1
        setComplete(complete + result)
        setItems((prevState) => {
            return copyItems;
        });
    }
    return (
        <Wrapper>
            <Toolbar />
            <SearchInput
                onKeyPress={handleEnter}
                onClick={handleClick}
            />
            <TaskList
                items={items}
                show={tasks}
                onClick={handleRemoveItem}
                onChange={handleChecked}
            />
            <ResultList
                tasks={tasks}
                complete={complete}
                open={tasks - complete}
            />
        </Wrapper>
    )
}
export default Contianer