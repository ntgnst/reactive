import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllTodos, getTodosById } from "../redux/actions/todo";

class ReduxTodos extends Component {
  render() {
    return (
      <div
        style={{
          boxShadow: "0 1px 1px 0 rgba(0,0,0,0.2)",
          transition: "0.3s",
          width: "100%"
        }}
      >
        <div
          style={{
            padding: "16px 16px",
            textAlign: "center",
          }}
        >
          <h2>Redux Todos</h2>
          {this.props.todos.map(item => (
            <p key={item.id}>{item.title}</p>
          ))}
          <button
            onClick={e => {
              this.props.dispatch(getAllTodos());
            }}
          >
            get all
          </button>
          <button
            onClick={e => {
              this.props.dispatch(getTodosById(13));
            }}
          >
            get by 13
          </button>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state, props) => ({ todos: state.todos });
export default connect(mapStateToProps)(ReduxTodos);
