import { render } from '@testing-library/react';
import { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {

  state = {
    persons: [
      {id: 'kkk', name: 'cassie', age: 12},
      {id: 'ggg', name: 'donga', age: 77},
      {id: 'www', name: 'kendrick', age: 7},
    ],
    showPersons: false
  }

  switchNameHandler = (newName) =>{
    this.setState({
      persons: [
        {name: 'Timothy', age: 21},
        {name: 'adun', age: 3},
        {name: newName, age: 79},
      ],
    })
  }
  nameChangeHandler = (event, id) =>{
    const persinIndex = this.state.persons.findIndex(p =>{
      return p.id === id 
    })
    const persoon = [...this.state.persons[persinIndex]]
    persoon.name = event.target.value

    const abiru = [...this.state.persons]
    abiru[persinIndex] = persoon

    this.setState({
      abiru: abiru
    })

  }
  // nameChangeHandler = (event) =>{
  //   this.setState(

  //     {
  //       persons: [
  //         {name: event.target.value, age: 21},
  //         {name: 'WAHALA O', age: 3},
  //         {name: 'ABAYOMI', age: 79},
  //       ],
  //     })
  // }
  showPersonalHandler = () =>{
    const doesShow = this.state.showPersons
    this.setState({
      showPersons: !doesShow
    })
  }
  deletePersonHandler = (personIndex) =>{
    const osas = this.state.persons.split();
    osas.splice(personIndex, 1)
    this.setState({
      osas: osas
    })
  }


  render() {

    let people = null

    if(this.state.showPersons) {

      people = (
        <div>
          {this.state.persons.map((pesin, index) =>{
            return <Person
            clicked = {()=>this.deletePersonHandler(index)} 
            name = {pesin.name}
            age = {pesin.age}
            key = {pesin.id}
            changed = {(event)=>this.nameChangeHandler(event, pesin.id)}
            ></Person>            
          })}

        </div>
      )
    }



  return(
    <div className="App">
      <h1>HI, I AM A REACT JS DEVELOPER</h1>
      <button onClick={this.showPersonalHandler}>SWITCH </button>

      {people}
      
    </div>
  )
}
}

export default App;
