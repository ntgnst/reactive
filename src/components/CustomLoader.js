import React from "react";
import Loader from "react-loader-spinner";
class CustomLoader extends React.Component {
  render() {
    return (
      <div
        style={{
          display: "block",
          position: "absolute",
          top: "40em",
          left: 0,
          height: "100%",
          width: "100%"
        }}
      >
        <div style={{ display: "cell", verticalAlign: "middle" }}>
          <div
            style={{ marginLeft: "auto", marginRight: "auto", width: "800px" }}
          >
            <Loader
              type={this.props.type}
              color={this.props.color}
              height="100"
              width="100"
            >
              {this.props.children}
            </Loader>
          </div>
        </div>
      </div>
    );
  }
}

export default CustomLoader;
