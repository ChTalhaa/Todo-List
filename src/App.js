import React, { useState } from 'react';
import './App.css';
import Todo from './Todo';


function App() {
  const [input,setinput]=useState("");
  const [item,setitems]=useState([]);

const inputchange = (e)=>{
  setinput(e.target.value);
}
  const itemchange =()=>{
    setitems((olditem)=>{
      return [...olditem,input ];
    });
    setinput("");
  };
  const deleteitem =(id)=>{
    console.log("deleting")
    setitems((olditem)=>{
      return olditem.filter(( arr,index)=>{
        return index !== id

      });
    });
  };
  
  return (
        <>
        <div className='main_div'>
          <div className='center_div'>
            <br/>
            <h1>Todo List </h1>
            <br/>
            <input type='text' placeholder='ADD ITEMS' value={input} onChange={inputchange}/>
            <button onClick={itemchange}> + </button>
            <ol>
              {item.map((itemval,index)=>{
                return <>
                <Todo
                key={index}
                id={index}
                 text={itemval} 
                onSelect={deleteitem}
                 />
                </>
              })}
              

            </ol>
          </div>
        </div>
      
        </>
      
  );
}

export default App;
