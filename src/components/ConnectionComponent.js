import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { isMetaMaskConnected, isMetaMaskInstalled } from '../commons/metamask'

const ConnectionComponent = ({ onChildComponentClick }) =>
  <Container className="marginNextStep">
    <Row>
      <Col md={{ span: 1, offset: 1 }} >
        <span className="bullet">2</span>
      </Col>
      <Col md={{ span: 8, offset: 12 }}>
        <Row>
          <div className="centerDivButtons">
            <h2 className="step" >Connect your Metamask wallet. </h2>
            <Col md={{ span: 8, offset: 2 }}>
              <button className="button" onClick={onChildComponentClick} disabled={isMetaMaskConnected() || !isMetaMaskInstalled()} >Connect Wallet</button>
            </Col>
          </div>
        </Row>
      </Col>
    </Row>
  </Container>

export default ConnectionComponent
