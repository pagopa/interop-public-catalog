import {
  Badge,
  Button,
  Card,
  CardBody,
  CardTagsHeader,
  CardText,
  CardTitle,
  Chip,
  ChipLabel,
} from 'design-react-kit'
import React from 'react'

type UseCaseCardProps = {
  title: string
  description: string | React.ReactNode
  categoryTag: string
  isNew?: boolean
  replicableBy: string[]
}

const UseCaseCard: React.FC<UseCaseCardProps> = ({
  categoryTag,
  isNew = false,
  title,
  description,
  replicableBy,
}) => (
  <Card className="card-bg card-big no-after" spacing>
    <CardBody>
      <CardTagsHeader>
        <Chip className="my-0">
          <ChipLabel>{categoryTag}</ChipLabel>
        </Chip>
        {isNew && <Badge color="success">Nuovo</Badge>}
      </CardTagsHeader>
      <CardTitle tag="h5">{title}</CardTitle>
      <CardText>{description}</CardText>
      {/* <div className="it-card-footer"> */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          flexDirection: 'column',
        }}
      >
        <span>
          <strong>Replicabile da:</strong> {replicableBy.join(', ')}
        </span>
        <Button
          color="primary"
          size="sm"
          style={{ display: 'block', marginTop: '16px' }}
          onClick={(): void => console.log('Scopri di più')}
        >
          Scopri di più
        </Button>
      </div>
    </CardBody>
  </Card>
)

export default UseCaseCard
