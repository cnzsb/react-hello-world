import React, {Component} from 'react';

export default class Clock extends Component {
  constructor() {
    super();
    this.state = {
      date: new Date()
    };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  tick() {
    this.setState({
      date: new Date()
    })
  }

  render() {
    return (
      <div>
        <h3>Use State In React</h3>
        <h4 className="clock">It is {this.state.date.toLocaleTimeString()}.</h4>
      </div>
    )
  }
}