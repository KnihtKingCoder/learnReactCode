import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../features/todoSlice";




function TodoItem({ todo }) {

    const todos=useSelector(state=>state.todos)
    const dispatch=useDispatch()

    
    return (
    //    <>
    //     <div>
    //         {todos.map((todo)=>(
    //              <div className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black mt-4
    //              justify-between items-center bg-slate-700}`} key={todo.id}>{todo.text} {console.log(todo.text)}
    //                  {/* Delete Todo Button */}
    //              <button
    //                  className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
    //                  onClick={()=>dispatch(removeTodo(todo.id))}
    //              >
    //                  ❌
    //              </button>
    //          </div>
    //         ))}
    //     </div>
    //     </> 
    <>
    <div>Todos</div>
    <ul className="list-none">
        {todos.map((todo) => (
          <li
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
            key={todo.id}
          >
            <div className='text-white'>{todo.text}</div>
            <button
             onClick={() => dispatch(removeTodo(todo.id))}
              className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </>
           
    );
}

export default TodoItem;
