import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import React from "react";
import { showErrorToast, showSuccessToast } from "../Utils/tools";
import { useEffect } from "react";

const AddParkingSpots = () => {
  const [vagas, setVagas] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const [success, setSuccess] = React.useState(null);
  const [refresh, setRefresh] = React.useState(false);

  const [region, setRegion] = React.useState("");
  const [name, setName] = React.useState("");
  const [type, setType] = React.useState("");
  const [latitude, setLatitude] = React.useState("");
  const [longitude, setLongitude] = React.useState("");
  const [address, setAddress] = React.useState("");

  const [isClicked, setIsClicked] = React.useState(false);

  return (
    <div className="container">
      <div className="add_parking_spot_wrapper">
        <h2>Adicionar Vaga</h2>
        <Formik
          initialValues={{
            region: "",
            name: "",
            type: "",
            latitude: "",
            longitude: "",
            address: "",
          }}
          validationSchema={Yup.object({
            region: Yup.string().required("Campo obrigatório"),
            name: Yup.string().required("Campo obrigatório"),
            type: Yup.string().required("Campo obrigatório"),
            latitude: Yup.string().required("Campo obrigatório"),
            longitude: Yup.string().required("Campo obrigatório"),
            address: Yup.string().required("Campo obrigatório"),
          })}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              fetch("https://upx4api2022.azurewebsites.net/spot", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  region: values.region,
                  name: values.name,
                  type: values.type,
                  latitude: values.latitude,
                  longitude: values.longitude,
                  address: values.address,
                }),
              })
                .then((response) => response.json())
                .then((data) => {
                  console.log(data);
                  setSuccess(data);
                  setIsClicked(!isClicked);
                  showSuccessToast("Vaga adicionada com sucesso!");
                })
                .catch((error) => {
                  console.error("Error:", error);
                  showErrorToast("Erro ao adicionar vaga");
                  setError(error);
                });
              setSubmitting(false);
            }, 400);
          }}
        >
          <Form>
            <div className="form-group">
              <label htmlFor="region">Região</label>
              <Field
                name="region"
                type="text"
                className="form-control"
                placeholder="Região"
              />
              <ErrorMessage name="region" />
              <label htmlFor="name">Nome</label>
              <Field
                name="name"
                type="text"
                className="form-control"
                placeholder="Nome"
              />
              <ErrorMessage name="name" />
              <label htmlFor="type">Tipo</label>
              <Field
                name="type"
                type="text"
                className="form-control"
                placeholder="Tipo"
              />
              <ErrorMessage name="type" />
              <label htmlFor="latitude">Latitude</label>
              <Field
                name="latitude"
                type="text"
                className="form-control"
                placeholder="Latitude"
              />
              <ErrorMessage name="latitude" />
              <label htmlFor="longitude">Longitude</label>
              <Field
                name="longitude"
                type="text"
                className="form-control"
                placeholder="Longitude"
              />
              <ErrorMessage name="longitude" />
              <label htmlFor="address">Endereço</label>
              <Field
                name="address"
                type="text"
                className="form-control"
                placeholder="Endereço"
              />
              <ErrorMessage name="address" />
              <button type="submit" className="btn btn-primary">
                Adicionar
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default AddParkingSpots;
