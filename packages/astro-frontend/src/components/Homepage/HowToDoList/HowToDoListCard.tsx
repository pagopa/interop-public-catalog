import { Card, CardBody, CardReadMore, CardText, CardTitle, Icon } from 'design-react-kit'
import React from 'react'

export type HowToDoListCardProps = {
  icon: string
  title: string
  description: string
  readMoreHRef: string
}

const HowToDoListCard: React.FC<HowToDoListCardProps> = ({
  icon,
  title,
  description,
  readMoreHRef,
}) => (
  <Card className={`card-big bg-transparent`} spacing>
    <CardBody>
      <div className="top-icon">
        <Icon icon={icon} />
      </div>
      <CardTitle tag="h5">{title}</CardTitle>
      <CardText>{description}</CardText>
      <a></a>
      <CardReadMore href={readMoreHRef} iconName="it-arrow-right" text="Leggi di più" />
    </CardBody>
  </Card>
)

export default HowToDoListCard
