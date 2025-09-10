import {
  Badge,
  Button,
  Card,
  CardBody,
  CardTag,
  CardTagsHeader,
  CardText,
  CardTitle,
  Chip,
  ChipLabel,
  Col,
  Row,
} from "design-react-kit";
import React from "react";

type UseCaseCardProps = {
  title: string;
  description: string | React.ReactNode;
  categoryTag: string;
  isNew?: boolean;
  replicableBy: string[];
};

export const UseCaseCard: React.FC<UseCaseCardProps> = ({
  categoryTag,
  isNew = false,
  title,
  description,
  replicableBy,
}) => (
  <Row>
    <Col lg="6" xs="12">
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
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              flexDirection: "column",
            }}
          >
            <span>
              <strong>Replicabile da:</strong> {replicableBy.join(", ")}
            </span>
            <Button
              color="primary"
              size="sm"
              style={{ display: "block", marginTop: "16px" }}
            >
              Scopri di più
            </Button>
          </div>
        </CardBody>
      </Card>
    </Col>
  </Row>
);
