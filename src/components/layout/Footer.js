import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';

class Footer extends Component {
  render() {
    return (
      <div>
        <h4>+++++++++++++ Footer +++++++++++++</h4>
        <button onClick={e => this.props.history.push('/form')}>Go to Form</button>
        <p>
          <Link to="/contact">Go to Contact</Link>
        </p>
      </div>
    );
  }
}

export default withRouter(Footer);
