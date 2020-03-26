import React from "react";
import "./Form.css";
import TextArea from "../TextArea/TextArea";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: ""
    };
  }

  handleChange = field => event => {
    this.setState(
      {
        [field]: event.target.value
      },
      () => {}
    );
  };

  render() {
    return (
      <div className="container" data-test="form-component">
        <div className="divForm" data-test="form">
          <form>
            <div className="form-element" data-test="form-element">
              <label className="labelInput">First name:</label>
              <input
                type="text"
                maxLength="32"
                className="form-control"
                value={this.state.firstName}
                onChange={this.handleChange("firstName")}
              ></input>{" "}
              <br></br>
            </div>
            <div className="form-element" data-test="form-element">
              <label className="labelInput">Last name:</label>
              <input
                type="text"
                maxLength="32"
                className="form-control"
                value={this.state.lastName}
                onChange={this.handleChange("lastName")}
              ></input>{" "}
            </div>
          </form>
        </div>
        <div data-test="text-area-component">
          <TextArea passState={this.state}></TextArea>
        </div>
      </div>
    );
  }
}

export default Form;
