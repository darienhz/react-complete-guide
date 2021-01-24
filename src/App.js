import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
import styled from 'styled-components'

const StyledButton = styled.button`
  background-color: lightgreen;
  font: inherit;
  border: 2px solid lightblue;
  padding: 8px;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: lightblue;
  }
`


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

    const buttonStyle = {

    }

      let persons = null;

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
        buttonStyle.backgroundColor = 'red';
        buttonStyle[':hover'] = {
          backgroundColor: 'salmon',
          color: 'black'
        }
      }

      let classes = [];
      if (this.state.persons.length <= 2) {
        classes.push('red');
      }
      if (this.state.persons.length <= 1) {
        classes.push('bold');
      }

    return (
        <div className="App">
          <h1>Hi I'm a React App</h1>
          <p className={classes.join(' ')}>Learning to code with React</p>
          <StyledButton
           onClick={this.togglePersonHandler.bind(this, 'Darien!!')}>Switch Name</StyledButton>
          {persons}
        </div>
    );
  }
}

export default App;

/* <Person name={this.state.persons[0].name}
age={this.state.persons[0].age}> My hobbies: Video games</Person>
<Person
name={this.state.persons[1].name}
age={this.state.persons[1].age}
click={this.switchNamedHandler.bind(this, 'Darien Hernandez')}
changed={this.nameChangedHandler}/>
<Person
name={this.state.persons[2].name}
age={this.state.persons[2].age}/> */