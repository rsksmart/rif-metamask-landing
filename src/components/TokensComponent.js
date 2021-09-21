import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

import { addCustomTokens } from '../commons/metamask'
import contractMapMainnet from '@rsksmart/rsk-contract-metadata'
import contractMapTestNet from '@rsksmart/rsk-testnet-contract-metadata'
import { Trans } from 'react-i18next'

const isMainnet = process.env.REACT_APP_ENVIRONMENT_ID === '30'

const metadataTokens = Object.entries(isMainnet ? contractMapMainnet : contractMapTestNet).map(keyValue => { return { address: keyValue[0], ...keyValue[1] } })

const queryParam = new URLSearchParams(window.location.search).get('tokens')
const selectedTokens = queryParam ? queryParam.split(',').map(a => a.toLowerCase()) : []
selectedTokens.push(isMainnet ? '0x2acc95758f8b5f583470ba265eb685a8f45fc9d5' : '0x19f64674d8a5b4e652319f5e239efd3bc969a1fe')

const metadataTokensToShow = []
const metadataTokensToHide = []

for (const token of metadataTokens) {
  if (selectedTokens.includes(token.address.toLowerCase())) metadataTokensToShow.push(token)
  else metadataTokensToHide.push(token)
}

function addMetadataToken (metadataToken) {
  addCustomTokens(metadataToken)
}

const AddTokenButton = ({ metadataToken, disabled }) =>
  <Col className="bottom-column col-6 col-sm-6 col-md-6 col-lg-6 col-xl-4">
    <button
      key={metadataToken.symbol}
      className="buttonAddToken "
      onClick={() => addMetadataToken(metadataToken)}
      disabled={disabled} ><Trans>Add</Trans> {`${metadataToken.symbol}`} <Trans>Token</Trans>
    </button>
  </Col>

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
      <Container className="marginNextStep">
        <Row className="centerDivButtons">

          <Row>
            <h2 className="step" ><span className="bullet">4</span><Trans>Add the RSK tokens! Click below to add the</Trans> {isMainnet ? 'Mainnet' : 'Testnet'} <Trans>RSK compatible tokens.</Trans> </h2>
          </Row>
          <Row className="tokens-bottom-row">
            {metadataTokensToShow.map(metadataToken => <AddTokenButton key={metadataToken.address} metadataToken={metadataToken} disabled={this.props.disabled} />)}
            {this.state.display && metadataTokensToHide.map(metadataToken => <AddTokenButton key={metadataToken.address} metadataToken={metadataToken} disabled={this.props.disabled} />)}
            <Col hidden={this.state.display} className="bottom-column col-6 col-sm-6 col-md-6 col-lg-6 col-xl-4"><button key='add' onClick={this.handleAddButtonClick} className="buttonAddToken" >+</button></Col>
            <Col hidden={!this.state.display} className="bottom-column col-6 col-sm-6 col-md-6 col-lg-6 col-xl-4"><button key='remove' onClick={this.handleRemoveButtonClick} className="buttonAddToken" >-</button></Col>
          </Row>

        </Row>
      </Container>
    )
  }
}

export default TokensComponent
