import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

class ConnectionComponent extends React.Component {
  constructor (props) {
    super(props)
    props = { step: Number }
  }

  render () {
    return (
      <Container className="marginNextStep">
        <Row>
          <Col md={{ span: 1, offset: 1 }} >
            <span className="bullet">2</span>
          </Col>
          <Col md={{ span: 8, offset: 12 }}>
            <h2 className="step" >Connect your Metamask wallet. </h2>
            <button className="button" disabled={(this.props.step !== 1)} onClick={this.props.onChildComponentClick} >Connect Wallet</button>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default ConnectionComponent
