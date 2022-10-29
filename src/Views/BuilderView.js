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
        <Col className="bg-light border" md="4" sm="12">
          <StatsPanel></StatsPanel>
        </Col>
        <Col className="bg-light border" md="8" sm="12">
          <Row>
            <Col className="bg-light border" md="6" sm="6">
              <Row>
                <Col className="bg-light border" md="12">
                  <SubjectPanel></SubjectPanel>
                </Col>
                <Col className="bg-light border" md="12">
                  <ClassPanel></ClassPanel>
                </Col>
              </Row>
            </Col>
            <Col className="bg-light border" md="6" sm="6">
              <ResearchPanel></ResearchPanel>
            </Col>
          </Row>
          <Row>
            <Col className="bg-light border" md="12" sm="12">
              <MasteriesPanel></MasteriesPanel>
            </Col>
          </Row>
          <Row>
            <Col className="bg-light border" md="12" sm="12">
              <ArtifactsPanel></ArtifactsPanel>
            </Col>
          </Row>
          <Row>
            <Col className="bg-light border" md="12" sm="12">
              <MagicsPanel></MagicsPanel>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
