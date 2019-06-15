import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getAllPhoto,
  getPhotoById,
  getLessPhoto
} from "../redux/actions/photo";
import { Parallax } from "react-parallax";

class ReduxPhoto extends Component {
  render() {
    const insideStyles = {
      background: "white",
      padding: 20,
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%,-50%)",
      height: "auto"
    };
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
            <React.Fragment key={item.thumbnailUrl}>
              {item.title}
              <Parallax
                strength={300}
                css={insideStyles}
                bgImageSizes={200}
                bgImage={item.thumbnailUrl}
                blur={{ min: -7, max: 10 }}
                renderLayer={percentage => (
                  <div>
                    <div
                      style={{
                        position: "absolute",
                        background: `rgba(255, 255, 224, ${percentage * 1})`,
                        left: "50%",
                        top: "50%",
                        borderRadius: "50%",
                        transform: "translate(-50%,-50%)",
                        width: percentage * 500,
                        height: percentage * 500
                      }}
                    />
                  </div>
                )}
              >
                <div style={{ height: 500 }}>
                  <div style={{
                        position: "absolute",
                        background: `rgba(255, 255, 255, 0.7)`,
                        left: "50%",
                        top: "50%",
                        transform: "translate(-50%,-50%)",
                      }}>Description will be come here ....</div>
                </div>
              </Parallax>
            </React.Fragment>
          ))}
          <br />
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state, props) => ({ photos: state.photos });
export default connect(mapStateToProps)(ReduxPhoto);
