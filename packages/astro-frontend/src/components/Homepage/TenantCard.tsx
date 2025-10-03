import { Card, CardBody, CardFooter, CardReadMore, CardTitle, Icon } from 'design-react-kit'
import React from 'react'

type TenantCardProps = {
  tenantName: string
  icon: string
}

const TenantCard: React.FC<TenantCardProps> = ({ tenantName, icon }) => (
  <Card className="card-bg rounded-5">
    <CardBody>
      <div className="top-icon">
        <Icon className="icon icon-secondary icon-xl" icon={icon} />
      </div>
      <CardTitle tag="h5">{tenantName}</CardTitle>
    </CardBody>
    <CardFooter className="border-0">
      <CardReadMore href={''} iconName="it-arrow-right" text="Scopri di più" />
    </CardFooter>
  </Card>
)

export default TenantCard
