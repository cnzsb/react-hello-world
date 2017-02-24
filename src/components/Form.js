import React, {Component} from 'react'

class Textarea extends Component {
  constructor() {
    super();
    this.state = {
      value: ''
    }
  }

  handleChange(e) {
    this.setState({
      value: e.target.value
    })
  }

  render() {
    return (
      <textarea value={this.state.value} onChange={e => this.handleChange(e)}></textarea>
    )
  }
}

class NameForm extends Component {
  constructor() {
    super();
    this.state = {
      value: ''
    };
  }

  handleChange(e) {
    this.setState({
      value: e.target.value
    })
  }

  handleSubmit(e) {
    console.log(`Name is ${this.state.value} and Essay is ${this.refs.textarea.state.value}`);
    e.preventDefault();
  }

  render() {
    return (
      <form onSubmit={e => this.handleSubmit(e)}>
        <label>
          Name: <input type="text"
                       value={this.state.value}
                       onChange={e => this.handleChange(e)} />
        </label>
        <br/>
        <label>
          Essay: <Textarea ref="textarea" />
        </label>
        <br/>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

class Select extends Component {
  constructor() {
    super();

    this.state = {
      value: 'apple'
    };
  }

  handleChange(e) {
    const value = e.target.value;
    this.setState({
      value
    });
    console.log(`${value} selected`);
  }

  render() {
    const fruits = ['apple', 'banana', 'coconut', 'orange'].map((fruit, index) =>
      <option key={index} value={fruit}>{fruit}</option>
    );

    return (
      <select onChange={e => this.handleChange(e)}>
        {fruits}
      </select>
    );
  }
}

class MultipleInputs extends Component {
  constructor() {
    super();

    this.state = {
      isGoing: true,
      numbers: 2
    }
  }

  handleChange(e) {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    })
  }

  handleSubmit(e) {
    console.log(`It is ${this.ip.value}.`)
    e.preventDefault()
  }

  render() {
    return (
      <form>
        <label>
          Is going: <input type="checkbox" name="isGoing" checked={this.state.isGoing} onChange={e => this.handleChange(e)}/>
        </label>
        <br/>
        <label>
          Numbers: <input type="number" name="numbers" value={this.state.numbers} onChange={e => this.handleChange(e)}/>
        </label>
        <br/>
        <label>
          Uncontrolled input: <input type="text" ref={input => this.ip = input}/>
          <input type="submit" value="Submit" onClick={e => this.handleSubmit(e)}/>
        </label>
      </form>
    )
  }
}

export default class Form extends Component {
  render() {
    return (
      <div>
        <NameForm/>
        <br/>
        <Select/>
        <br/>
        <MultipleInputs/>
        <br/>
      </div>
    )
  }
}