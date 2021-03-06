import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "../components/App";
import TextLinkExample from "../components/Nav"
import { CookiesProvider } from "react-cookie";

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <CookiesProvider>
    <Router>
      <React.StrictMode>
       
      <App />
      </React.StrictMode>
    </Router>
    
    </CookiesProvider>,
    document.body.appendChild(document.createElement("div")),

  )
})