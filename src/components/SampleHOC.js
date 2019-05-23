import React, { Component } from 'react';

const SampleHOC = (WrappedComponent, listField) =>
  class SampleHOC extends Component {
    render() {
      return (
        <div>{this.props[listField] && this.props[listField].length === 0 ? 'Loading...' : <WrappedComponent {...this.props} />}</div>
      );
    }
  };

export default SampleHOC;
