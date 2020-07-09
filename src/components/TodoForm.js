import React, {useState} from 'react'
import {Form, Button} from 'reactstrap'

const TodoForm = (props) => {
    console.log()

    const [formData, setFormData] = useState({
        todo:''
    })

    const formSubmit = (e) => {
        e.preventDefault()
        props.handleSubmit(formData)
    }

    const handleChange = e => {
        // console.log(e.target.name, e.target.value)
        setFormData({ [e.target.name]: e.target.value})
       }

    return(
        <Form >
            <input type='text' name='todo' placeholder='what do you want To Do?' onChange={handleChange}></input>
            <Button onClick={(e) => formSubmit(e)}>Add to do</Button>
            <Button onClick={props.handleClear}>Clear checked</Button>
        </Form>
    )
}

export default TodoForm