import React, {Component} from 'react';

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
};

function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

function tryConvert(value, convert) {
  const input = parseFloat(value);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p>The water would boil.</p>;
  }
  return <p>The water would not boil.</p>;
}

class TemperatureInput extends Component {
  constructor() {
    super()
  }

  handleChange(e) {
    this.props.onChange(e.target.value)
  }

  render() {
    const value = this.props.value;
    const scale = this.props.scale;

    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}:</legend>
        <input type="text" value={value} onChange={e => this.handleChange(e)}/>
      </fieldset>
    )
  }
}

export default class Calculator extends Component {
  constructor() {
    super();
    this.state = {
      value: '',
      scale: 'c'
    };
  }

  handleChange(scale, value) {
    this.setState({
      scale,
      value
    })
  }

  render() {
    const scale = this.state.scale;
    const value = this.state.value;
    const celsius = scale === 'f' ? tryConvert(value, toCelsius) : value;
    const fahrenheit = scale === 'c' ? tryConvert(value, toFahrenheit) : value;

    return (
      <div>
        <TemperatureInput
          scale="c"
          value={celsius}
          onChange={value => this.handleChange('c', value)} />
        <TemperatureInput
          scale="f"
          value={fahrenheit}
          onChange={value => this.handleChange('f', value)} />
        <BoilingVerdict
          celsius={parseFloat(celsius)}/>
      </div>
    )
  }
}