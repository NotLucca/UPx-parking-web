import React from "react";

const Vaga = ({ vaga }) => {
  return (
    <div className="parking-spot">
      <div className="parking-spot__cardHeader">
        <p className="parking-spot__cardRegion">{vaga.region}</p>
      </div>
      <div className="parking-spot__cardBody">
        <h3 className="parking-spot__cardTitle">{vaga.name}</h3>
        <p className="parking-spot__cardType">{vaga.type}</p>
        <p className="parking-spot__cardAddress">{vaga.address}</p>
      </div>
    </div>
  );
};

export default Vaga;