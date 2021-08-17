import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { isMetaMaskInstalled } from '../commons/metamask'

const DownloadComponent = () =>
  <Container className="marginNextStep">
    <Row>
      <Col md={{ span: 1, offset: 1 }} >
        <span className="bullet">1</span>
      </Col>
      <Col md={{ span: 8, offset: 12 }}>
        <Row>
          <div className="centerDivButtons">
            <h2 className="step" >Download and setup Metamask. </h2>
            <Col md={{ span: 8, offset: 2 }}>
              <button onClick={ () => { window.open('https://metamask.io/download.html') } } target="_blank" rel="noreferrer" className="button" disabled={isMetaMaskInstalled()} >Download Metamask</button>
            </Col>
          </div>
        </Row>
      </Col>
    </Row>
  </Container>

export default DownloadComponent
