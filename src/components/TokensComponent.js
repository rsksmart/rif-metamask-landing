import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { addTestnetRifToken } from '../commons/metamask'
class TokensComponent extends Component {
  props = { step: Number }

  render () {
    return (
      <Container>
        <Row>
          <Col md={{ span: 1, offset: 1 }} >
            <span className="bullet">4</span>
          </Col>
          <Col md={{ span: 8, offset: 12 }}>
            <h2 className="step" >Add the RSK tokens! Click below to add the Mainnet RSK compatible tokens. </h2>
            <Row>
              <Col>
                <button className="buttonAddToken" onClick={addTestnetRifToken} >Add RIF Token</button>
              </Col>
              <Col>
                <button className="buttonAddToken" >Add DOC Token</button>
              </Col>
              <Col>
                <button className="buttonAddToken" >Add BPRO Token</button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default TokensComponent
