import { Card, CardBody, CardReadMore, CardText, CardTitle, Icon } from 'design-react-kit'
import React from 'react'

export type HowToListCardProps = {
  icon: string
  title: string
  description: string
  readMoreHRef: string
}

const HowToListCard: React.FC<HowToListCardProps> = ({
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

export default HowToListCard
