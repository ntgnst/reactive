import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class OldPage extends Component {
  state = { send: false };
  render() {
    console.log('this.props;:', this.props);
    setTimeout(() => {
      this.setState({ send: true });
    }, 3000);

    return (
      <div style={{ padding: 100 }}>
        {this.state.send ? <Redirect to="/contact" /> : ''} <p>you gonna go to Contact...</p>
      </div>
    );
  }
}

export default OldPage;
