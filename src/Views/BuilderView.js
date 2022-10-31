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
        <Col md="7" sm="12">
          <Row>
            <Col>
              <StatsPanel></StatsPanel>
            </Col>
          </Row>
          <Row>
            <Col md="6" sm="12">
              <Row>
                <Col>
                  <SubjectPanel></SubjectPanel>
                </Col>
              </Row>
              <Row>
                <Col>
                  <ClassPanel></ClassPanel>
                </Col>
              </Row>
              <Row>
                <Col>
                  <MasteriesPanel></MasteriesPanel>
                </Col>
              </Row>
            </Col>
            <Col md="6" sm="12">
              <Row>
                <Col>
                  <ResearchPanel columns={3}></ResearchPanel>
                </Col>
              </Row>
              <Row>
                <Col>
                  <ArtifactsPanel></ArtifactsPanel>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col md="5" sm="12">
          <MagicsPanel></MagicsPanel>
        </Col>
      </Row>
    </Container>
  );
}
