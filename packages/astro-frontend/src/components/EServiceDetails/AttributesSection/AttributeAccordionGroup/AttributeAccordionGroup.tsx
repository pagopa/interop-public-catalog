import { Accordion, Icon, UncontrolledTooltip } from 'design-react-kit'
import React, { useRef, useState } from 'react'
import AttributeAccordion from './AttributeAccordion.js'

type AttributeAccordionsGroupProps = {
  attributeType: 'CERTIFIED' | 'DECLARED' | 'VERIFIED'
  tooltipText: string
  attributes: Array<{ name: string; description: string }>
}

const AttributeAccordionsGroup: React.FC<AttributeAccordionsGroupProps> = ({
  attributeType,
  tooltipText,
  attributes,
}) => {
  const [collapseElementOpen, setCollapseElement] = useState('')

  const ref = useRef(null)

  const handleToggle = (index: string): void => {
    if (collapseElementOpen === index) {
      setCollapseElement('')
    } else {
      setCollapseElement(index)
    }
  }

  const getTitle = (attributeType: 'CERTIFIED' | 'DECLARED' | 'VERIFIED'): string => {
    if (attributeType === 'CERTIFIED') {
      return 'Attributo certificato'
    }

    if (attributeType === 'VERIFIED') {
      return 'Attributo verificato'
    }

    if (attributeType === 'DECLARED') {
      return 'Attributo dichiarato'
    }

    return 'No attribute type'
  }

  return (
    <div className="d-flex flex-column p-3 rounded-3 bg-light">
      <div className="d-flex flex-column">
        <div className="d-flex flex-row align-items-center">
          <h6>{getTitle(attributeType)}</h6>
          <Icon icon="it-info" size="xs" className="ms-2" ref={ref} />
          {/* <UncontrolledTooltip placement="right" target={ref}>
            {tooltipText}
          </UncontrolledTooltip> */}
        </div>
        <p>
          Per soddisfare questo requisito, devi possedere almeno uno degli attributi presenti nel
          gruppo.
        </p>
      </div>
      <Accordion>
        {attributes.map((attribute, index) => (
          <>
            <AttributeAccordion
              key={index}
              attributeName={attribute.name}
              attributeDescription={attribute.description}
              isOpen={collapseElementOpen === `${index}`}
              onToggle={(): void => handleToggle(`${index}`)}
            />
            {index < attributes.length - 1 && <p className="my-2">oppure</p>}
          </>
        ))}
      </Accordion>
    </div>
  )
}

export default AttributeAccordionsGroup
