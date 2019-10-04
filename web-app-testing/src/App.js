import React, { Component } from 'react';
import Display from "./components/Display"; 
// import Dashboard from './components/Dashboard';
import './App.css';


class App extends Component {
  constructor() { 
    super(); 
    this.state = { 
      thing: "setting state here"
    };
  };


  render() { 
    return ( 
      <div className="App">
        <div className="display">
          <h1>APP JS</h1>
            <Display />
        </div>
      </div>
    );
  };
}


export default App;
