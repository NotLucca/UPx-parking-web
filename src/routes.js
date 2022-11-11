import React, { useEffect, useState } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthGuard from "./Hoc/Auth";

import Header from "./Components/Header_footer/Header";
import Footer from "./Components/Header_footer/Footer";
import Home from "./Components/Home";
import SignIn from "./Components/Signin";
import Dashboard from "./Components/Admin/Dashboard";
import addParkingSpots from "./Components/Parking/AddParkingSpots";
import Vagas from "./Components/Parking/vaga";

function Routes({ user }) {
  const [spotsData, setSpotsData] = useState(null);

  const [isClicked, setIsClicked] = useState(true);

  useEffect(() => {
    fetch("https://upx4api2022.azurewebsites.net/spot")
      .then((response) => response.json())
      .then((data) => {
        setSpotsData(data);
      });
  }, [isClicked]);

  const handleSpotsButton = () => {
    setIsClicked(!isClicked);
  };

  return (
    <BrowserRouter>
      <Header user={user} />
      <Switch>
        <Route path="/dashboard" exact component={AuthGuard(Dashboard)} />
        <Route
          path="/sign_in"
          exact
          component={(props) => <SignIn {...props} user={user} />}
        />
        <Route
          path="/"
          exact
          component={(props) => <Home {...props} user={user} />}
        />
        <Route
          path="/parking_spots"
          exact
          component={(props) => (
            <Vagas
              {...props}
              user={user}
              spotsData={spotsData}
              handleClick={handleSpotsButton}
            />
          )}
        />
        <Route path="/add_parking_spot" exact component={addParkingSpots} />
      </Switch>
      <ToastContainer />
      <Footer />
    </BrowserRouter>
  );
}

export default Routes;
