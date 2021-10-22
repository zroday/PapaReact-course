import React, { Component } from "react";

export default class ItemDescription extends Component {
  render() {
    const { name = "undefined", description = "undefined" } = this.props;
    return (
      <div>
        <p>{name}</p>
        <p>
          <i>{description}</i>
        </p>
      </div>
    );
  }
}
