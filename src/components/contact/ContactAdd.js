import React, { Component } from 'react';

export default class ContactAdd extends Component {
  state = {};
  render() {
    return (
      <div>
        <input
          style={{ width: 70 }}
          placeholder="name"
          onChange={e => this.setState({ name: e.target.value })}
          value={this.state.name}
        />
        <input
          style={{ width: 70 }}
          placeholder="phone"
          onChange={e => this.setState({ phone: e.target.value })}
          value={this.state.phone}
        />
        <button
          onClick={e => {
            this.props.add(this.state.name, this.state.phone);
            this.setState({ name: '', phone: '' });
          }}
        >
          Add
        </button>
      </div>
    );
  }
}
