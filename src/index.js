import React from "react";
import ReactDOM from "react-dom/client";
import Routes from "./routes";
import "./resources/css/app.css";
import { firebase } from "./firebase";
import { useEffect } from "react";

const App = (props) => {
  // curl -X 'GET' \
  // 'https://upx4api2022.azurewebsites.net/spot' \
  // -H 'accept: application/json'
  //turn the comment above into a fetch request
  //use the useEffect hook to make the request

  return <Routes {...props} />;
};

const root = ReactDOM.createRoot(document.getElementById("root"));

firebase.auth().onAuthStateChanged((user) => {
  root.render(<App user={user} />);
});
