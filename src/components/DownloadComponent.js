import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const DownloadComponent = ({ disabled }) =>
  <Container className="marginNextStep">
    <Row className="centerDivButtons">
        <Row>
            <h2 className="step" ><span className="bullet">1</span> Download and setup Metamask. </h2>
        </Row>
      <Row>
        <Col>
          <button onClick={ () => { window.open('https://metamask.io/download.html') } } target="_blank" rel="noreferrer" className="button" disabled={disabled} >Download Metamask</button>
        </Col>
      </Row>

    </Row>
  </Container>

export default DownloadComponent
