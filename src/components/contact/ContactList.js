import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ContactList extends Component {
  static propTypes = {
    list: PropTypes.array.isRequired,
    search: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
  };
  render() {
    return (
      <div>
        <input onChange={e => this.props.search(e.target.value)} placeholder="search..." />
        <br />
        <ul>
          {this.props.list.map(contact => (
            <li key={contact.phone}>
              {contact.name} <button onClick={e => this.props.remove(contact.name)}>X</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
