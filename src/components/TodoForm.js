import React from 'react'
import {Form, Button} from 'reactstrap'

const TodoForm = () => {

    return(
        <Form>
            <input name='todo'placeholder='what do you want To Do?'></input>
            <Button>Add to do</Button>
            <Button>Clear checked</Button>
        </Form>
    )
}

export default TodoForm