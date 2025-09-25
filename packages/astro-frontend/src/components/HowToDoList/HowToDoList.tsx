import React from 'react'
import { Section } from 'design-react-kit'
import HowToDoListCard, { type HowToDoListCardProps } from './HowToDoListCard.js'

type HowToDoListProps = {
  title: string
  howToList: HowToDoListCardProps[]
}

const HowToDoList: React.FC<HowToDoListProps> = ({ title, howToList }) => (
  <Section color="muted">
    <h3>{title}</h3>
    <ul className="px-4 list-group list-group-horizontal">
      {howToList.map((card, index) => (
        <li
          key={card.title}
          className="flex-fill list-group-item bg-transparent"
          style={{
            border: 'none',
            borderRight: index !== howToList.length - 1 ? '1px solid #BFDFFF' : 'none',
          }}
        >
          <HowToDoListCard {...card} />
        </li>
      ))}
    </ul>
  </Section>
)

export default HowToDoList
