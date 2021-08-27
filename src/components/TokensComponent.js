import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

import { addCustomTokens } from '../commons/metamask'
import contractMapMainnet from '@rsksmart/rsk-contract-metadata'
import contractMapTestNet from '@rsksmart/rsk-testnet-contract-metadata'

const isMainnet = process.env.REACT_APP_ENVIRONMENT_ID === '30'

const metadataTokens = Object.entries(isMainnet ? contractMapMainnet : contractMapTestNet).map(keyValue => { return { address: keyValue[0], ...keyValue[1] } })

const queryParam = new URLSearchParams(window.location.search).get('tokens')
const selectedTokens = queryParam ? queryParam.split(',').map(a => a.toLowerCase()) : []
const defaultQuantityToShow = 5

function getMetadataTokensToShow (_metadataTokens) {
  if (selectedTokens.length > 0) {
    const metadataTokensToShow = []
    for (const token of _metadataTokens) {
      if (selectedTokens.includes(token.address.toLowerCase())) {
        metadataTokensToShow.push(token)
      }
    }
    return metadataTokensToShow
  } else {
    return _metadataTokens.slice(0, defaultQuantityToShow)
  }
}
let metadataTokensToShow = getMetadataTokensToShow(metadataTokens)

function addMetadataToken (metadataToken) {
  addCustomTokens(isMainnet, metadataToken)
}

const AddTokenButton = ({ metadataToken, disabled }) => <button
  key={metadataToken.symbol}
  className="buttonAddToken"
  onClick={() => addMetadataToken(metadataToken)}
  disabled={disabled} >{`Add ${metadataToken.symbol} Token`}</button>

class TokensComponent extends Component {
  constructor (props) {
    super(props)

    this.state = { display: false }

    this.handleAddButtonClick = this.handleAddButtonClick.bind(this)
    this.handleRemoveButtonClick = this.handleRemoveButtonClick.bind(this)
  }

  handleAddButtonClick () {
    metadataTokensToShow = metadataTokens
    this.setState({
      display: true
    })
  }

  handleRemoveButtonClick () {
    metadataTokensToShow = getMetadataTokensToShow(metadataTokens)
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
          <Col >
            <h2 className="step" >Add the RSK tokens! Click below to add the {isMainnet ? 'Mainnet' : 'Testnet'} RSK compatible tokens. </h2>
            <Row>
              <Col>
                {metadataTokensToShow.map(metadataToken => <AddTokenButton key={metadataToken.address} metadataToken={metadataToken} disabled={this.props.disabled} />)}
                <button key='add' onClick={this.handleAddButtonClick} hidden={this.state.display} className="buttonAddToken" >+</button>
                <button key='remove' onClick={this.handleRemoveButtonClick} hidden={!this.state.display} className="buttonAddToken" >-</button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default TokensComponent
