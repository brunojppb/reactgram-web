import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const user = {
    firstName: 'Jill',
    lastName: 'Koh'
  };

  return (
    <div className="App">
      <HelloWorld user={user}/>
    </div>
  );
}

function HelloWorld(props) {
  const {firstName, lastName} = props.user;
  return(
    <div>
      <h1>Hello, world!</h1>
      <h2>My first name is {`${firstName} ${lastName}`}</h2>
    </div>
  );
}

export default App;
