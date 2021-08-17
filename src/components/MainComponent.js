import React, { Component } from 'react'
import {
  Container, Image, Col, Row
} from 'react-bootstrap'
import bitcoinHandImage from '../img/bitcoinHand.png'
import FooterComponent from './FooterComponent'
import HeaderComponent from './HeaderComponent'
import { addRskTestnet, addRskMainnet, getAccounts, getNet, addTestnetRifToken, addTestnetDocToken, addTestnetBProToken } from '../commons/metamask'
import DownloadComponent from './DownloadComponent'
import ConnectionComponent from './ConnectionComponent'
import NetworkComponent from './NetworkComponent'
import TokensComponent from './TokensComponent'

class MainComponent extends Component {
  constructor (props) {
    super(props)
    this.state = { step: 0, net: null, address: null }
    this.toNetwork = this.toNetwork.bind(this)
    this.toTokens = this.toTokens.bind(this)
  }

  async toNetwork () {
    const accounts = await getAccounts()
    this.setState({ step: 1, address: accounts[0], net: 'Connect to RSK!' })
  }

  async toTokens () {
    switch (process.env.REACT_APP_ENVIRONMENT_ID) {
      case '30': await addRskMainnet(); break
      case '31': await addRskTestnet(); break
      case '8545': await addRskTestnet(); break
    }

    const net = await getNet()
    this.setState({ step: 2, net })
  }

  addTokens () {
    this.setState({
      step: 3
    })
  }

  addDefaultTokensByQueryParams () {
    const queryParams = new URLSearchParams(window.location.search)
    const address = queryParams.get('address')

    switch (address) {
      case '0x19f64674D8a5b4e652319F5e239EFd3bc969a1FE': addTestnetRifToken(); break
      case '0xCb46C0DdC60d18eFEB0e586c17AF6Ea36452DaE0': addTestnetDocToken(); break
      case '0x4dA7997A819bb46B6758b9102234c289Dd2ad3bf': addTestnetBProToken(); break
    }
  }

  render () {
    this.addDefaultTokensByQueryParams()

    return <>
      <HeaderComponent address={this.state.address} net={this.state.net}/>
      <Container>
        <Row>
          <Col md={7}>
            <header className="App-header">
                Connect Metamask to RSK
            </header>
            <br/>
            <p className="toolExplanation">Use this tool to connect your Metamask browser wallet to the RSK network. After this steps you will be able to send tokens and connect to dapps.</p>

            <DownloadComponent step={this.state.step} />
            <ConnectionComponent step={this.state.step} onChildComponentClick={this.toNetwork} />
            <NetworkComponent step={this.state.step} net={this.state.net} onChildComponentClick={this.toTokens} />
            <TokensComponent step={this.state.step} net={this.state.net} />
          </Col>
          <Col md={{ span: 3, offset: 12 }}>
            <Image className="mainImage" src={bitcoinHandImage} />
          </Col>
          <Col md={{ span: 2, offset: 12 }}>
            <div id="mainImageCircle"/>
          </Col>
        </Row>
      </Container>
      <FooterComponent />
    </>
  }
}

export default MainComponent
