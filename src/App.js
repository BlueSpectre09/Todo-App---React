import './App.css';
import TodoList from './components/TodoList'
import TodoCount from './components/TodoCount'
import TodoEntry from './components/TodoEntry'
import { useState, useRef, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'

function App() {

  const [todos, setTodos] = useState([])
  let inputRef = useRef()

  const SET_LOCAL_STORAGE_KEY = 'my_key'

  const tryParse = json =>{try{return JSON.parse(json)} catch(err){}}

  //Set local storage
  function storeTodos(data){
    localStorage.setItem(SET_LOCAL_STORAGE_KEY, JSON.stringify(data))
  }
  function retrieveTodos(){
    return tryParse(localStorage.getItem(SET_LOCAL_STORAGE_KEY))
  }
  
  useEffect(() => {
    const storedTodos = retrieveTodos() 
    if (storedTodos) setTodos(storedTodos)
  }, [])
  
  useEffect(() => {
    storeTodos(todos)
  }, [todos])

  function handleAddTodo(newTodo) {
    if(newTodo==="") return
    setTodos(prev => {
      return [...prev, {id: uuidv4(), name: newTodo}]
    })
  }

  function handleRemoveTodo(identifier) {
    setTodos(prev => {
      return prev.filter(todo => todo.id !== identifier)
    })
  }

  return (
    <div className="App">
      <h1> Todo List </h1>
      <TodoCount todos={todos} />
      <TodoEntry onEntry={handleAddTodo}/>
      <TodoList todos={todos} handleRemove={handleRemoveTodo}/>
    </div>
  );
}

export default App;
