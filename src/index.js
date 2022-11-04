import React from "react";
import ReactDOM from "react-dom/client";
import Routes from "./routes";
import "./resources/css/app.css";
import { firebase } from "./firebase";

const App = (props) => {
  return <Routes {...props} />;
};

const root = ReactDOM.createRoot(document.getElementById("root"));

firebase.auth().onAuthStateChanged((user) => {
  console.log(user)
  root.render(<App user={user} />);
});
