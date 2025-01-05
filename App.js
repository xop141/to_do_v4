

import './App.css';
import React, { useState } from 'react';



let id_counter = 0


function App() {


 

 
const status_displayer=(id)=>{
  
  
  
  todo.map((tod)=>{
    if (tod.id === id) {
      return(tod.status = "done")
    }
  })
  
}
const status_checker=(tod)=>{
  if (tod.status === "done") {
    return true
  }
  
  }
const show_done=(todo)=>{
  
  console.log(todo.filter(status_checker));




}


  const [todo, setTodo] = useState ([])
const [input, setInput] = useState ("")


  const handle_input = (event) =>{
    setInput(event.target.value)
  }
  const add_task=()=>{
   if (input.length==0) {
    alert ("empty")
   } else{
    id_counter = id_counter+1
    setTodo([...todo,{text: input, status:'active', id: id_counter }])
    setInput("")
    console.log(todo);
   }
  }

  return (
   <div className='background'>
    <div id='top'>
      <div id='header'>To-Do list</div>
      <div id='input_field'>
      <input onChange={handle_input} value={input} id='input' placeholder='add task' />
     <button id='add_button' onClick={add_task}>add</button>
      </div>
      <div id='button_field'>
      <button>all</button>
      <button>active</button>
      <button onClick={()=>show_done(todo)}>done</button>
    </div>
      <div id='content_field'>No tasks yet. Add one above!
      {todo.map((todo)=>{
      return (
        <div key={todo.id} className='box'> <input id='check' type="checkbox" onClick={()=>status_displayer(todo.id)}/>{todo.text}</div>
       
      )
    })}
      </div>
    </div>
    <div id='bottom'></div>
    
   
   </div>
  )
}

export default App;