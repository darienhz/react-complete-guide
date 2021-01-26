import React, { Component } from 'react';
// import logo from './logo.svg';
import classes from './App.css';
import Person from '../components/Persons/Person/Person';


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
      let btnClass = '';

      if (this.state.showPersons) {
        persons = (
          <div>
            {this.state.persons.map((person, index) => {
              return <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(event) => this.nameChangedHandler(event, person.id)}/>
            })}

          </div>
        );

        btnClass = classes.Red;
      }

      let assignedClasses = [];
      if (this.state.persons.length <= 2) {
        assignedClasses.push(classes.red);
      }
      if (this.state.persons.length <= 1) {
        assignedClasses.push(classes.bold);
      }

    return (
        <div className={classes.App}>
          <h1>Hi I'm a React App</h1>
          <p className={assignedClasses.join(' ')}>Learning to code with React</p>
          <button className={btnClass}
           onClick={this.togglePersonHandler.bind(this, 'Darien!!')}>Switch Name</button>
          {persons}
        </div>
    );
  }
}

export default App;
