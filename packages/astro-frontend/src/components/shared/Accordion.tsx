import { AccordionBody, AccordionHeader, AccordionItem } from 'design-react-kit'
import React from 'react'

type AccordionProps = {
  label: string
  content: string
  isOpen: boolean
  onToggle: () => void
  withoutBorder?: boolean
  withoutBackground?: boolean
}

const Accordion: React.FC<AccordionProps> = ({
  label,
  content,
  isOpen,
  onToggle,
  withoutBorder,
  withoutBackground,
}) => (
  <AccordionItem className={`${withoutBackground && 'bg-transparent'}`}>
    <AccordionHeader
      active={isOpen}
      onToggle={onToggle}
      className={`${withoutBorder && 'border-0'}`}
    >
      {label}
    </AccordionHeader>
    <AccordionBody active={isOpen}>{content}</AccordionBody>
  </AccordionItem>
)

export default Accordion
