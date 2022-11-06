import Vaga from "./vagas";

const Vagas = ({ spotsData, handleClick }) => {
  

  return (
    <div className="parkingSpots">
      <div className="parkingSpots__header">
        <h2 className="parking-spots__title">Vagas</h2>
      </div>

      <div className="parkingSpots__body">
        {spotsData ? (
          spotsData.map((vaga) => <Vaga key={vaga.spotId} vaga={vaga} />)
        ) : (
          <div className="parkingSpots__empty">
            <h1 className="parkingSpots__empty__title">
              Nenhuma vaga encontrada
            </h1>
          </div>
        )}
      </div>
        <div className="checkForSpots">
          <button className="checkForSpots__button" onClick={() => handleClick()}>Verificar Vagas</button>
        </div>
    </div>
  );
};

export default Vagas;
