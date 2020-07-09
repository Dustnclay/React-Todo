import React from 'react'
import {Card,CardTitle} from 'reactstrap'

const Todo = (props) => {
    
    return(
        <Card>
            <CardTitle>{props.todos.todo}</CardTitle>
        </Card>
    )
}

export default Todo