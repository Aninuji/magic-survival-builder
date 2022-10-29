import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Form,
  Row,
  Col,
  FormGroup,
  Label,
} from "reactstrap";
import Select from "react-select";
import { masteries } from "../data/masteries";

export default function MasteriesPanel(props) {
  return (
    <Card className="my-2">
      <CardHeader tag="h5">Masteries</CardHeader>
      <CardBody>
        <Form>
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label>Level 20</Label>
                <Select
                  className="basic-single"
                  classNamePrefix="select"
                  defaultValue={masteries[0]}
                  options={masteries}
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label>Level 40</Label>
                <Select
                  className="basic-single"
                  classNamePrefix="select"
                  defaultValue={masteries[0]}
                  options={masteries}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label>Level 60</Label>
                <Select
                  className="basic-single"
                  classNamePrefix="select"
                  defaultValue={masteries[0]}
                  options={masteries}
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label>Level 80</Label>
                <Select
                  className="basic-single"
                  classNamePrefix="select"
                  defaultValue={masteries[0]}
                  options={masteries}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <FormGroup>
                <Label>Cube's Mastery</Label>
                <Select
                  className="basic-single"
                  classNamePrefix="select"
                  defaultValue={masteries[0]}
                  options={masteries}
                />
              </FormGroup>
            </Col>
          </Row>
        </Form>
      </CardBody>
    </Card>
  );
}
