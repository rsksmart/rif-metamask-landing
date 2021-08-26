import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { addTokens } from '../commons/metamask'

const getDefaultTokens = () => {
  const queryParams = new URLSearchParams(window.location.search)
  const tokens = queryParams.get('tokens')
  if (!tokens) return []
  return tokens.split(',')
}

class TokensComponent extends Component {
  constructor (props) {
    super(props)
    this.state = { display: false, net: props.net }
    this.handleAddButtonClick = this.handleAddButtonClick.bind(this)
    this.handleRemoveButtonClick = this.handleRemoveButtonClick.bind(this)

    this.defaultTokens = getDefaultTokens()
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

  async addRIFToken () {
    if (process.env.REACT_APP_ENVIRONMENT_ID === '30') {
      addTokens(process.env.REACT_APP_ENVIRONMENT_ID, 'RIF')
    }
    addTokens(process.env.REACT_APP_ENVIRONMENT_ID, 'tRIF')
  }

  async addRDOCToken () {
    addTokens(process.env.REACT_APP_ENVIRONMENT_ID, 'RDOC')
  }

  async addrUSDCToken () {
    if (process.env.REACT_APP_ENVIRONMENT_ID === '30') {
      addTokens(process.env.REACT_APP_ENVIRONMENT_ID, 'rUSDC')
    }
    addTokens(process.env.REACT_APP_ENVIRONMENT_ID, 'rKovUSDC')
  }

  async addDOCToken () {
    addTokens(process.env.REACT_APP_ENVIRONMENT_ID, 'DOC')
  }

  async addRIFPToken () {
    addTokens(process.env.REACT_APP_ENVIRONMENT_ID, 'RIFP')
  }

  async addrDAIToken () {
    if (process.env.REACT_APP_ENVIRONMENT_ID === '30') {
      addTokens(process.env.REACT_APP_ENVIRONMENT_ID, 'rDAI')
    }
    addTokens(process.env.REACT_APP_ENVIRONMENT_ID, 'rKovDAI')
  }

  async addBPROToken () {
    addTokens(process.env.REACT_APP_ENVIRONMENT_ID, 'BPro')
  }

  async addrLinkToken () {
    if (process.env.REACT_APP_ENVIRONMENT_ID === '30') {
      addTokens(process.env.REACT_APP_ENVIRONMENT_ID, 'rLink')
    }
    addTokens(process.env.REACT_APP_ENVIRONMENT_ID, 'rKovLINK')
  }

  async addSOVToken () {
    if (process.env.REACT_APP_ENVIRONMENT_ID === '30') {
      addTokens(process.env.REACT_APP_ENVIRONMENT_ID, 'SOV')
    }
    addTokens(process.env.REACT_APP_ENVIRONMENT_ID, 'rKovSOV')
  }

  isTokenHidden = (address) => !this.defaultTokens.includes(address) && !this.state.display

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
                <button className="buttonAddToken" onClick={this.addRIFToken} hidden={false} disabled={this.props.disabled} >Add RIF Token</button>
                <button className="buttonAddToken" onClick={this.addRDOCToken} hidden={this.isTokenHidden('0xc3de9f38581f83e281f260d0ddbaac0e102ff9f8')} disabled={this.props.disabled} >Add RDOC Token</button>
                <button className="buttonAddToken" onClick={this.addrUSDCToken} hidden={!this.state.display} disabled={this.props.disabled} >Add rUSDC Token</button>
              </Col>
              <Col>
                <Row>
                  <Col>
                    <button className="buttonAddToken" onClick={this.addDOCToken} hidden={!this.state.display} disabled={this.props.disabled} >Add DOC Token</button>
                    <button className="buttonAddToken" onClick={this.addRIFPToken} hidden={!this.state.display} disabled={this.props.disabled} >Add RIFP Token</button>
                    <button className="buttonAddToken" onClick={this.addrDAIToken} hidden={!this.state.display} disabled={this.props.disabled} >Add rDAI Token</button>
                  </Col>
                </Row>
                <Row className="buttonAddMoreTokens">
                  <Col>
                    <button className="buttonAddToken" hidden={this.state.display} onClick={this.handleAddButtonClick} disabled={this.props.disabled} >+</button>
                    <button className="buttonAddToken" hidden={!this.state.display} onClick={this.handleRemoveButtonClick} disabled={this.props.disabled} >-</button>
                  </Col>
                </Row>
              </Col>
              <Col>
                <button className="buttonAddToken" onClick={this.addBPROToken} hidden={!this.state.display} disabled={this.props.disabled} >Add BPRO Token</button>
                <button className="buttonAddToken" onClick={this.addrLinkToken} hidden={!this.state.display} disabled={this.props.disabled} >Add rLink Token</button>
                <button className="buttonAddToken" onClick={this.addSOVToken} hidden={!this.state.display} disabled={this.props.disabled || this.props.net !== '30'} >Add SOV Token</button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default TokensComponent
