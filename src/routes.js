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

// const vagas = [
//   {
//     spotId: 1,
//     region: "A",
//     name: "A1",
//     type: "car",
//     latitude: 0,
//     longitude: 0,
//     address: "DASDAS",
//     occupied: true,
//   },
//   {
//     spotId: 2,
//     region: "A",
//     name: "A1",
//     type: "Car",
//     latitude: 1230,
//     longitude: 350,
//     address: "Sao roque kkkkk",
//     occupied: false,
//   },
//   {
//     spotId: 3,
//     region: "A",
//     name: "A1",
//     type: "Motorcycle",
//     latitude: 1232,
//     longitude: 350,
//     address: "São Paulo",
//     occupied: false,
//   },
//   { 
//     spotId: 4,
//     region: "B",
//     name: "B1",
//     type: "Car",
//     latitude: 1230,
//     longitude: 350,
//     address: "Sorocaba",
//     occupied: false,
//   },


// ];

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
    console.log(isClicked);
    console.log(spotsData)
  }

  

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
            <Vagas {...props} user={user} spotsData={spotsData} handleClick={handleSpotsButton} />
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
