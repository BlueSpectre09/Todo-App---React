import React from 'react'

export default function TodoCount({ todos }) {
    return (
        <h2>Tasks Remaining: {todos.length}</h2>
    )
}
