import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Form,
  Row,
  Col,
  FormGroup,
} from "reactstrap";
import Select from "react-select";
import { subjects } from "../data/subjects";

export default function SubjectPanel(props) {
  return (
    <Card className="my-2">
      <CardHeader tag="h5">Subject</CardHeader>
      <CardBody>
        <Form>
          <Row>
            <Col>
              <FormGroup>
                <Select
                  className="basic-single"
                  classNamePrefix="select"
                  defaultValue={subjects[0]}
                  name="color"
                  options={subjects}
                />
              </FormGroup>
            </Col>
          </Row>
        </Form>
      </CardBody>
    </Card>
  );
}
