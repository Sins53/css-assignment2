import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./assets/scss/main.scss";
import Layout from "./components/layout";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Layout.Wrapper>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Layout.Wrapper>
);
