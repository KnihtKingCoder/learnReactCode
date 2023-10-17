import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoForm from './components/addTodo'
import TodoItem from './components/todoItems'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <TodoForm/>
     <TodoItem/>
    </>
  )
}

export default App
