import React, { Component } from "react";
import styled from "styled-components";

export default class FormSample extends Component {
  state = {
    name: "",
    surname: "",
    age: "",
    sex: "",
    approve: ""
  };
  change = e => {
    if (e.target.type === "checkbox") {
      this.setState({ [e.target.name]: !this.state[e.target.name] });
    } else {
      this.setState({ [e.target.name]: e.target.value });
    }
  };
  submit = e => {
    console.log("SAVED!");
    console.log(this.state);
    e.preventDefault();
  };

  render() {
    const MyForm = styled.form`
      background-color: lightgreen;
      padding: 10px;
    `;
    return (
      <MyForm onSubmit={this.submit}>
        <h2>Form</h2>
        <input
          name="name"
          onChange={this.change}
          value={this.state.name}
          placeholder="name"
        />{" "}
        <br />
        <input
          name="surname"
          onChange={this.change}
          value={this.state.surname}
          placeholder="surname"
        />{" "}
        <br />
        <input
          name="age"
          onChange={this.change}
          value={this.state.age}
          placeholder="age"
        />{" "}
        <br />
        <select
          name="sex"
          onChange={this.change}
          value={this.state.sex}
          placeholder="sex"
        >
          <option />
          <option>Male</option>
          <option>Female</option>
        </select>
        <br />
        <label>
          Are you sure?
          <input
            type="checkbox"
            name="approve"
            onChange={this.change}
            checked={this.state.approve}
          />
        </label>
        <br />
        <button type="submit">Register</button>
      </MyForm>
    );
  }
}
