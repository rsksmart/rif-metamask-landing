import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const ConnectionComponent = ({ onChildComponentClick, disabled }) => {
  return <Container className="marginNextStep">
    <Row className="centerDivButtons">
        <Row>
            <h2 className="step" ><span className="bullet">2</span>Connect your Metamask wallet. </h2>
        </Row>
      <Row>
        <Col>
          <button className="button" onClick={onChildComponentClick} disabled={disabled} >Connect Wallet</button>
        </Col>
      </Row>

    </Row>
  </Container>
}

export default ConnectionComponent
