import React from 'react'
import Todo from './Todo'

const TodoList =(props)=> {
    return(
        <div>
            {props.todos.map(data=>{
            // console.log(data)
            return(
                <Todo todos={data} checked={props.checked}/>)})}
            
        </div>
    )
}

// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

export default TodoList