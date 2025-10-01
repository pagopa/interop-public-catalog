import { Col, Row } from 'design-react-kit'
import React from 'react'
import AttributeAccordionsGroup from './AttributeAccordionGroup/AttributeAccordionGroup.js'

type AttributesSectionProps = {
  attributesGroups: Array<Array<{ name: string; description: string }>>
}

export const AttributesSection: React.FC<AttributesSectionProps> = ({ attributesGroups }) => {
  return (
    <>
      {attributesGroups.map((group, index) => (
        <Row className="white-bg p-3">
          <Col xs="1" className="p-0" key={`${index}`}>
            <div className="rounded-circle border border-primary primary-bg-c1 me-3 d-flex justify-content-center align-items-center">
              <h5 className="text-dark m-0">{(index + 1).toString().padStart(2, '0')}</h5>
            </div>
          </Col>
          <Col xs="11" className="p-0" key={`${index}-group`}>
            <AttributeAccordionsGroup
              title="Attributi certificati"
              tooltipText="Questo è il testo della tooltip dell'icon"
              attributes={group}
            />
          </Col>
        </Row>
      ))}
    </>
  )
}
