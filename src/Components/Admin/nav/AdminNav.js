import React from "react";
import { Link, withRouter } from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";
import { firebase } from "../../../firebase";
import { showErrorToast, showSuccessToast } from "../../Utils/tools";
import { linkClasses } from "@mui/material";
import { logoutHandler } from "../../Utils/tools";
const AdminNav = (props) => {
  const links = [
    {
      title: "Matches",
      linkTo: "/admin_matches",
    },
    {
      title: "Players",
      linkTo: "/admin_players",
    },
  ];

  
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


  const renderItems = () =>
    links.map((link) => (
      <Link to={link.linkTo} key={link.title}>
        <ListItem button className="admin_nav_link">
          {link.title}
        </ListItem>
      </Link>
    ));

  return (
    <div>
      {renderItems()}
      <ListItem onClick={() => logoutHandler()} button className="admin_nav_link">
        Log out
      </ListItem>
    </div>
  );
};

export default withRouter(AdminNav);
