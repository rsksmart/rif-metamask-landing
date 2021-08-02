import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

class ConnectionComponent extends React.Component {
  constructor (props) {
    super(props)
    this.isMetaMaskInstalled = props.isMetaMaskInstalled.bind(this)
    props = { step: Number }

    if (this.isMetaMaskInstalled()) {
      this.state = { step: 1, disabled: false }
    }
  }

  render () {
    return (
      <Container className="marginNextStep">
        <Row>
          <Col xs={1} className="bulletRight" >
            <span className="bullet2">2</span>
          </Col>
          <Col>
            <h2 className="step" >Connect your Metamask wallet. </h2>
            <button className="button" disabled={(this.props.step !== 1)} onClick={this.props.onChildComponentClick} >Connect Wallet</button>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default ConnectionComponent
