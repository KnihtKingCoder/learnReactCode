import { useCallback, useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
      const [length,setLength]=useState(8)
      const [numberAllowed,setNumberAllowed]=useState(false)
      const [charAllowed,setcharAllowed]=useState(false)
      const [passwrod,setPassword]=useState("")

      const passwrodRef=useRef(null)

      const passwordGenerator=useCallback(()=>{
        let pass=""
        let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

        if (numberAllowed) {
            str+="0123456789"
        }
        if (charAllowed) {
            str+="@#$&"
        }

        for(let i=1;i<=length;i++){
          let char=Math.floor(Math.random()*str.length+1)

          pass+=str.charAt(char)

        }
        setPassword(pass)

      },[length,numberAllowed,charAllowed,setPassword])

    const copyPasswordToClipboard=useCallback(()=>{
      passwrodRef.current?.select();
      passwrodRef.current?.setSelectionRange(0,99)
      window.navigator.clipboard.writeText(passwrod)
    },[passwrod])

      useEffect(()=>{passwordGenerator()},[length,numberAllowed,charAllowed,passwordGenerator])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-2 my-8 bg-gray-800 text-orange-500'>
      <h1 className='text-4xl text-center text-white m-4'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input type="text" ref={passwrodRef} value={passwrod} className='outline-none w-full py-1 px-3' placeholder='Password' readOnly />
        <button  onClick={copyPasswordToClipboard} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex item-center gap-x-1'>
          <input type="range" min={8} max={100} value={length} className='cursor-pointer' onChange={(e)=>{setLength(e.target.value)}}/>
          <label >Length : {length}</label>
        </div>
        <div className='flex item-center gap-x-1'>
          <input type="checkbox" defaultChecked={numberAllowed} id='numberInput'  onChange={()=>{setNumberAllowed((prev)=>!prev)}}/>
          <label htmlFor='numberInput' >Number</label>
        </div>
        <div className='flex item-center gap-x-1'>
          <input type="checkbox" defaultChecked={charAllowed} id='charcterInput'  onChange={()=>{setcharAllowed((prev)=>!prev)}}/>
          <label htmlFor='charcterInput'>Charcter</label>
        </div>
        
      </div>
      </div>
    </>
  )
}

export default App
