import React, {Component} from 'react';

export default class Clock extends Component {
  constructor() {
    super();
    this.state = {
      date: new Date(),
      isToggleOn: true
    };

    // this.handleClick = this.handleClick.bind(this) // 方法1 使用 bind 绑定 this
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

  handleClick() {  //  方法2 使用箭头函数绑定 this, 方法3同理，在 dom 中使用
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }))
  }

  render() {
    return (
      <div>
        <h3>Use State In React</h3>
        <h4 className="clock">It is {this.state.date.toLocaleTimeString()}.</h4>
        <button onClick={e => this.handleClick(e)}>
          {this.state.isToggleOn ? 'ON' : 'OFF'}
        </button>
      </div>
    )
  }
}