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
    <Card className="my-2" color="primary" inverse>
      <CardHeader tag="h5">Research</CardHeader>
      <CardBody>
        <Form>
          <Row>
            <Col md={3}>
              <FormGroup>
                <Label className="text-nowrap">Intelligence</Label>
                <Input type="number" max={5} min={0} defaultValue={0} />
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Label className="text-nowrap">Vitality</Label>
                <Input type="number" max={5} min={0} defaultValue={0} />
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Label className="text-nowrap">Mana Refine</Label>
                <Input type="number" max={6} min={0} defaultValue={0} />
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Label className="text-nowrap">Fast Casting</Label>
                <Input type="number" max={5} min={0} defaultValue={0} />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={3}>
              <FormGroup>
                <Label className="text-nowrap">Snipe</Label>
                <Input type="number" max={5} min={0} defaultValue={0} />
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Label className="text-nowrap">Resistance</Label>
                <Input type="number" max={5} min={0} defaultValue={0} />
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Label className="text-nowrap">Agility</Label>
                <Input type="number" max={6} min={0} defaultValue={0} />
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Label className="text-nowrap">Haste</Label>
                <Input type="number" max={5} min={0} defaultValue={0} />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={3}>
              <FormGroup>
                <Label className="text-nowrap">Regeneration</Label>
                <Input type="number" max={5} min={0} defaultValue={0} />
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Label className="text-nowrap">Explorer</Label>
                <Input type="number" max={5} min={0} defaultValue={0} />
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Label className="text-nowrap">Arcane Effuse</Label>
                <Input type="number" max={6} min={0} defaultValue={0} />
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Label className="text-nowrap">Concentration</Label>
                <Input type="number" max={5} min={0} defaultValue={0} />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={3}>
              <FormGroup>
                <Label className="text-nowrap">Recycle</Label>
                <Input type="number" max={5} min={0} defaultValue={0} />
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Label className="text-nowrap">Analysis</Label>
                <Input type="number" max={5} min={0} defaultValue={0} />
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Label className="text-nowrap">Guardian</Label>
                <Input type="number" max={6} min={0} defaultValue={0} />
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Label className="text-nowrap">Awakening</Label>
                <Input type="number" max={5} min={0} defaultValue={0} />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={3}>
              <FormGroup>
                <Label className="text-nowrap">Growth</Label>
                <Input type="number" max={5} min={0} defaultValue={0} />
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Label className="text-nowrap">Wanted</Label>
                <Input type="number" max={5} min={0} defaultValue={0} />
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Label className="text-nowrap">Luck</Label>
                <Input type="number" max={6} min={0} defaultValue={0} />
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Label className="text-nowrap">Booty</Label>
                <Input type="number" max={5} min={0} defaultValue={0} />
              </FormGroup>
            </Col>
          </Row>
        </Form>
      </CardBody>
    </Card>
  );
}
