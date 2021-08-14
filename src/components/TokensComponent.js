import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import {
  addTestnetRifToken, addTestnetBProToken, addTestnetDocToken,
  addTestnetRDOCToken, addTestnetRIFPToken, addTestnetrDAIToken,
  addTestnetrUSDCToken, addTestnetrLINKToken
} from '../commons/metamask'

class TokensComponent extends Component {
  constructor (props) {
    super(props)
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
                <button className="buttonAddToken" onClick={addTestnetRifToken} disabled={this.props.step !== 2} >Add RIF Token</button>
                <button className="buttonAddToken" onClick={addTestnetRDOCToken} hidden={!this.state.display} disabled={this.props.step !== 2} >Add RDOC Token</button>
                <button className="buttonAddToken" onClick={addTestnetrUSDCToken} hidden={!this.state.display} disabled={this.props.step !== 2} >Add rUSDC Token</button>
              </Col>
              <Col>
                <Row>
                  <Col>
                    <button className="buttonAddToken" onClick={addTestnetDocToken} disabled={this.props.step !== 2} >Add DOC Token</button>
                    <button className="buttonAddToken" onClick={addTestnetRIFPToken} hidden={!this.state.display} disabled={this.props.step !== 2} >Add RIFP Token</button>
                    <button className="buttonAddToken" onClick={addTestnetrDAIToken} hidden={!this.state.display} disabled={this.props.step !== 2} >Add rDAI Token</button>
                  </Col>
                </Row>
                <Row className="buttonAddMoreTokens">
                  <Col>
                    <button className="buttonAddToken" hidden={this.state.display} onClick={this.handleAddButtonClick} disabled={this.props.step !== 2} >+</button>
                    <button className="buttonAddToken" hidden={!this.state.display} onClick={this.handleRemoveButtonClick} disabled={this.props.step !== 2} >-</button>
                  </Col>
                </Row>
              </Col>
              <Col>
                <button className="buttonAddToken" onClick={addTestnetBProToken} disabled={this.props.step !== 2} >Add BPRO Token</button>
                <button className="buttonAddToken" onClick={addTestnetrLINKToken} hidden={!this.state.display} disabled={this.props.step !== 2} >Add rLink Token</button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default TokensComponent
