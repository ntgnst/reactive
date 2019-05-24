import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllAlbum, getAlbumById } from '../redux/actions/album';

class ReduxAlbums extends Component {
  render() {
    return (
      <div>
        <h2>Redux Albums</h2>
        {this.props.albums.map(item => (
          <p key={item.id}>{item.title}</p>
        ))}
        <button
          onClick={e => {
            this.props.dispatch(getAllAlbum());
          }}>
          get all
        </button>
        <button
          onClick={e => {
            this.props.dispatch(getAlbumById(3));
          }}>
          get by 13
        </button>
      </div>
    );
  }
}
const mapStateToProps = (state, props) => ({ albums: state.albums });
export default connect(mapStateToProps)(ReduxAlbums);
