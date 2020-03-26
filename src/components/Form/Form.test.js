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

test("first name input field is empty", () => {
  const wrapper = shallow(<Form />);
  const initialFieldState = wrapper.state("firstName");
  expect(initialFieldState).toBe("");
});

test("last name input field is empty", () => {
  const wrapper = shallow(<Form />);
  const initialFieldState = wrapper.state("lastName");
  expect(initialFieldState).toBe("");
});
