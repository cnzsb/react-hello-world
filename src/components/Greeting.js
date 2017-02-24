import React, {Component} from 'react'

export default class Greeting extends Component {
  render() {
    if (this.props.isLoggedIn) {
      return (
        <p>Welcome back!</p>
      )
    } else {
      return (
        <p>Please sign up.</p>
      )
    }
  }
}