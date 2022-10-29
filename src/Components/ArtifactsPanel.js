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
import { artifacts } from "../data/artifacts";
export default function ArtifactsPanel(props) {
  return (
    <Card className="my-2">
      <CardHeader tag="h5">Artifacts</CardHeader>
      <CardBody>
        <Form>
          <Row>
            <Col>
              <FormGroup>
                <Select
                  className="basic-single"
                  classNamePrefix="select"
                  isMulti
                  options={artifacts}
                />
              </FormGroup>
            </Col>
          </Row>
        </Form>
      </CardBody>
    </Card>
  );
}
