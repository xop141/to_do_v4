import './App.css';
import React, { useState } from 'react';

let id_counter = 0;

function App() {
  const [todo, setTodo] = useState([]);
  const [input, setInput] = useState("");
  const [filter, setFilter] = useState("all");


  const handle_input = (event) => {
    setInput(event.target.value);
  };

  const add_task = () => {
    if (input.length === 0) {
      return; 
    } else {
      id_counter = id_counter + 1;
      setTodo([...todo, { text: input, status: 'active', id: id_counter }]);
      setInput("");
    }
  };



  const statusdisplayer = (id) => {
    setTodo(todo.map(tod =>
      tod.id === id ? { ...tod, status: tod.status === 'done' ? 'active' : 'done' } : tod
    ));
    
    
  };
 // const statuschecker = (tod) => {
   // return tod.status === 'done';
  //};
  const deleteALL=()=>{
    setTodo([])
  }
const deleteTask=()=>{
  console.log(1);
  
}
  const showdone = () => {
    setFilter("done");
  };

  const showactive = () => {
    setFilter("active");
  };

  const showall = () => {
    setFilter("all");
   
   

    
  };

  const filteredTodos = todo.filter(tod => {
    if (filter === "done") {
      return tod.status === "done";
    } else if (filter === "active") {
      return tod.status === "active";
    }
    return true; 
  });
const deletetask=(event)=>{
  console.log(event);
  
}

  return (
    <div className='background'>
      <div id='top'>
        <div id='header'>To-Do list</div>
        <div id='input_field'>
          <input onChange={handle_input} value={input} id='input' placeholder='add task' />
          <button id='add_button' onClick={add_task} disabled={input.length === 0}>Add</button>
        </div>
        <div id='button_field'>
          <button onClick={showall}>All</button>
          <button onClick={showactive}>Active</button>
          <button onClick={showdone}>Done</button>
        </div>
        <div id='content_field'>
          {filteredTodos.length === 0 ? (
            <p>No tasks yet. Add one above!</p>
          ) : (
            filteredTodos.map((tod) => (
         <div id='test2'>
              <div key={tod.id} className='box'>
                <input
                  id='check'
                  type="checkbox"
                  checked={tod.status === 'done'}
                  onChange={() => statusdisplayer(tod.id)}
                  
                />
                {tod.text}
                </div>
                <button id='delete_button_container' onClick={deleteTask}>delete</button>
 </div>
            ))
          )}
        </div>
      </div>
      <div id='bottom'>
      {todo.length} task
      <button onClick={deleteALL}>delete all</button>
      
      </div>
    </div>
  );
}

export default App;
