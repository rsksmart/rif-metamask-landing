import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Trans } from 'react-i18next'

const NetworkComponent = ({ disabled, onChildComponentClick }) =>
  <Container className="marginNextStep">
    <Row className="centerDivButtons">
      <Row>
        <h2 className="step" ><span className="bullet">3</span><Trans>Click here to add the Mainnet or Testnet, or change to that network if you already have them configured.</Trans></h2>
      </Row>
      <Row>
        <Col>
          <button className="button" onClick={onChildComponentClick} disabled={disabled}><Trans>Connect to RSK</Trans></button>
        </Col>
      </Row>

    </Row>
  </Container>

export default NetworkComponent
