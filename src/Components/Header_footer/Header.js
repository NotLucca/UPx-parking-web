import React from "react";
import { AppBar, Toolbar, Button } from "@material-ui/core";

import { Link } from "react-router-dom";
import { CityLogo } from "../Utils/tools";

import { logoutHandler } from "../Utils/tools";

const Header = ({ user }) => {
  // const logoutHandler = () => {
  //   firebase
  //     .auth()
  //     .signOut()
  //     .then(() => {
  //       showSuccessToast("Good bye")
  //     })
  //     .catch((error) => {
  //       alert("error");
  //     });
  // };

  return (
    <AppBar
      position="fixed"
      style={{
        backgroundColor: "#98c5e9",
        boxShadow: "none",
        padding: "10px 0",
        borderBottom: "2px solid #00285e",
      }}
    >
      <Toolbar
        style={{
          display: "flex",
        }}
      >
        <div style={{ flexGrow: 1 }}>
          <div className="header_logo">
            <CityLogo link={true} linkTo={"/"} width="70px" height="70px" />
          </div>
        </div>
        <Link to="/parking_spots">
          <Button color="inherit">Vagas</Button>
        </Link>

        {user ? (
          <>
          <Link to="/add_parking_spot">
            <Button color="inherit">Add Parking Spot</Button>
          </Link>
            
            <Button color="inherit" onClick={() => logoutHandler()}>
              Log out
            </Button>
          </>
        ) : null}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
