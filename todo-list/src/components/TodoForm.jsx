import React, {useState} from 'react'

const TodoForm = (props) => {

    const [todo, setTodo] = useState('')

    const {todoList, setTodoList} = props;

    const submit = (e) => {
        e.preventDefault();
        setTodoList([ ...todoList,todo])
        setTodo({todo: '',checked: ''})
    }

    const todoHandler = (e) => {
        setTodo({todo: e.target.value, checked: false})
    }

    return (
    <form onSubmit={ submit }>
        <h1>Todo List</h1>
        <input 
            onChange={ todoHandler }
            value={ todo.todo }
            type="text"
        ></input>
        <input type="submit" value="Add to the list." />
    </form>
    )
}

export default TodoForm