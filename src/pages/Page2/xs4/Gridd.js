import React from "react";

class Gridd extends React.Component {
  render() {
    return(
      <>
        <input
          type="file"
          onChange={this.props.change}
        />
      </>
    );
  }
}

export default Gridd;
