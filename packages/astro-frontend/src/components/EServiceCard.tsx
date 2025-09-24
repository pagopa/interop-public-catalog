import React from 'react'
import {
  Card,
  CardBody,
  CardReadMore,
  CardTagsHeader,
  CardText,
  CardTitle,
  Chip,
  ChipLabel,
  Icon,
} from 'design-react-kit'

type EServiceCardProps = {
  title: string | React.ReactNode
  description: string | React.ReactNode
}

const EServiceCard: React.FC<EServiceCardProps> = ({ title, description }) => (
  <Card className="card-bg" spacing>
    <CardBody>
      <CardTagsHeader>
        <span>Nome dell'ente</span>
        <Chip className="my-0">
          <Icon icon="it-github" size="xs" />
          <ChipLabel>Accesso riservato</ChipLabel>
        </Chip>
      </CardTagsHeader>
      <CardTitle tag="h5">{title}</CardTitle>
      <CardText>{description}</CardText>
      <CardReadMore href="#" iconName="it-arrow-right" text="Leggi di più" />
    </CardBody>
  </Card>
)

export default EServiceCard
