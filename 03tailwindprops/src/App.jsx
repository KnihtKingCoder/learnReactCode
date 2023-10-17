import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './componenets/Card';

function App() {
  const [count, setCount] = useState(0)
  let myObj={
    username:"hitesh",
    age:21
  }

  let newArr=[1,2,3]

  return (
    <>
      <h1 className='bg-green-400 text-black mb-4 p-4 rounded-xl'>Tailwind CSS</h1>
      <Card username="knightpkcoder" btnText="click ne"/>
      <Card username="Dealer of Death" />
    </>
  )
}

export default App
