import React from "react";
import { CircleLoader as Loader } from "react-spinners";
import { css } from "@emotion/core";

class CustomLoader extends React.Component {
  render() {
    const override = css`
      display: block;
      margin: 0 auto;
      border-color: red;
    `;
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
              sizeUnit={"px"}
              size={50}
              color={"#000000"}
              loading={true}
              css={override}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default CustomLoader;
