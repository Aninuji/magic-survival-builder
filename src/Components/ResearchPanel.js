import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Form,
  Row,
  Col,
  Label,
  Input,
  FormGroup,
} from "reactstrap";
import PropTypes from "prop-types";

import { research } from "../data/research";

export default function ResearchPanel(props) {
  function GenerateGrid(){
    return research.map((research_item, index) => {
      return (
        <Col>
          <FormGroup>
            <Label>{research_item.label}</Label>
            <Input
              type="number"
              max={research_item.MaxLevel}
              min={0}
              defaultValue={0}
            />
          </FormGroup>
        </Col>
      );
    })
  }
  return (
    <Card className="my-2">
      <CardHeader tag="h5">Research</CardHeader>
      <CardBody>
        <Form>
          <Row>
            {GenerateGrid()}
          </Row>
        </Form>
      </CardBody>
    </Card>
  );
}

ResearchPanel.propTypes = {
  columns: PropTypes.number,
};
