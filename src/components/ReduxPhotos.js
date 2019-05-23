import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllPhoto, getPhotoById, getLessPhoto } from '../redux/actions/photo';

class ReduxPhoto extends Component {
  render() {
    return (
      <div>
        <h2>Redux Photos</h2>
        {this.props.photos.map(item => (
          <div style={{ display: 'inline-block', width: 150 }} key={item.id}>
            <img alt="" src={item.thumbnailUrl} />
            <br />
            {item.title}
          </div>
        ))}
        <br />
        <button
          onClick={e => {
            this.props.dispatch(getAllPhoto());
          }}>
          get all
        </button>
        <button
          onClick={e => {
            this.props.dispatch(getLessPhoto(3));
          }}>
          get less
        </button>
        <button
          onClick={e => {
            this.props.dispatch(getPhotoById(3878));
          }}>
          3878
        </button>
      </div>
    );
  }
}
const mapStateToProps = (state, props) => ({ photos: state.photos });
export default connect(mapStateToProps)(ReduxPhoto);
