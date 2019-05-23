import React, { Component } from 'react';

export default class ErrorHandler extends Component {
  state = { hasError: false };

  componentDidCatch(error, errorInfo) {
    console.log('============== ERR ===============');
    console.log(error);
    console.log(errorInfo);
    console.log('============== ERR ===============');

    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}
