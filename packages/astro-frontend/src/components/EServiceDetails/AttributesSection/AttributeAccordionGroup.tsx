import { Accordion as AccordionDRK } from 'design-react-kit'
import React, { useState } from 'react'
import Accordion from '../../shared/Accordion.js'
import BootstrapItaliaIcon from '../../shared/BootstrapItaliaIcon.astro'

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
    <div className="d-flex flex-column p-3 rounded-3 bg-primary-c0 border border-primary">
      <div className="d-flex flex-column">
        <h6 className="me-2">
          {getTitle(attributeType)}
          <BootstrapItaliaIcon name="it-info-circle" color="primary" size="sm" />
        </h6>
        <p>
          Per soddisfare questo requisito, devi possedere almeno uno degli attributi presenti nel
          gruppo.
        </p>
      </div>
      <AccordionDRK>
        {attributes.map((attribute, index) => (
          <>
            <Accordion
              key={index}
              label={attribute.name}
              content={attribute.description}
              isOpen={collapseElementOpen === `${index}`}
              onToggle={(): void => handleToggle(`${index}`)}
              withoutBorder
            />
            {index < attributes.length - 1 && <p className="my-2">oppure</p>}
          </>
        ))}
      </AccordionDRK>
    </div>
  )
}

export default AttributeAccordionsGroup
