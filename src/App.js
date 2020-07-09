import React from 'react';
import TodoList from './components/TodoList'
import ToDoForm from './components/TodoForm'

class App extends React.Component {
  constructor(){
      super()
     this.state= {
       toDoList:
     [
       {key:505,
      todo:'Workout',
      complete:false},

      {key:506,
        todo:'Make Breakfast',
        complete:false},

      {key:507,
        todo:'Buy Stocks',
        complete:false}
     ] 
     }
     
     
    }

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {

        return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <ToDoForm/>
        <TodoList todos={this.state.toDoList}/>

      </div>
    );
  }


}

export default App;
