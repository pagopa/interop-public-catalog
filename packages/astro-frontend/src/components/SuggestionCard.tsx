import { Button, Card, CardBody, CardText, CardTitle, Icon } from 'design-react-kit'
import React from 'react'

type SuggestionCardProps = {
  title: string | React.ReactNode
  description: string | React.ReactNode
  icon: string
  actionButton: {
    label: string
    onClick: () => void
    icon?: string
  }
}

const SuggestionCard: React.FC<SuggestionCardProps> = ({
  title,
  description,
  icon,
  actionButton,
}) => (
  <Card className={`card-big card-bg`} spacing>
    <CardBody>
      <div className="top-icon">
        <Icon icon={icon} />
      </div>
      <CardTitle tag="h5">{title}</CardTitle>
      <CardText>{description}</CardText>
      <div className="it-card-footer">
        <Button
          color="primary"
          size="sm"
          onClick={actionButton.onClick}
          icon={actionButton.icon ? true : false}
        >
          {actionButton.label} <Icon color="white" icon={actionButton.icon || ''} />
        </Button>
      </div>
    </CardBody>
  </Card>
)

export default SuggestionCard
