import React, { useState } from "react";
import { CircularProgress } from "@material-ui/core";
import { Redirect, useHistory } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { firebase } from "../../firebase";
import { showSuccessToast, showErrorToast } from "../Utils/tools";

const SignIn = (props) => {
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "jeanluccadias@gmail.com",
      password: "lordebundamole1",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email adress").required(),
      password: Yup.string().required("The password is required"),
    }),
    onSubmit: (values) => {
      ///go to server with field values
      setLoading(true);
      submitForm(values);
    },
  });

  //

  const submitForm = (values) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(values.email, values.password)
      .then(() => {
        setLoading(false);
        showSuccessToast("Deu certo");
        props.history.push("/dashboard");
      })
      .catch((error) => {
        setLoading(false);
        showErrorToast("E-mail ou senha incorretos!");
      });
  };

  return (
    <>
      {!props.user ? (
        <div className="container">
          <div className="signin_wrapper" style={{ margin: "100px" }}>
            <form onSubmit={formik.handleSubmit}>
              <h2>Please login</h2>
              <input
                name="email"
                placeholder="Email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                disabled={loading ? true : false}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="error_label">{formik.errors.email}</div>
              ) : null}

              <input
                name="password"
                placeholder="Password"
                type="Password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                disabled={loading ? true : false}
              />

              {formik.touched.password && formik.errors.password ? (
                <div className="error_label">{formik.errors.password}</div>
              ) : null}

              {loading ? (
                <CircularProgress color="secondary" className="progress" />
              ) : (
                <button type="submit">Log in</button>
              )}
            </form>
          </div>
        </div>
      ) : (
        <Redirect to="/dashboard" />
      )}
    </>
  );
};

export default SignIn;
