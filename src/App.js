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
    showPersons: false
  }

  switchNameHandler = (newName) =>{
    this.setState(
      {
      persons: [
        {name: 'Israel', age: 21},
        {name: newName, age: 3},
        {name: 'Abayomi', age: 79},
      ],
    }
    )
  }
  nameChangeHandler = (event) =>{
    this.setState(
      {
        persons: [
          {name: event.target.value, age: 21},
          {name: 'WAHALA O!', age: 3},
          {name: 'Abayomi', age: 79},
        ],
      }
      )
  }
  showPersonalHandler = () =>{
    const doesShow = this.state.showPersons
    this.setState({
      showPersons: !doesShow
    })
  }
  deletePersonHandler = (personIndex) =>{
    const osas = this.state.persons.splice();
    osas.splice(personIndex, 1)
    this.setState({
      osas: osas
    })
  }


  render() {
    const style = {
      backgroundColor: 'Green',
      color: 'white',
      'hover': {
        backgroundColor: 'pink'
      }
    }
    let people = null
    if(this.state.showPersons) {
      people = (
        <div>
          {this.state.persons.map((pesin, index) =>{
            return <Person
            clicked = {()=>this.deletePersonsHandler(index)} 
            name = {pesin.name}
            age = {pesin.age}
            />            
          })}
        </div>
      )
    }

  return(
    <div className="App">
      <h1>HI, I AM A REACT JS DEVELOPER</h1>
      <button onClick={this.showPersonsHandler}>SWITCH </button>
      {people}
    </div>
  )
}
}

export default App;
