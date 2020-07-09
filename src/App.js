import React from 'react';
import TodoList from './components/TodoList'
import ToDoForm from './components/TodoForm'
import './components/Todo.css'
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
const toDoList =      [
  {id:505,
 todo:'Workout',
 complete:false},

 {id:506,
   todo:'Make Breakfast',
   complete:false},

 {id:507,
   todo:'Buy Stocks',
   complete:false}
] 

class App extends React.Component {
  constructor(){
      super()
     this.state= {
       toDoList
     }     
    }

    handleChange = e => {
      // console.log(e.target.name, e.target.value)
      this.setState({ [e.target.name]: e.target.value})
     }
     
     handleClear = e => {
      e.preventDefault()
      this.setState({
        toDoList: this.state.toDoList.filter(item => !item.complete)
      })
     }

     handleSubmit = formData => {
       this.setState({
         toDoList: [
           ...this.state.toDoList,
           {...formData, id:Date.now(), complete:false}
         ]
       })
     }

     markChecked = itemId => {
      this.setState({
        toDoList: this.state.toDoList.map(item => {
          if (itemId === item.id) {
            return {
              ...item,
              complete: !item.complete
            }
          }
          return item
        })
      })

     }

  render() {

        return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <ToDoForm handleSubmit={this.handleSubmit} handleClear={this.handleClear} handleChange={this.handleChange} handleAdd={this.handleAdd}/>
        <TodoList todos={this.state.toDoList} checked={this.markChecked}/>

      </div>
    );
  }


}

export default App;
