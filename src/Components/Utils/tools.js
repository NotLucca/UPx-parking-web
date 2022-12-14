import React from "react";
import { Link } from "react-router-dom";
import logo from "../../resources/images/logos/logo.png";
import { toast } from "react-toastify";
import { TabPanelUnstyled } from "@mui/base";
import { firebase } from '../../firebase'

export const CityLogo = (props) => {
  const template = (
    <div
      className="img_cover"
      style={{
        width: props.width,
        height: props.height,
        background: `url(${logo}) no-repeat`,
      }}
    ></div>
  );
  if (props.link) {
    return (
      <Link className="link_logo" to={props.linkTo}>
        {template}
      </Link>
    );
  } else {
    return template;
  }
};

export const showErrorToast = (msg) => {
  toast.error(msg, {
    position: toast.POSITION.TOP_LEFT,
  });
};
export const showSuccessToast = (msg) => {
  toast.success(msg, {
    position: toast.POSITION.TOP_LEFT,
  });
};

export const logoutHandler = () => {
  firebase
    .auth()
    .signOut()
    .then(() => {
      showSuccessToast("Good bye");
    })
    .catch((error) => {
      alert("error");
    });
};
