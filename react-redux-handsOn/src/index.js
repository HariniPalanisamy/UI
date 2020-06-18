import React from "react";
import { Provider } from "react-redux";
import { render } from "react-dom";
import  App  from "./js/components/App";
import store from "./js/store";

render(
  <Provider store={ store }>
    <App />
  </Provider>, 
  document.getElementById("root")
)
