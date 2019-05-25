import React from "react";

export default class TwoWayBinding extends React.Component {
  state = {
    name: "something"
  };
  handler = e => {
    this.setState({ name: e.target.value });
  };
  render() {
    return (
      <div style={{ backgroundColor: "lightblue", padding: 10 }}>
        <h2>Two Way Binding</h2>
        <strong>{this.state.name}</strong>
        <br />
        <input onChange={this.handler} value={this.state.name} />
      </div>
    );
  }
}
