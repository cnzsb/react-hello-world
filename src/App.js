import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Comment from './components/Comment';
import Clock from './components/Clock';
import Greeting from './components/Greeting';
import Form from './components/Form';
import Calculator from './components/Calculator'

class App extends Component {
  render() {
    const comment = {
      date: new Date(),
      text: 'I hope you enjoy learning React!',
      author: {
        name: 'Hello Kitty',
        avatarUrl: 'http://placekitten.com/g/64/64'
      }
    };
    const listItems = [1, 2, 3, 4].map((item, index) =>
      <li key={index}>{item}</li>
    );
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Comment author={comment.author} text={comment.text} date={comment.date}/>
        <Clock />
        <Greeting isLoggedIn={false}/>
        <ul>{listItems}</ul>
        <Form />
        <Calculator/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
      </div>
    );
  }
}

export default App;
