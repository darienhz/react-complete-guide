import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';




class App extends Component {
  state = {
    persons: [
      { name: 'Darien', age: 31 },
      { name: 'Justin', age: 31 },
      { name: 'Joey', age: 32 },
    ],
    otherState: 'Something else!',
    showPersons: false
  }

//   switchNamedHandler = (newName) => {
//    // Dont do this!! this.state.persons[0].name = 'Darien Hernandez';
//    this.setState({
//      persons: [
//       { name: newName, age: 31 },
//       { name: 'Justin Pla', age: 31 },
//       { name: 'Joey G', age: 32 },
//     ]
//   })
// }

  nameChangedHandler = (event) => {
    // Dont do this!! this.state.persons[0].name = 'Darien Hernandez';
    this.setState({
      persons: [
       { name: 'Darien', age: 31 },
       { name: event.target.value, age: 31 },
       { name: 'Joey G', age: 32 },
     ]
   })
 }

  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons;
    persons.splice(personIndex, 1);
    this.setState({persons :persons})
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {

    const buttonStyle = {
      backgroundColor: 'lightgreen',
      font: 'inherit',
      border: '2px solid lightblue',
      padding: '8px',
      color: 'white',
      cursor: 'pointer'
    }

      let persons = null;

      if (this.state.showPersons) {
        persons = (
          <div>
            {this.state.persons.map(person => {
              return <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}/>
            })}

          </div>
        )
      }

    return (
      <div className="App">
        <h1>Hi I'm a React App</h1>
        <p>Learning to code with React</p>
        <button style={buttonStyle}
         onClick={this.togglePersonHandler.bind(this, 'Darien!!')}>Switch Name</button>
         {persons}
      </div>
    );
  }
}

export default App;

