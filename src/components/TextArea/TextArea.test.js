import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";

import TextArea from "./TextArea";

Enzyme.configure({ adapter: new EnzymeAdapter() });

test("renders without error", () => {});
