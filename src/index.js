import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { store } from "app/store";
import { Provider } from "react-redux";
import { update } from "app/actionCreators";
import { saveState } from "utils/localStorage";
import throttle from "lodash/throttle";

/**
 * Save all state changes to localStorage.
 * Use throttle to save only once a second (JSON.stringify is expensive)
 */
store.subscribe(
  throttle(() => {
    saveState(store.getState());
  }, 1000)
);

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
  store.dispatch(update());
}, 1000);
