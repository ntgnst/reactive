import React, { Component } from 'react';
import SampleHOC from './SampleHOC';

class TryingHOCComponent extends Component {
  state = {
    list: []
  };
  constructor(props) {
    super(props);
    /**
     * server tarafindan props icerisinde list gelirse state'e onu al ve
     * render da onu kullan
     */
    this.state.list = props.list || [];

    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(data => data.json())
      .then(data => this.setState({ list: data }));
  }

  render() {
    return (
      <div>
        <h2>HOC</h2>
        {this.state.list.map(item => (
          <p key={item.id}>{item.title}</p>
        ))}
      </div>
    );
  }
}

export default SampleHOC(TryingHOCComponent);
