import Vaga from "./vagas";
import { CircularProgress } from "@material-ui/core";
import { useState } from "react";

const Vagas = ({ spotsData, handleClick, user}) => {
  const deleteSpot = (id) => {
    fetch(`https://upx4api2022.azurewebsites.net/spot/${id}`, {
      method: "DELETE",
    }).then((response) => {
      if (response.ok) {
        handleClick();
      }
    });
  };




  return (
    <div className="parkingSpots">
      <div className="parkingSpots__header">
        <h2 className="parking-spots__title">Vagas</h2>
      </div>

      <div className="parkingSpots__body">
        {spotsData ? (
          spotsData.map((vaga) => <Vaga key={vaga.spotId} vaga={vaga} deleteSpot={deleteSpot} user={user} />)
        ) : (
          <div className="parkingSpots__empty">
            <h1 className="parkingSpots__empty__title">
              Nenhuma vaga encontrada
            </h1>
          </div>
        )}
      </div>
       
    </div>
  );
};

export default Vagas;
