import React from "react";
import QRCode from "react-qr-code";
import ReactToPrint from "react-to-print";
import { useReactToPrint } from "react-to-print";

const Vaga = ({ vaga }) => {
  const vagaToJson = JSON.stringify(vaga);

  //center object
  const marginTop = "45%";
  const marginLeft = "300px";

  const getPageMargins = () => {
    return `@page { margin: ${marginTop}  ${marginLeft}; }`;
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
        backgroundColor: vaga.occupied ? "#D3D3D3" : "#00FF00",
      }}
    >
      <p className="parking-spot__cardRegion">{vaga.region}</p>
      <div className="parking-spot__cardHeader" id="qrCode" ref={componentRef} >
        <QRCode value={vagaToJson} size={200} />
      </div>
      <button onClick={handlePrint}>Imprimir!</button>
      <div className="parking-spot__cardBody">
        <h3 className="parking-spot__cardTitle">{vaga.name}</h3>
        <p className="parking-spot__cardType">{vaga.type}</p>
        <p className="parking-spot__cardAddress">{vaga.address}</p>
        <p className="parking-spot__cardOccupied">
          {vaga.occupied ? "Ocupado" : "Livre"}
        </p>
      </div>
    </div>
  );
};

export default Vaga;
