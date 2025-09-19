import {
  Card,
  CardBody,
  CardReadMore,
  CardText,
  CardTitle,
  Col,
  Icon,
  Row,
} from "design-react-kit";
import React from "react";

export type HowToListCardProps = {
  icon: string;
  title: string;
  description: string;
  readMoreHRef: string;
};

export const HowToListCard: React.FC<HowToListCardProps> = ({
  icon,
  title,
  description,
  readMoreHRef,
}) => (
  <Row className={`flex-fill`}>
    <Col xs="12">
      <Card className={`card-big bg-transparent`} spacing>
        <CardBody>
          <div className="top-icon">
            <Icon icon={icon} />
          </div>
          <CardTitle tag="h5">{title}</CardTitle>
          <CardText>{description}</CardText>
          <CardReadMore
            href={readMoreHRef}
            iconName="it-arrow-right"
            text="Leggi di più"
          />
        </CardBody>
      </Card>
    </Col>
  </Row>
);
