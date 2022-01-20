import React from 'react'
import Todo from './Todo'


export default function TodoList({todos, handleRemove}) {
    return (
        <div className="todo-list-container">
            {todos.map(todo => {
                return <Todo  todo={todo} handleRemove={handleRemove} />
            })}
        </div>
    )
}
