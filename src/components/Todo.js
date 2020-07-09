import React from 'react'
import {Card,CardTitle} from 'reactstrap'

const Todo = (props) => {
    console.log(props.todos)
    return(
        <Card 
        className={props.todos.complete === true? 'checked': 'open'}
        onClick={() =>props.checked(props.todos.id)}
        >
            <CardTitle>{props.todos.todo}</CardTitle>
        </Card>
    )
}

export default Todo