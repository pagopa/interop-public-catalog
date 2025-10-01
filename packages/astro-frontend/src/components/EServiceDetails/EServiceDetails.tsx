import { Badge, Button, Col, Icon, List, ListItem, Row } from 'design-react-kit'
import React from 'react'
import { AttributesSection } from './AttributesSection/AttributesSection.js'
import { InformationContainer } from './InformationContainer.js'

type EServiceDetailsProps = {
  eservice: {
    id: string
    name: string
    description: string
    attributes: Array<{ name: string; description: string }>
  }
}

const EServiceDetails: React.FC<EServiceDetailsProps> = ({ eservice }) => {
  const anchores = [{ name: 'sette' }, { name: 'otto' }]

  const attributesGroups = [
    [
      { name: 'Requisito 1', description: 'Descrizione Requisito 1' },
      { name: 'Requisito 2', description: 'Descrizione Requisito 2' },
      { name: 'Requisito 3', description: 'Descrizione Requisito 3' },
    ],
    [{ name: 'Requisito 2', description: 'Descrizione Requisito 2' }],
    [{ name: 'Requisito 1', description: 'Descrizione Requisito 1' }],
  ]

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
          <span>{eservice.description}</span>
        </div>

        <div className="d-flex flex-column mb-5">
          <p className="mb-3 fw-bold">Dettaglio API</p>
          <Row className="white-bg">
            <Col className="p-2">
              <div className="d-flex flex-column border-end px-3 py-2">
                <div className="d-flex flex-row justify-content-between align-items-center">
                  <strong>Stato API</strong>
                  <Icon icon="it-github" size="xs" />
                </div>
                <Badge color="success" pill className="align-self-start mt-2">
                  Attivo
                </Badge>
              </div>
            </Col>
            <Col className="p-2">
              <div className="d-flex flex-column border-end px-3 py-2">
                <strong>Data di creazione</strong>
                <div className="d-flex flex-row align-items-center mt-2">
                  <Icon icon="it-github" size="xs" className="me-2" />
                  <span>12/11/2025</span>
                </div>
              </div>
            </Col>
            <Col className="p-2">
              <div className="d-flex flex-column px-3 py-2">
                <strong>Data di ultima modifica</strong>
                <div className="d-flex flex-row align-items-center mt-2">
                  <Icon icon="it-github" size="xs" className="me-2" />
                  <span>17/11/2025</span>
                </div>
              </div>
            </Col>
          </Row>

          <Row className="white-bg mt-4">
            <Col className="px-3">
              <InformationContainer
                label="Fruizione tramite delega"
                content="Disponibile TODO value"
                icon={{
                  icon: 'it-github',
                  tooltipText: 'Fruizione tramite delega',
                }}
              />
              <hr className="my-0" />
              <InformationContainer
                label="Accettazione automatica della richieste di fruizione"
                content="Disponibile TODO value"
                icon={{
                  icon: 'it-github',
                  tooltipText: 'Accettazione automatica della richieste di fruizione',
                }}
              />
              <hr className="my-0" />
              <InformationContainer
                label="Compilazione agevolata dell’analisi del rischio"
                content="Disponibile TODO value"
                icon={{
                  icon: 'it-github',
                  tooltipText: 'Compilazione agevolata dell’analisi del rischio',
                }}
              />
            </Col>
          </Row>
        </div>

        <div className="d-flex flex-column mb-5">
          <p className="mb-3 fw-bold">Specifiche tecniche</p>
          <Row className="white-bg">
            <Col className="px-3">
              <InformationContainer label="Versione corrente" content="2" />
              <hr className="my-0" />
              <InformationContainer label="Tecnologia" content="REST" />
              <hr className="my-0" />
              <InformationContainer
                label="Modalità invio dati"
                content="E-service che eroga dati"
              />
              <hr className="my-0" />
              <InformationContainer
                label="Signal Hub"
                content="Disponibile"
                icon={{ icon: 'it-github', tooltipText: 'Disponibile' }}
              />
            </Col>
          </Row>
        </div>

        <div className="d-flex flex-column mb-5">
          <p>
            <strong className="mb-3">{`Requisiti di accesso (${attributesGroups.length} requisiti)`}</strong>
            <Icon icon="it-github" size="sm" className="ms-2" />
          </p>

          <AttributesSection attributesGroups={attributesGroups} />
        </div>

        <div className="d-flex flex-column mb-5">
          <p className="mb-3 fw-bold">Documentazione e contatti</p>

          <Row className="white-bg">
            <Col className="d-flex flex-row align-items-center justify-content-between">
              <span>Per accedere alla documentazione è necessario autenticarsi.</span>
              <Button href="#" role="link" tag="a" size="xs" className="text-primary" icon>
                Accedi a PDND
                <Icon icon="it-github" size="xs" className="ms-2" color="primary" />
              </Button>
            </Col>
          </Row>
        </div>

        <Row className="primary-bg-c1 mt-5 p-5">
          <Col className="d-flex flex-row justify-content-between align-items-center">
            <h5>Vuoi implementare questa API?</h5>
            <Button color="primary" size="sm" onClick={(): void => {}} icon>
              Autenticati sulla PDND
              <Icon color="white" icon="it-arrow-right" className="ms-2" size="sm" />
            </Button>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default EServiceDetails
