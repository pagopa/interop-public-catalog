import React from 'react'
import { Col, Row, Section } from 'design-react-kit'
import SuggestionCard, { SuggestionCardProps } from './SuggestionCard.js'

type SuggestionsSectionProps = {
  title: string
  suggestions: SuggestionCardProps[]
}

const SuggestionsSection: React.FC<SuggestionsSectionProps> = ({ title, suggestions }) => (
  <Section color="primary">
    <h3 className="text-white">{title}</h3>
    <Row>
      {suggestions.map((suggestion) => (
        <Col>
          <SuggestionCard {...suggestion} />
        </Col>
      ))}
    </Row>
  </Section>
)

export default SuggestionsSection
