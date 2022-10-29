import React from "react";
import {
  Card,
  CardHeader,
  Form,
  CardBody,
  Row,
  Col,
  FormGroup,
  Input,
} from "reactstrap";
import Select from "react-select";
import { classes } from "../data/classes";

export default function ClassPanel(props) {
  return (
    <Card className="my-2">
      <CardHeader tag="h5">Class</CardHeader>
      <CardBody>
        <Form>
          <Row>
            <Col md={8}>
              <FormGroup>
                <Select
                  className="basic-single"
                  classNamePrefix="select"
                  defaultValue={classes[0]}
                  name="color"
                  options={classes}
                />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Input id="exampleSelect" name="select" type="select">
                  <option>Base</option>
                  <option>Mastery</option>
                </Input>
              </FormGroup>
            </Col>
          </Row>
        </Form>
      </CardBody>
    </Card>
  );
}
