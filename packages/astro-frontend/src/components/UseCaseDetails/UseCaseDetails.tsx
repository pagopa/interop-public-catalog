import { Col, List, ListItem, Row } from 'design-react-kit'
import React from 'react'

type UseCaseDetailsProps = {
  useCase: { id: string }
}

const UseCaseDetails: React.FC<UseCaseDetailsProps> = ({ useCase }) => {
  const anchores = [{ name: 'sette' }, { name: 'otto' }]

  return (
    <Row>
      <Col xs="4">
        <strong>Indice della pagina</strong>
        <List className="border-end mt-4">
          {anchores.map((anchor) => (
            <ListItem key={anchor.name} className="border-0" tag="a">
              <span className="text"> {anchor.name} </span>
            </ListItem>
          ))}
        </List>
      </Col>
      <Col xs="8" className="d-flex flex-column">
        <div className="d-flex flex-column mb-5">
          <p className="mb-3 fw-bold">Descrizione</p>
          <p>
            L’erogazione di qualunque tipo di bonus da parte di enti pubblici prevede la verifica
            puntuale dei requisiti previsti dalla norma che regola l’agevolazione in questione.
            ISEE, residenza, stato di famiglia sono tra le certificazioni più richieste, che devono
            essere presentate dal cittadino, spesso anche in formato cartaceo, e verificate tramite
            istruttorie lunghe e onerose.
          </p>
        </div>

        <div className="d-flex flex-column mb-5">
          <p className="mb-3 fw-bold">Descrizione</p>
          <p>
            L’erogazione di qualunque tipo di bonus da parte di enti pubblici prevede la verifica
            puntuale dei requisiti previsti dalla norma che regola l’agevolazione in questione.
            ISEE, residenza, stato di famiglia sono tra le certificazioni più richieste, che devono
            essere presentate dal cittadino, spesso anche in formato cartaceo, e verificate tramite
            istruttorie lunghe e onerose.
          </p>
        </div>

        <div className="d-flex flex-column mb-5">
          <p className="mb-3 fw-bold">Descrizione</p>
          <p>
            L’erogazione di qualunque tipo di bonus da parte di enti pubblici prevede la verifica
            puntuale dei requisiti previsti dalla norma che regola l’agevolazione in questione.
            ISEE, residenza, stato di famiglia sono tra le certificazioni più richieste, che devono
            essere presentate dal cittadino, spesso anche in formato cartaceo, e verificate tramite
            istruttorie lunghe e onerose.
          </p>
        </div>

        <div className="d-flex flex-column mb-5">
          <p className="mb-3 fw-bold">Descrizione</p>
          <p>
            L’erogazione di qualunque tipo di bonus da parte di enti pubblici prevede la verifica
            puntuale dei requisiti previsti dalla norma che regola l’agevolazione in questione.
            ISEE, residenza, stato di famiglia sono tra le certificazioni più richieste, che devono
            essere presentate dal cittadino, spesso anche in formato cartaceo, e verificate tramite
            istruttorie lunghe e onerose.
          </p>
        </div>

        <div className="d-flex flex-column mb-5">
          <p className="mb-3 fw-bold">Descrizione</p>
          <p>
            L’erogazione di qualunque tipo di bonus da parte di enti pubblici prevede la verifica
            puntuale dei requisiti previsti dalla norma che regola l’agevolazione in questione.
            ISEE, residenza, stato di famiglia sono tra le certificazioni più richieste, che devono
            essere presentate dal cittadino, spesso anche in formato cartaceo, e verificate tramite
            istruttorie lunghe e onerose.
          </p>
        </div>
      </Col>
    </Row>
  )
}

export default UseCaseDetails
