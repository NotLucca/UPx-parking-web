import React from "react";
import QRCode from "react-qr-code";
import ReactToPrint from "react-to-print";
import { useReactToPrint } from "react-to-print";

const Vaga = ({ vaga, deleteSpot, user }) => {
  const vagaToJson = JSON.stringify({
    spotId: vaga.spotId,
    region: vaga.region,
    name: vaga.name,
    type: vaga.type,
    latitude: vaga.latitude,
    longitude: vaga.longitude,
    address: vaga.address,
  });

  //center object
  const marginTop = "45%";
  const marginLeft = "35%";

  const getPageMargins = () => {
    return `@page { margin: 0 auto; margin-top: ${marginTop}; margin-left: ${marginLeft}; }`;
  };

  const componentRef = React.useRef();

  const handlePrint = useReactToPrint({
    //width and height of the QRCode full size
    content: () => componentRef.current,
    pageStyle: getPageMargins(),
  });

  return (
    <div
      className="parking-spot"
      style={{
        backgroundColor: vaga.occupied ? "#A9A9A9" : "#B0E0E6",
      }}
    >
      <div className="parking-spot__cardHeader" id="qrCode" ref={componentRef}>
        <p className="parking-spot__cardRegion">{vaga.region}</p>
        <QRCode
          value={vagaToJson}
          size={200}
          bgColor={"#FFFFFF"}
          fgColor={"#000000"}
          level={"H"}
        />
      </div>
      <div className="parking-spot__cardBody">
        <h3 className="parking-spot__cardTitle">{vaga.name}</h3>
        <p className="parking-spot__cardType">{vaga.type}</p>
        <p className="parking-spot__cardAddress">{vaga.address}</p>
        <p className="parking-spot__cardOccupied">
          {vaga.occupied ? "Ocupado" : "Livre"}
        </p>
        <button onClick={handlePrint}>Imprimir!</button>
        {user ? (
          <button
            className="parking-spot__deleteButton"
            onClick={() => deleteSpot(vaga.spotId)}
          >
            Deletar
          </button>
        ) : null}
      </div>
      
    </div>
  );
};

export default Vaga;
