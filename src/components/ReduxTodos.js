import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllTodos, getTodosById } from '../redux/actions/todos';

class ReduxTodos extends Component {
  render() {
    return (
      <div>
        <h2>Redux Todos</h2>
        {this.props.todos && this.props.todos.map(item => <p key={item.id}>{item.title}</p>)}
        <button
          onClick={e => {
            this.props.dispatch(getAllTodos);
          }}>
          get all
        </button>
        <button
          onClick={e => {
            this.props.dispatch(getTodosById(13));
          }}>
          get by 13
        </button>
      </div>
    );
  }
}
const mapStateToProps = (state, props) => ({ todos: state.todos });
export default connect(mapStateToProps)(ReduxTodos);
