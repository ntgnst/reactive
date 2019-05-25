import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getAllPhoto,
  getPhotoById,
  getLessPhoto
} from "../redux/actions/photo";

class ReduxPhoto extends Component {
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
            display: "block"
          }}
        >
          <button
            onClick={e => {
              this.props.dispatch(getAllPhoto());
            }}
          >
            get all
          </button>
          <button
            onClick={e => {
              this.props.dispatch(getLessPhoto(3));
            }}
          >
            get less
          </button>
          <button
            onClick={e => {
              this.props.dispatch(getPhotoById(3878));
            }}
          >
            3878
          </button>
          <h2>Redux Photos</h2>

          {this.props.photos.map(item => (
            <div style={{ display: "inline-block", width: 150 }} key={item.id}>
              <img alt="" src={item.thumbnailUrl} />
              <br />
              {item.title}
            </div>
          ))}
          <br />
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state, props) => ({ photos: state.photos });
export default connect(mapStateToProps)(ReduxPhoto);
