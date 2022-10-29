import React from "react";
import { Card, CardHeader, CardTitle, CardBody, CardText } from "reactstrap";

export default function MagicsPanel(props) {
  return (
    <Card className="my-2">
      <CardHeader tag="h5">Magics</CardHeader>
      <CardBody>
        <CardTitle>Special Title Treatment</CardTitle>
        <CardText>
          With supporting text below as a natural lead-in to additional content.
        </CardText>
      </CardBody>
    </Card>
  );
}
