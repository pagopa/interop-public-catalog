import React from 'react'
import {
  // Container,
  // ListGroup,
  // ListGroupItem,
  // ListGroupItemHeading,
  Section,
} from 'design-react-kit'
import HowToDoListCard, { type HowToDoListCardProps } from './HowToDoListCard.js'

type HowToDoListProps = {
  howToList: HowToDoListCardProps[]
}

const HowToDoList: React.FC<HowToDoListProps> = ({ howToList }) => (
  // <section className="primary-bg-c1">
  <Section color="muted">
    <h3>Come funziona</h3>
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

// const HowToList: React.FC<HowToListProps> = ({ howToList }) => (
//   <Section color="muted">
//     <ListGroupItemHeading>
//       <div className="link-list-heading">Intestazione senza link</div>
//     </ListGroupItemHeading>
//     <ListGroup className="list-group-horizontal flex-fill">
//       <ListGroupItem>
//         <HowToListCard {...howToList[0]} />
//       </ListGroupItem>
//       <ListGroupItem>
//         <HowToListCard {...howToList[1]} />
//       </ListGroupItem>
//       <ListGroupItem>
//         <HowToListCard {...howToList[2]} />
//       </ListGroupItem>
//     </ListGroup>
//   </Section>
// );

export default HowToDoList
