import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [ {
          name: 'Frankenstein'
        }, {
          name: 'Dracula'
        }, {
          name: 'Zombie'
        }
      ]
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>{this.state.string}</p>
          <p>{this.state.string}</p>
          <p>{this.state.string}</p>
          {/* <button onClick={() => this.setState({ string: 'Hello Shuaiqing' })}>Change Text</button> */}
          <button onClick={() => this.state = { string: 'Hello Shuaiqing' }}>Change Text</button>
          <button onClick={() => console.log(this.state) }>Print State</button>
        </header>
      </div>
    );   
  }
}

export default App;
