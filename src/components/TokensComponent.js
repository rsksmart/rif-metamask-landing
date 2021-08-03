import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

class TokensComponent extends React.Component {
  props = { step: Number }

  render () {
    return (
      <Container>
        <Row>
          <Col md={{ span: 1, offset: 1 }} className="bulletRight" >
            <span className="bullet4">4</span>
          </Col>
          <Col md={{ span: 8, offset: 12 }}>
            <h2 className="step" >Add the RSK tokens! Click below to add the Mainnet RSK compatible tokens. </h2>
            <Row>
              <Col>
                <button className="buttonAddToken" disabled={this.props.step !== 3}>Add RIF Token</button>
              </Col>
              <Col>
                <button className="buttonAddToken" disabled={this.props.step !== 3}>Add DOC Token</button>
                <button className="buttonAddToken" disabled={this.props.step !== 3}>+ More Tokens</button>
              </Col>
              <Col>
                <button className="buttonAddToken" disabled={this.props.step !== 3}>Add BPRO Token</button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default TokensComponent
