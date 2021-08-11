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
    // Steps: 0,1,2,3
    this.state = { step: 0, net: null, address: null }

    this.toNetwork = this.toNetwork.bind(this)
    this.toTokens = this.toTokens.bind(this)
  }

  async toNetwork () {
    const accounts = await getAccounts()
    this.setState({ step: 1, address: accounts[0], net: 'Connect RSK!' })
  }

  async toTokens () {
    switch (process.env.REACT_APP_ENVIRONMENT_ID) {
      case '30': await addRskMainnet(); break
      case '31': await addRskTestnet(); break
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
    const addressParam = window.location.search.startsWith('?0x') ? window.location.search.replace('?', '') : ''

    switch (addressParam) {
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
            <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&amp;family=Quicksand:wght@300;400;500;600;700&amp" rel="stylesheet"></link><link href="https://fonts.googleapis.com/css2?family=Rubik:wght@300&display=swap" rel="stylesheet" /><link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;1,100&display=swap" rel="stylesheet" />
            <header className="App-header">
                Connect Metamask to RSK
            </header>
            <br/>
            <p className="toolExplanation">Use this tool to connect your Metamask browser wallet to the RSK network. After this steps you will be able to send tokens and connect to dapps.</p>

            <DownloadComponent step={this.state.step} />
            <ConnectionComponent step={this.state.step} onChildComponentClick={this.toNetwork} />
            <NetworkComponent step={this.state.step} net={this.state.net} onChildComponentClick={this.toTokens} />
            <TokensComponent step={this.state.step} />
          </Col>
          <Col>
            <Image className="mainImage" src={bitcoinHandImage} />
          </Col>
        </Row>
      </Container>
      <FooterComponent />
    </>
  }
}

export default MainComponent
