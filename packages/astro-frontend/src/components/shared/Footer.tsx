import { Col, Container, Icon, LinkList, LinkListItem, Row } from 'design-react-kit'
import React from 'react'

const Footer: React.FC = () => (
  <footer className="it-footer">
    <div className="it-footer-main border-white border-bottom">
      <Container>
        <section className="py-4">
          <Row className="clearfix">
            <Col sm={2}>
              <div className="it-brand-wrapper py-0">
                <a href="#" className="">
                  <Icon icon="it-pa" />
                </a>
              </div>
            </Col>
            <Col sm={3}>
              <div className="it-brand-wrapper py-0">
                <a href="#" className="">
                  <Icon icon="it-pa" />
                </a>
              </div>
            </Col>
            <Col sm={2}>
              <div className="it-brand-wrapper py-0">
                <a href="#" className="">
                  <Icon icon="it-pa" />
                </a>
              </div>
            </Col>
            <Col sm={2} /* lg={2} md={2} */ className="pb-2">
              <h4>Catalogo delle API</h4>
              <LinkList className="footer-list clearfix">
                {['Esplora il catalogo', 'Come usare le API'].map((label) => (
                  <LinkListItem key={label} href="#" title={`Vai alla pagina: ${label}`}>
                    {label}
                  </LinkListItem>
                ))}
              </LinkList>
            </Col>
            <Col sm={3} /* lg={2} md={2} */ className="pb-2">
              <h4>Risorse</h4>
              <LinkList className="footer-list clearfix">
                {[
                  "Cos'è l'interoperabilità",
                  "Racconta l'interoperabilità",
                  'Domande frequenti e supporto',
                ].map((label) => (
                  <LinkListItem key={label} href="#" title={`Vai alla pagina: ${label}`}>
                    {label}
                  </LinkListItem>
                ))}
              </LinkList>
            </Col>
          </Row>
        </section>
      </Container>
    </div>
    <div className="it-footer-small-prints clearfix">
      <Container>
        <h3 className="visually-hidden">Sezione Link Utili</h3>
        <ul className="it-footer-small-prints-list list-inline mb-0 d-flex flex-column flex-md-row">
          <li className="list-inline-item">
            <a href="#" title="Note Legali">
              Media policy
            </a>
          </li>
          <li className="list-inline-item">
            <a href="#" title="Note Legali">
              Note legali
            </a>
          </li>
          <li className="list-inline-item">
            <a href="#" title="Privacy-Cookies">
              Privacy policy
            </a>
          </li>
          <li className="list-inline-item">
            <a href="#" title="Mappa del sito">
              Mappa del sito
            </a>
          </li>
          <li className="list-inline-item">
            <a href="#" title="Mappa del sito">
              Dichiarazione Accessibilità
            </a>
          </li>
        </ul>
      </Container>
    </div>
  </footer>
)

export default Footer

// export const FooterCompatto: Story = {
//   render: ({ townName, townTagLine }) => (

//   )
// };
