import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { store } from "app/store";
import { Provider } from "react-redux";
import { updateThunk } from "app/roundSlice";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// Start the updates once per second
setInterval(() => {
  store.dispatch(updateThunk());
}, 1000);
