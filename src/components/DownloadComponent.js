import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Trans } from 'react-i18next'

const DownloadComponent = ({ disabled }) =>
  <Container className="marginNextStep">
    <Row className="centerDivButtons">
      <Row>
        <h2 className="step" ><span className="bullet">1</span> <Trans>Download and setup Metamask.</Trans> </h2>
      </Row>
      <Row>
        <Col>
          <button onClick={ () => { window.open('https://metamask.io/download.html') } } target="_blank" rel="noreferrer" className="button" disabled={disabled} ><Trans>Download Metamask</Trans></button>
        </Col>
      </Row>

    </Row>
  </Container>

export default DownloadComponent
