const imageSrc = '/img/024-search.svg'

export const EServiceNoItems: React.FC = () => {
  return (
    <div className="d-flex justify-content-center p-5">
      <div className="d-flex flex-column justify-content-center align-items-center">
        <img src={imageSrc} alt="no-results" role="presentation" width="96" height="96" />
        <h3 className="it-card-title px-0 text-primary">Nessun risultato trovato</h3>
        <div className="it-card-body px-0 text-start">
          <p className="it-card-text">
            La ricerca non ha prodotto risultati. Modifica i filtri o prova con un'altra parola
            chiave.
          </p>
        </div>
      </div>
    </div>
  )
}
