// React imports
import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
// CSS imports
import "./index.css";
import { CurrentUserProvider } from "./contexts/CurrentUserContext";
// App import
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <CurrentUserProvider>
        <App />
      </CurrentUserProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();