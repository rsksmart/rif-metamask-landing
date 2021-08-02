import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

class NetworkComponent extends React.Component {
  props = { step: Number }

  render () {
    return (
      <Container className="marginNextStep">
        <Row>
          <Col xs={1} className="bulletRight" >
            <span className="bullet3">3</span>
          </Col>
          <Col>
            <h2 className="step" >Click here to add the Mainnet or Testnet, or change to that network if you already have them configured.</h2>
            <button className="button" disabled={this.props.step !== 2} onClick={this.props.onChildComponentClick}>Connect to RSK</button>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default NetworkComponent
