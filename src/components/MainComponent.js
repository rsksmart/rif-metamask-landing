import React, { Component } from 'react'
import {
  Container, Image, Col, Row
} from 'react-bootstrap'
import bitcoinHandImage from '../img/bitcoinHand.png'
import FooterComponent from './FooterComponent'
import HeaderComponent from './HeaderComponent'
import { addRskTestnet, addRskMainnet, getAccounts, getNet, addTestnetRifToken, addTestnetDocToken, addTestnetBProToken, configureOnChainChanged, isMetaMaskInstalled } from '../commons/metamask'
import DownloadComponent from './DownloadComponent'
import ConnectionComponent from './ConnectionComponent'
import NetworkComponent from './NetworkComponent'
import TokensComponent from './TokensComponent'

const STEP_1 = '1'
const STEP_2 = '2'
const STEP_3 = '3'
const STEP_4 = '4'

class MainComponent extends Component {
  constructor (props) {
    super(props)
    this.state = { step: isMetaMaskInstalled() ? STEP_2 : STEP_1, net: null, address: null }
    this.toNetwork = this.toNetwork.bind(this)
    this.toTokens = this.toTokens.bind(this)
  }

  async toNetwork () {
    const accounts = await getAccounts()
    const net = await getNet()
    this.setState({
      step: net === process.env.REACT_APP_ENVIRONMENT_ID ? STEP_4 : STEP_3,
      address: accounts[0],
      net
    })
  }

  componentDidMount () {
    configureOnChainChanged(this.toNetwork, this.toTokens)
  }

  async connectToRSK () {
    switch (process.env.REACT_APP_ENVIRONMENT_ID) {
      case '30': await addRskMainnet(); break
      case '31': await addRskTestnet(); break
      case '8545': await addRskTestnet(); break
    }
  }

  async toTokens () {
    const net = await getNet()
    this.setState({ step: STEP_4, net })
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

            <DownloadComponent disabled={!(this.state.step === STEP_1)} />
            <ConnectionComponent disabled={!(this.state.step === STEP_2)} onChildComponentClick={this.toNetwork} />
            <NetworkComponent disabled={!(this.state.step === STEP_3)} step={this.state.step} net={this.state.net} onChildComponentClick={this.connectToRSK} />
            <TokensComponent disabled={!(this.state.step === STEP_4)} net={this.state.net} />
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
