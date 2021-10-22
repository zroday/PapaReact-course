import React, { Component } from "react";

export default class AppCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  decrement = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  render() {
    return (
      <div>
        <h1>Welcome to my counterApp</h1>
        <p>The count is: {this.state.count}</p>
        <button onClick={this.decrement}>-</button>
        <button onClick={this.increment}>+</button>
      </div>
    );
  }
}
