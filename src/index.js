// Import: Dependencies
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

// Import: Styling
import "./index.scss";

// Import: Components
import App from "./App.component";

// Import: StateProvider, reducer
import { StateProvider } from "./StateProvider";
import reducer, { initialState } from "./reducer";

// Import: Service Worker
import * as serviceWorker from "./serviceWorker";

// Render: App
ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
