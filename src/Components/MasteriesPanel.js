import React from "react";
import { Card, CardHeader, CardTitle, CardBody, CardText } from "reactstrap";

export default function MasteriesPanel(props) {
  return (
    <Card
      className="my-2"
      color="warning"
      inverse
    >
      <CardHeader>Choose Masteries</CardHeader>
      <CardBody>
        <CardTitle tag="h5">Special Title Treatment</CardTitle>
        <CardText>
          With supporting text below as a natural lead-in to additional content.
        </CardText>
      </CardBody>
    </Card>
  );
}
