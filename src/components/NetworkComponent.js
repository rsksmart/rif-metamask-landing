import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { handleNet } from '../commons/metamask'

class NetworkComponent extends Component {
  props = { step: Number }

  render () {
    return (
      <Container className="marginNextStep">
        <Row>
          <Col md={{ span: 1, offset: 1 }} >
            <span className="bullet">3</span>
          </Col>
          <Col md={{ span: 8, offset: 12 }}>
            <h2 className="step" >Click here to add the Mainnet or Testnet, or change to that network if you already have them configured.</h2>
            <button className="button" onClick={this.props.onChildComponentClick} disabled={this.props.net === 31}>Connect to RSK</button>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default NetworkComponent
