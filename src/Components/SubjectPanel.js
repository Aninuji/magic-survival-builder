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
  Input,
} from "reactstrap";

export default function SubjectPanel(props) {
  return (
    <Card className="my-2" color="success" inverse>
      <CardHeader tag="h5">Subject</CardHeader>
      <CardBody>
        <Form>
          <Row>
            <Col sm={10}>
              <FormGroup check>
                <Input type="radio" defaultChecked /> <Label check>Human</Label>
              </FormGroup>
              <FormGroup check>
                <Input type="radio" /> <Label check>Elf</Label>
              </FormGroup>
              <FormGroup check disabled>
                <Input type="radio" /> <Label check>Demon</Label>
              </FormGroup>
              <FormGroup check disabled>
                <Input type="radio" /> <Label check>Spirit</Label>
              </FormGroup>
              <FormGroup check disabled>
                <Input type="radio" /> <Label check>Jack-O-Lantern</Label>
              </FormGroup>
            </Col>
          </Row>
        </Form>
      </CardBody>
    </Card>
  );
}
