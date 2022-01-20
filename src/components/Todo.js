import React from 'react'

export default function Todo({ todo, handleRemove }) {
    return (
        <div className="todo-container">
            <p id="todo-name">{todo.name}</p>
            <button className="remove-button" onClick={()=>handleRemove(todo.id)}>X</button>
        </div>
    )
}
