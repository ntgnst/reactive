import React, { Component } from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import CustomLoader from "../components/CustomLoader";

class FetchData extends Component {
  state = {
    list: [],
    isLoading: true
  };

  userUrl = "https://jsonplaceholder.typicode.com/users";
  postUrl = "https://jsonplaceholder.typicode.com/posts";
  myTimer;
  fetchRemoteData = () => {
    const type = this.props.match.params.type;
    this.setState({ isLoading: true });

    this.myTimer = setTimeout(() => {
      fetch(type === "users" ? this.userUrl : this.postUrl)
        .then(data => data.json())
        .then(data => {
          this.setState({ list: data, isLoading: false });
        });
    }, 1000);
  };

  componentDidMount() {
    this.fetchRemoteData();
  }
  componentWillReceiveProps(nextProps, nextContext) {
    this.fetchRemoteData();
  }
  componentWillUnmount() {
    clearTimeout(this.myTimer);
  }
  render() {
    const MyDiv = styled.div`
      background-color: lightsalmon;
      padding: 10px;
    `;
    const type = this.props.match.params.type;
    return (
      <MyDiv>
        <h2>Fetch {type}</h2>
        {this.state.isLoading ? (
          <CustomLoader type="MutatingDot" color="#00BFFF"/>
        ) : (
          this.state.list.map(item =>
            type === "users" ? (
              <p key={item.id}>
                {item.name} - @{item.username}
              </p>
            ) : (
              <p key={item.id}>{item.title}</p>
            )
          )
        )}
      </MyDiv>
    );
  }
}
export default withRouter(FetchData);
