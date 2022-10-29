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

export default function ResearchPanel(props) {
  return (
    <Card className="my-2">
      <CardHeader tag="h5">Research</CardHeader>
      <CardBody>
        <Form>
          <Row>
            <Col md={3}>
              <FormGroup>
                <Label>Intelligence</Label>
                <Input type="number" max={5} min={0} defaultValue={0} />
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Label>Vitality</Label>
                <Input type="number" max={5} min={0} defaultValue={0} />
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Label>Mana Refine</Label>
                <Input type="number" max={6} min={0} defaultValue={0} />
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Label>Fast Casting</Label>
                <Input type="number" max={5} min={0} defaultValue={0} />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={3}>
              <FormGroup>
                <Label>Snipe</Label>
                <Input type="number" max={5} min={0} defaultValue={0} />
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Label>Resistance</Label>
                <Input type="number" max={5} min={0} defaultValue={0} />
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Label>Agility</Label>
                <Input type="number" max={6} min={0} defaultValue={0} />
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Label>Haste</Label>
                <Input type="number" max={5} min={0} defaultValue={0} />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={3}>
              <FormGroup>
                <Label>Regeneration</Label>
                <Input type="number" max={5} min={0} defaultValue={0} />
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Label>Explorer</Label>
                <Input type="number" max={5} min={0} defaultValue={0} />
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Label>Arcane Effuse</Label>
                <Input type="number" max={6} min={0} defaultValue={0} />
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Label>Concentration</Label>
                <Input type="number" max={5} min={0} defaultValue={0} />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={3}>
              <FormGroup>
                <Label>Recycle</Label>
                <Input type="number" max={5} min={0} defaultValue={0} />
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Label>Analysis</Label>
                <Input type="number" max={5} min={0} defaultValue={0} />
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Label>Guardian</Label>
                <Input type="number" max={6} min={0} defaultValue={0} />
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Label>Awakening</Label>
                <Input type="number" max={5} min={0} defaultValue={0} />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={3}>
              <FormGroup>
                <Label>Growth</Label>
                <Input type="number" max={5} min={0} defaultValue={0} />
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Label>Wanted</Label>
                <Input type="number" max={5} min={0} defaultValue={0} />
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Label>Luck</Label>
                <Input type="number" max={6} min={0} defaultValue={0} />
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Label>Booty</Label>
                <Input type="number" max={5} min={0} defaultValue={0} />
              </FormGroup>
            </Col>
          </Row>
        </Form>
      </CardBody>
    </Card>
  );
}
