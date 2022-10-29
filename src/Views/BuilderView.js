import React from "react";
import { Container, Row, Col } from "reactstrap";
import SubjectPanel from "../Components/SubjectPanel";
import ResearchPanel from "../Components/ResearchPanel";
import StatsPanel from "../Components/StatsPanel";
import MagicsPanel from "../Components/MagicsPanel";
import ClassPanel from "../Components/ClassPanel";
import MasteriesPanel from "../Components/MasteriesPanel";
import ArtifactsPanel from "../Components/ArtifactsPanel";

export default function BuildView(props) {
  return (
    <Container>
      <Row>
        <Col md="12" sm="12">
          <StatsPanel></StatsPanel>
        </Col>
      </Row>
      <Row>
        <Col md="5" sm="12">
          <Row>
            <Col md="12">
              <SubjectPanel></SubjectPanel>
            </Col>
          </Row>
          <Row>
            <Col md="12">
              <ClassPanel></ClassPanel>
            </Col>
          </Row>
          <Row>
            <Col md="12">
              <MasteriesPanel></MasteriesPanel>
            </Col>
          </Row>
        </Col>
        <Col md="7" sm="12">
          <Row>
            <Col md="12">
              <ResearchPanel></ResearchPanel>
            </Col>
          </Row>
          <Row>
            <Col md="12">
              <ArtifactsPanel></ArtifactsPanel>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col md="12" sm="12">
          <MagicsPanel></MagicsPanel>
        </Col>
      </Row>
    </Container>
  );
}
