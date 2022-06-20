import { render } from '@testing-library/react';
import { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {

  state = {
    persons: [
      {name: 'cassie', age: 12},
      {name: 'donga', age: 77},
      {name: 'kendrick', age: 7},
    ],
    otherState: 'something'
  }

  switchNameHandler = (newName) =>{
    this.setState(
    {
      persons: [
        {name: 'Timothy', age: 21},
        {name: 'adun', age: 3},
        {name: newName, age: 79},
      ],
    }
    )
  }
  nameChangeHandler = (event) =>{
    this.setState(
      {
        persons: [
          {name: event.target.value, age: 21},
          {name: event.target.value, age: 3},
          {name: event.target.value, age: 79},
        ],
      }
      )
  }


  render() {
  return(
    <div className="App">
      <h1>HI, I AM A REACT JS DEVELOPER</h1>
      <Person
      changed = {this.nameChangeHandler} 
      name = {this.state.persons[0].name} 
      age = {this.state.persons[0].age}></Person>
      <Person
      changed = {this.nameChangeHandler}
      clicked = {()=>this.switchNameHandler('PATH')}
       name = {this.state.persons[1].name} 
       age = {this.state.persons[1].age}></Person>
      <Person
      changed = {this.nameChangeHandler} 
      name = {this.state.persons[2].name} 
      age = {this.state.persons[2].age}></Person>
      <button onClick={this.switchNameHandler.bind(this, 'ADUN!!##$$')}>SWITCH NAME</button>
    </div>
  )
  }
}

export default App;
