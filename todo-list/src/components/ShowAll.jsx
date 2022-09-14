import React from 'react'
import TodoForm from './TodoForm';

const ShowAll = (props) => {

    const {todoList, setTodoList} = props;
    
    const changeText = i => {
        const list = todoList
        const checkObj = list[i]
        checkObj.checked = !checkObj.checked
        setTodoList([...list])
    }

    const deleteTodo = (i) => {
        const list = todoList.filter((item,id)=>{return id !== i})
        setTodoList([...list])
    }

    return (
        <>
            {
                todoList.map((todo,i)=> (
                    <div key={i}>
                        <h3 style={todo.checked?{textDecoration: 'line-through'}:null}>{todo.todo}</h3>
                        <input
                        type='checkbox'
                        onClick={() => changeText(i)}
                        />
                        <button onClick={() => deleteTodo(i)}>Delete</button>
                    </div>
                ))
            }
        </>
    )
}

export default ShowAll