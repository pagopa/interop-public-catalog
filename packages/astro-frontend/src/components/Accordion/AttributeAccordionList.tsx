import { Accordion } from 'design-react-kit'
import React, { useState } from 'react'
import AttributeAccordion from './AttributeAccordion.js' // TODO check why getting an error

type AttributeAccordionListProps = {
  attributes: Array<{ name: string; description: string }>
}

const AttributeAccordionList: React.FC<AttributeAccordionListProps> = ({ attributes }) => {
  const [collapseElementOpen, setCollapseElement] = useState('')

  const handleToggle = (index: string): void => {
    if (collapseElementOpen === index) {
      setCollapseElement('')
    } else {
      setCollapseElement(index)
    }
  }

  return (
    <Accordion>
      {attributes.map((attribute, index) => (
        <AttributeAccordion
          key={index}
          attributeName={attribute.name}
          attributeDescription={attribute.description}
          isOpen={collapseElementOpen === `${index}`}
          onToggle={(): void => handleToggle(`${index}`)}
        />
      ))}
    </Accordion>
  )
}

export default AttributeAccordionList
