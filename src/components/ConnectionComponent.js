import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Trans } from 'react-i18next'

const ConnectionComponent = ({ onChildComponentClick, disabled }) => {
  return <Container className="marginNextStep">
    <Row className="centerDivButtons">
      <Row>
        <h2 className="step" ><span className="bullet">2</span><Trans>Connect your Metamask wallet.</Trans></h2>
      </Row>
      <Row>
        <Col>
          <button className="button" onClick={onChildComponentClick} disabled={disabled} ><Trans>Connect Wallet</Trans></button>
        </Col>
      </Row>

    </Row>
  </Container>
}

export default ConnectionComponent
