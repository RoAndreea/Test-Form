import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";

import Form from "./Form";
import TextArea from "../TextArea/TextArea";

Enzyme.configure({ adapter: new EnzymeAdapter() });

test("renders without error", () => {
  const wrapper = shallow(<Form />);
  const formComponent = wrapper.find("[data-test='form-component']");
  expect(formComponent.length).toBe(1);
});

test("renders form", () => {
  const wrapper = shallow(<Form />);
  const formField = wrapper.find("[data-test='form']");
  expect(formField.length).toBe(1);
});

test("renders imput", () => {
  const wrapper = shallow(<Form />);
  const formElement = wrapper.find("[data-test='form-element']");
  expect(formElement.length).toBe(2);
});

test(" input fields are empty", () => {
  const wrapper = shallow(<Form />);
  let initialFieldState = wrapper.state("firstName");
  expect(initialFieldState).toBe("");
  initialFieldState = wrapper.state("lastName");
  expect(initialFieldState).toBe("");
  initialFieldState = wrapper.state("color");
  expect(initialFieldState).toBe("");
});

describe("Form component", () => {
  const wrapper = shallow(<Form />);

  it("change the state after change the input value for the first name field", () => {
    wrapper
      .find(".input-first")
      .simulate("change", { target: { name: "firstName", value: "Andreea" } });
    expect(wrapper.state("firstName")).toEqual("Andreea");
  });
  it("change the state after change the input value for the last name field", () => {
    wrapper
      .find(".input-last")
      .simulate("change", { target: { name: "lastName", value: "Roman" } });
    expect(wrapper.state("lastName")).toEqual("Roman");
  });
  it("change the state after change the input value for the color", () => {
    wrapper
      .find(".input-color")
      .simulate("change", { target: { name: "color", value: "black" } });
    expect(wrapper.state("color")).toEqual("black");
  });
});

it("data is passed to the text area", () => {
  const wrapper = shallow(<Form />);
  const newState = {
    firstName: "Andreea",
    lastName: "Roman",
    color: "black",
    checked: false
  };
  wrapper.setState(newState);
  expect(wrapper.find("TextArea").prop("passState")).toEqual(newState);
});
