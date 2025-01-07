import './App.css';
import React, { useState } from 'react';
import Moment from 'react-moment';

let id_counter = 0;
let Test = 0

function App() {
  const [todo, setTodo] = useState([]);
  const [input, setInput] = useState("");
  const [filter, setFilter] = useState("all");

  
 


  const handle_input = (event) => {
    setInput(event.target.value);
  };

  const add_task = () => {
    if (input.length === 0) {
      alert("asd") 
    } else {
      id_counter = id_counter + 1;
      setTodo([...todo, { text: input, status: 'active', id: id_counter }]);
      setInput("");
    }
  };
const showLOG=()=>{
  
}


  const statusdisplayer = (id) => {
  
  
  
   
    
    
    setTodo(todo.map(tod =>
      tod.id === id ? { ...tod, status: tod.status === 'done' ? 'active' : 'done' } : tod

    ));
    
    
  };
 
 
  const deleteALL=()=>{
    setTodo([])
  }


  const deleteTask=(id)=>{
    const updated = todo.filter((todos)=>todos.id !== id);
 setTodo(updated)
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
          <input onChange={handle_input} value={input} id='input' placeholder=' Add a new task...' />
          <div id='add_button' onClick={add_task}  >Add</div>
        </div>
        <div id='button_field'>
          <div className='test3' onClick={showall}><p>All</p></div>
          <div className='test3' id='sda' onClick={showactive}><p>Active</p></div>
          <div className='test3' onClick={showdone}><p>Completed</p></div>
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
                <div id='delete_button_container' onClick={()=>deleteTask(tod.id)}>Delete</div>
 </div>
            ))
          )}
        </div>
      </div>
      <div id='bottom'  >
      {todo.length} task
      <div id='log_button' onClick={showLOG}> </div>
      <div id='genocide'  onClick={deleteALL}>delete all</div>
      
      </div>
    </div>
  );
}

export default App;
