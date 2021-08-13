import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import {
  addTestnetRifToken, addTestnetBProToken, addTestnetDocToken,
  addTestnetRDOCToken, addTestnetRIFPToken, addTestnetrDAIToken,
  addTestnetrUSDCToken, addTestnetrLINKToken
} from '../commons/metamask'
class TokensComponent extends Component {
  props = { step: Number }

  constructor (props) {
    super(props)
    // Steps: 0,1,2,3
    this.state = { display: false }
    this.handleAddButtonClick = this.handleAddButtonClick.bind(this)
    this.handleRemoveButtonClick = this.handleRemoveButtonClick.bind(this)
  }

  handleAddButtonClick () {
    this.setState({
      display: true
    })
  }

  handleRemoveButtonClick () {
    this.setState({
      display: false
    })
  }

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
                <button className="buttonAddToken" onClick={addTestnetRDOCToken} hidden={!this.state.display} >Add RDOC Token</button>
                <button className="buttonAddToken" onClick={addTestnetrUSDCToken} hidden={!this.state.display} >Add rUSDC Token</button>
              </Col>
              <Col>
                <Row>
                  <Col>
                    <button className="buttonAddToken" onClick={addTestnetDocToken}>Add DOC Token</button>
                    <button className="buttonAddToken" onClick={addTestnetRIFPToken} hidden={!this.state.display} >Add RIFP Token</button>
                    <button className="buttonAddToken" onClick={addTestnetrDAIToken} hidden={!this.state.display} >Add rDAI Token</button>
                  </Col>
                </Row>
                <Row className="buttonAddMoreTokens">
                  <Col>
                    <button className="buttonAddToken" hidden={this.state.display} onClick={this.handleAddButtonClick} >+</button>
                    <button className="buttonAddToken" hidden={!this.state.display} onClick={this.handleRemoveButtonClick} >-</button>
                  </Col>
                </Row>
              </Col>
              <Col>
                <button className="buttonAddToken" onClick={addTestnetBProToken}>Add BPRO Token</button>
                <button className="buttonAddToken" onClick={addTestnetrLINKToken} hidden={!this.state.display} >Add rLink Token</button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default TokensComponent
