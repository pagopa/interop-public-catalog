import { Col, List, ListItem, Row } from 'design-react-kit'
import React from 'react'
import EServiceCard from '../shared/EServiceCard.astro'
import { chunkEServiceArray } from '../../utils/utils.js'

type UseCaseDetailsProps = {
  useCase: { id: string }
}

const md = `
## Descrizione

L'erogazione di qualunque tipo di bonus da parte di **enti pubblici** prevede la verifica puntuale dei requisiti previsti dalla norma che regola l'agevolazione in questione. **ISEE**, **residenza**, stato di famiglia sono tra le certificazioni più richieste, che devono essere presentate dal cittadino, spesso anche in formato cartaceo, e verificate tramite istruttorie lunghe e onerose.

![Example](https://example.com/images/remote-image.png

## Cosa cambia con la PNDD

L'ente può accedere direttamente alle **banche dati ufficiali** esposte sulla **PNDD** per la verifica di requisiti, semplificando notevolmente la procedura, riducendo i tempi per l'erogazione e i possibili errori.

Le **verifiche automatiche** possono essere implementate già in fase di presentazione della domanda, consentendo al cittadino di recuperare tramite **interoperabilità** il dato richiesto durante la richiesta del servizio, attuando così il principio del **'once-only'**, per cui non deve fornire alla PA i dati già in suo possesso.

## Vantaggi per la Pubblica Amministrazione

*Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lectus dui, laoreet nec libero non, vestibulum eleifend leo. Praesent vitae ex sit amet justo lacinia dignissim ac at diam:*

* **Verifica automatica** dei dati (es. anagrafici, reddituali) costantemente aggiornati e certificati da fonti ufficiali
* **Eliminazione delle istruttorie** per la verifica successiva dei dati forniti
* **Digitalizzazione** dei processi con conseguente **tracciabilità**

## Vantaggi per le persone

*Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lectus dui, laoreet nec libero non, vestibulum eleifend leo. Praesent vitae ex sit amet justo lacinia dignissim ac at diam:*

* Non è più necessario produrre **autocertificazioni** per i dati forniti
* I **tempi di formulazione della richiesta e di erogazione del bonus sono più rapidi**
* **Minor rischio di errori** nella verifica dei requisiti e di esclusione quando titolati a ricevere il bonus

## Un esempio concreto

Il **MIMIT** sta erogando il "**bonus elettrodomestici**" verificando in automatico tramite la PNDD l'**ISEE** dei richiedenti. La domanda può essere presentata solo se il cittadino risulta eleggibile a seguito dei controlli effettuati ex ante tramite l'interrogazione degli e-service dell'**INPS**, che restituiscono il dato certificato e aggiornato in **tempo reale dell'utente**.

Questo approccio introduce molti elementi di semplificazione per tutti gli attori coinvolti: riduce la presentazione di domande non pertinenti, consente l'erogazione più veloce del bonus, non richiede al cittadino di anticipare nessuna somma, ma abilita lo **sconto diretto in fase di acquisto**.
`

const UseCaseDetails: React.FC<UseCaseDetailsProps> = ({ useCase }) => {
  const anchores = [{ name: 'sette' }, { name: 'otto' }]

  const apiRelated = [
    {
      name: 'eservice 1',
      description: 'eservice description 1',
      eserviceId: 'eservice1',
      descriptorId: 'descriptor1',
      producerName: 'AGID',
    },
    {
      name: 'eservice 2',
      description: 'eservice description 2',
      eserviceId: 'eservice2',
      descriptorId: 'descriptor2',
      producerName: 'AGID',
    },
    {
      name: 'eservice 3',
      description: 'eservice description 3',
      eserviceId: 'eservice3',
      descriptorId: 'descriptor3',
      producerName: 'AGID',
    },
  ] as const

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
      <Col xs="8">
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
          <p className="mb-3 fw-bold">Cosa cambia con la PDND</p>
          <p>
            L’ente può accedere direttamente alle banche dati ufficiali esposte sulla PDND per la
            verifica di requisiti, semplificando notevolmente la procedura, riducendo i tempi per
            l’erogazione e i possibili errori. Le verifiche automatiche possono essere implementate
            già in fase di presentazione della domanda, consentendo al cittadino di recuperare
            tramite interoperabilità il dato richiesto durante la richiesta del servizio, attuando
            così il principio del once-only*, per cui non deve fornire alla PA i dati già in suo
            possesso.
          </p>
        </div>

        <div className="d-flex flex-column mb-5">
          <p className="mb-3 fw-bold">Vantaggi per la Pubblica Amministrazione</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lectus dui, laoreet nec
            libero non, vestibulum eleifend leo. Praesent vitae ex sit amet justo lacinia dignissim
            ac at diam: - Verifica automatica dei dati (es. anagrafici, reddituali) costantemente
            aggiornati e certificati da fonti ufficiali - Eliminazione delle istruttorie per la
            verifica successiva dei dati forniti - Digitalizzazione dei processi con conseguente
            tracciabilità
          </p>
        </div>

        <div className="d-flex flex-column mb-5">
          <p className="mb-3 fw-bold">Vantaggi per le persone</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lectus dui, laoreet nec
            libero non, vestibulum eleifend leo. Praesent vitae ex sit amet justo lacinia dignissim
            ac at diam: Non è più necessario produrre autocertificazioni per i dati forniti I tempi
            di formulazione della richiesta e di erogazione del bonus sono più rapidi Minor rischio
            di errori nella verifica dei requisiti e di esclusione quando titolati a ricevere il
            bonus
          </p>
        </div>

        <div className="d-flex flex-column mb-5">
          <p className="mb-3 fw-bold">Un esempio concreto</p>
          <p>
            Il MIMIT sta erogando il “bonus elettrodomestici” verificando in automatico tramite la
            PDND l’ISEE dei richiedenti. La domanda può essere presentata solo se il cittadino
            risulta eleggibile a seguito dei controlli effettuati ex ante tramite l’interrogazione
            degli e-service dell’INPS, che restituiscono il dato certificato e aggiornato in tempo
            reale dell’utente. Questo approccio introduce molti elementi di semplificazione per
            tutti gli attori coinvolti: riduce la presentazione di domande non pertinenti, consente
            l’elaborazione più veloce del bonus, non richiede al cittadino di anticipare nessuna
            somma, ma abilita lo sconto diretto in fase di acquisto.
          </p>
        </div>

        <div className="d-flex flex-column mb-5">
          <h5 className="mb-4">API collegate a questa buona pratica</h5>
        </div>

        <p>
          <em>Ultimo aggiornamente: {/* {lastUpdate} */} TODO agosto 2025</em>
        </p>
      </Col>
    </Row>
  )
}

export default UseCaseDetails
