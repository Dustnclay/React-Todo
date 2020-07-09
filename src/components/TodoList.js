import React from 'react'
import Todo from './Todo'

const TodoList =(props)=> {
console.log('todolist', props.todos)
    return(
        <div>
            {props.todos.map(data=>
                <Todo todos={data}/>)}
            
        </div>
    )
}

// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

export default TodoList