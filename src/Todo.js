import React from 'react'

function Todo(props) {
    
  return (
    <>
        <div className='todo_style'>
                <i class="fa fa-times" aria-hidden="true" onClick={()=>{
                    props.onSelect(props.id);
                }}>x</i>
                <li>{props.text}</li>
                </div>
                </>
  )
}

export default Todo