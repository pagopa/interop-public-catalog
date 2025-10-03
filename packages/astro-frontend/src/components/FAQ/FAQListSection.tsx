import { Accordion as AccordionDRK, List, ListItem } from 'design-react-kit'
import React, { useState } from 'react'
import Accordion from '../shared/Accordion.js'

type FAQListSectionProps = {
  title: string
  faqs: Array<{ question: string; answer: string }>
}

const FAQListSection: React.FC<FAQListSectionProps> = ({ title, faqs }) => {
  const [collapseElementOpen, setCollapseElement] = useState('')

  const handleToggle = (index: string): void => {
    if (collapseElementOpen === index) {
      setCollapseElement('')
    } else {
      setCollapseElement(index)
    }
  }

  return (
    <div className="d-flex flex-column">
      <h2 className="mb-4">{title}</h2>
      <AccordionDRK>
        {faqs.map((faq, index) => (
          <Accordion
            key={index}
            label={faq.question}
            content={faq.answer}
            isOpen={collapseElementOpen === `${index}`}
            onToggle={(): void => handleToggle(`${index}`)}
            withoutBackground
          />
        ))}
      </AccordionDRK>
    </div>
  )
}

export default FAQListSection
