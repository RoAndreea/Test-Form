import React from "react";

class TextArea extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="textArea">
        <h2>First Name</h2>
        <h4>{this.props.passState.firstName}</h4>
        <h2>Last Name</h2>
        <h4>{this.props.passState.lastName}</h4>
        <h2>Color</h2>
        <h4>{this.props.passState.color}</h4>
      </div>
    );
  }
}

export default TextArea;
