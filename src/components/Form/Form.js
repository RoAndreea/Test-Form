import React from "react";
import "./Form.css";
import TextArea from "../TextArea/TextArea";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      color: "",
      checked: false
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

  handleCheckRadio = event => {
    this.setState({
      color: event.target.value
    });
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
                className="form-control input-first"
                value={this.state.firstName}
                onChange={this.handleChange("firstName")}
              ></input>{" "}
              <br></br>
            </div>
            <div className="form-elemen l-name" data-test="form-element">
              <label className="labelInput">Last name:</label>
              <input
                className="form-control input-last"
                type="text"
                name="lastname"
                maxLength="32"
                value={this.state.lastName}
                onChange={this.handleChange("lastName")}
              ></input>{" "}
            </div>
            <label>Choose your favorite color</label>
            <div className="radio ">
              <label>
                <input
                  type="radio"
                  name="color"
                  value="black"
                  className="input-color"
                  checked={this.state.color === "black"}
                  onChange={this.handleCheckRadio}
                />
                Black
              </label>
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
