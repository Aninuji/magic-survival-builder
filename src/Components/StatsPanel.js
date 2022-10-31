import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardText,
  Form,
  FormGroup,
  Label,
  Col,
  Row,
  Input,
} from "reactstrap";

export default function SubjectPanel(props) {
  return (
    <Card className="my-2">
      <CardHeader tag="h5">Stats</CardHeader>
      <CardBody>
        <CardText>
          <Form>
            <Row>
              <Col md={4}></Col>
              <Col md={4}>
                <FormGroup>
                  <Label>Level</Label>
                  <Input
                    id="exampleNumber"
                    name="number"
                    placeholder="1"
                    type="number"
                    max={100}
                    min={1}
                  />
                </FormGroup>
              </Col>
              <Col md={4}></Col>
            </Row>
            <Row>
              <Col md={4}>
                <FormGroup>
                  <Label>HP</Label>
                  <Input id="hp" value={"200/200"} disabled />
                </FormGroup>
              </Col>
              <Col md={4}>
                <FormGroup>
                  <Label>HP reg. per sec.</Label>
                  <Input id="hp_regen" value={"0%"} disabled />
                </FormGroup>
              </Col>
              <Col md={4}>
                <FormGroup>
                  <Label>HP Orb Recovery</Label>
                  <Input id="hp_recovery" value={"30"} disabled />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col md={2}>
                <FormGroup>
                  <Label>Damage Reduction</Label>
                  <Input id="dmg_reduction" value={"0%"} disabled />
                </FormGroup>
              </Col>
              <Col md={2}>
                <FormGroup>
                  <Label>Evasion Chance</Label>
                  <Input id="evasion" value={"0%"} disabled />
                </FormGroup>
              </Col>
              <Col md={2}>
                <FormGroup>
                  <Label>Movement Speed</Label>
                  <Input id="speed" value={"100"} disabled />
                </FormGroup>
              </Col>
              <Col md={2}>
                <FormGroup>
                  <Label>Crit. Chance</Label>
                  <Input id="crit" value={"0%"} disabled />
                </FormGroup>
              </Col>
              <Col md={2}>
                <FormGroup>
                  <Label>Critical Strike</Label>
                  <Input id="crit_strike" value={"200%"} disabled />
                </FormGroup>
              </Col>
              <Col md={2}>
                <FormGroup>
                  <Label>Item Pickup Range</Label>
                  <Input id="item_range" value={"100%"} disabled />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col md={2}>
                <FormGroup>
                  <Label>All Magic Damage</Label>
                  <Input id="blue_damage" value={"0%"} disabled />
                </FormGroup>
              </Col>
              <Col md={2}>
                <FormGroup>
                  <Label>All Magic Power</Label>
                  <Input id="red_damage" value={"0%"} disabled />
                </FormGroup>
              </Col>
              <Col md={2}>
                <FormGroup>
                  <Label>Magic Explosion</Label>
                  <Input id="explosion" value={"0%"} disabled />
                </FormGroup>
              </Col>
              <Col md={2}>
                <FormGroup>
                  <Label>Magic Duration</Label>
                  <Input id="duration" value={"0%"} disabled />
                </FormGroup>
              </Col>
              <Col md={2}>
                <FormGroup>
                  <Label>Cooldown</Label>
                  <Input id="cd" value={"0%"} disabled />
                </FormGroup>
              </Col>
              <Col md={2}>
                <FormGroup>
                  <Label>MP Gains</Label>
                  <Input id="cd" value={"0%"} disabled />
                </FormGroup>
              </Col>
            </Row>
            <Row></Row>
          </Form>
        </CardText>
      </CardBody>
    </Card>
  );
}
