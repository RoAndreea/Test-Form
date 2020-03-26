import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import Form from "./components/Form/Form";

ReactDOM.render(
  <React.StrictMode>
    <Form />
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
