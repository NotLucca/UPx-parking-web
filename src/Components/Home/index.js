import React from "react";
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@material-ui/core";
import { Link } from "react-router-dom";

const Home = ({ user }) => {
  // make the content for the home page of a parking lot website using material ui
  //make first div occupy 100% of the screen
  //use responsive design
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        marginTop: "2rem",
        alignItems: "center",
        padding: "100px",
        height: "calc(100vh - 350px)",
      }}
    >
      <h1 
        style={{ 
          color: "#00285e", 
          fontSize: "2.3rem",
          fontWeight: "bold",
          marginBottom: "-1.5rem",
          
        }}>
        Bem vindo ao estacionamento
      </h1>
      <h5 style={{ color: "#00285e", fontSize: "1rem" }}>
        O estacionamento mais próximo de você
      </h5>
      <section
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          marginTop: "2rem",
        }}
      >
        <Link to="/parking_spots">
          <Button
            variant="contained"
            color="primary"
            style={{
              backgroundColor: "#00285e",
              color: "white",
              fontWeight: "bold",
              width: "10rem",
              height: "50px",
              marginBottom: "10px",
            }}
          >
            Vagas
          </Button>
        </Link>
        
        {user ? (
          <>
            <Link to="/add_parking_spot">
              <Button
                variant="contained"
                color="primary"
                style={{
                  backgroundColor: "#00285e",
                  color: "white",
                  fontWeight: "bold",
                  width: "10rem",
                  height: "50px",
                  marginBottom: "10px",
                }}
              >
                Adicionar Vaga
              </Button>
            </Link>
            <Link to="/dashboard">
              <Button
                variant="contained"
                color="primary"
                style={{
                  backgroundColor: "#00285e",
                  color: "white",
                  fontWeight: "bold",
                  width: "10rem",
                  height: "50px",
                  marginBottom: "10px",
                }}
              >
                Dashboard
              </Button>
            </Link>
          </>
        ) : null}
      </section>
    </div>
  );
};

export default Home;
