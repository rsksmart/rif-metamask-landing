import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const NetworkComponent = ({ disabled, onChildComponentClick }) =>
  <Container className="marginNextStep">
    <Row className="centerDivButtons">
        <Row>
            <h2 className="step" ><span className="bullet">3</span>Click here to add the Mainnet or Testnet, or change to that network if you already have them configured.</h2>
        </Row>
      <Row>
        <Col>
          <button className="button" onClick={onChildComponentClick} disabled={disabled}>Connect to RSK</button>
        </Col>
      </Row>

    </Row>
  </Container>

export default NetworkComponent
