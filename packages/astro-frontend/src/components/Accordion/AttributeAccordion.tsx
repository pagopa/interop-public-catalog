import { AccordionBody, AccordionHeader, AccordionItem } from 'design-react-kit'
import React from 'react'

type AttributeAccordionProps = {
  attributeName: string
  attributeDescription: string
  isOpen: boolean
  onToggle: () => void
}

const AttributeAccordion: React.FC<AttributeAccordionProps> = ({
  attributeName,
  attributeDescription,
  isOpen,
  onToggle,
}) => (
  <AccordionItem>
    <AccordionHeader active={isOpen} onToggle={onToggle}>
      {attributeName}
    </AccordionHeader>
    <AccordionBody active={isOpen}>{attributeDescription}</AccordionBody>
  </AccordionItem>
)

export default AttributeAccordion
