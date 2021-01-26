import React, { Component } from 'react';
// import logo from './logo.svg';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';


class App extends Component {
  state = {
    persons: [
      { id: 'sfs', name: 'Darien', age: 31 },
      { id: 'fd', name: 'Justin', age: 31 },
      { id: 'ds', name: 'Joey', age: 32 },
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

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons});

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
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons :persons});
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {

      let persons = null;

      if (this.state.showPersons) {
        persons =  <Persons
              persons={this.state.persons}
              clicked={this.deletePersonHandler}
              changed={this.nameChangedHandler}/>
        ;
      }

    return (
        <div className={classes.App}>
          <Cockpit
            showPersons={this.state.showPersons}
            persons={this.state.persons}
            clicked={this.togglePersonHandler} />
          {persons}
        </div>
    );
  }
}

export default App;
