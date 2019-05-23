// @flow
import React, { Component } from 'react';
import ContactList from './ContactList';
import ContactAdd from './ContactAdd';
import './Contact.css';

export default class Contact extends Component {
  state = {
    contactList: [
      { name: 'ali', phone: 123 },
      { name: 'osman', phone: 321 },
      { name: 'nuri', phone: 987 },
      { name: 'ayşe', phone: 100 },
      { name: 'fatma', phone: 9999 }
    ],
    searchedContactList: []
  };

  componentDidMount = () => {
    this.searchContact();
  };

  addContact = (name, phone) => {
    let contactList = this.state.contactList;
    contactList.push({ name, phone });
    this.setState({ contactList: contactList, searchedContactList: contactList });
  };

  removeContact = name => {
    let contactList = this.state.contactList.filter(contact => contact.name !== name);
    this.setState({ contactList: contactList, searchedContactList: contactList });
  };

  searchContact = query => {
    let queryRegExp = new RegExp(query, 'i');
    this.setState({ searchedContactList: this.state.contactList.filter(contact => queryRegExp.test(contact.name)) });
  };

  render() {
    /**
     * const searchedContactList = this.state.contactList.filter()
     * render icerisi zaten her state degistiginde (input icine arama icin harf girdiginde)
     * degisecegi icin ben burada bir searchedContactList degiskeni tutarak da bunu map ile return icerisinde
     *  donebilirim
     */

    return (
      <div className="contact-wrapper">
        <h2>Contact</h2>
        <ContactList list={this.state.searchedContactList} search={this.searchContact} remove={this.removeContact} />
        <ContactAdd add={this.addContact} />
      </div>
    );
  }
}
