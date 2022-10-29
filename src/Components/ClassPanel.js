import React from "react";
import {
  Card,
  CardHeader,
  Form,
  CardBody,
  CardText,
  Row,
  Col,
  FormGroup,
  Input,
} from "reactstrap";

export default function ClassPanel(props) {
  return (
    <Card className="my-2" color="danger" inverse>
      <CardHeader tag="h5">Class</CardHeader>
      <CardBody>
        <Form>
          <Row>
            <Col md={8}>
              <FormGroup>
                <Input id="exampleSelect" name="select" type="select">
                  <option>Wizard</option>
                  <option>Astronomer</option>
                  <option>Elementalist</option>
                  <option>Shaman</option>
                  <option>Warlock</option>
                  <option>Enchantress</option>
                  <option>Summoner</option>
                  <option>Bishop</option>
                  <option>Invoker</option>
                  <option>Druid</option>
                  <option>Witch</option>
                  <option>Sorcerer</option>
                  <option>Archemist</option>
                  <option>Scholar</option>
                  <option>Lich</option>
                  <option>Electromancer</option>
                  <option>Arbiter</option>
                  <option>Arcmage</option>
                  <option>Kabbalist</option>
                  <option>Magician</option>
                  <option>Mage</option>
                  <option>Battle Mage</option>
                  <option>Warlord</option>
                  <option>Dark Mage</option>
                </Input>
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
        <CardText>
          With supporting text below as a natural lead-in to additional content.
        </CardText>
      </CardBody>
    </Card>
  );
}
