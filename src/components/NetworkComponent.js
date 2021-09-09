import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const NetworkComponent = ({ disabled, onChildComponentClick }) =>
  <Container className="marginNextStep">
    <Row>
      <Col md={{ span: 1, offset: 1 }} >
        <span className="bullet">3</span>
      </Col>
      <Col>
        <Row>
          <div className="centerDivButtons">
            <h2 className="step" >Click here to add the Mainnet or Testnet, or change to that network if you already have them configured.</h2>
            <Col md={{ span: 8, offset: 2 }}>
              <button className="button" onClick={onChildComponentClick} disabled={disabled}>Connect to RSK</button>
            </Col>
          </div>
        </Row>
      </Col>
    </Row>
  </Container>

export default NetworkComponent
