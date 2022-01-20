import { useState, useRef, useEffect } from 'react'
  
export default function TodoEntry(props){

  let {onEntry} = props

  let inputRef = useRef()

  function handleSubmit(){
    let val = inputRef.current.value
    inputRef.current.value = ''
    onEntry(val)
  }

  return (
    <div className="input-container">
        <input className="input" type="text" ref={inputRef} maxLength="24"/>
        <button className="add-todo" onClick={handleSubmit} >Add Todo</button>
    </div>
  )
}