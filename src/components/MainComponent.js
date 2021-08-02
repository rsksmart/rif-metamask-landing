import React from 'react'
import {
  Container, Image, Col, Row
} from 'react-bootstrap'
import bitcoinHandImage from '../img/bitcoinHand.png'
import rskLogo from '../img/logoColor.svg'
import ConnectionComponent from './ConnectionComponent'
import DownloadComponent from './DownloadComponent'
import NetworkComponent from './NetworkComponent'
import TokensComponent from './TokensComponent'

class MainComponent extends React.Component {
  constructor (props) {
    super(props)
    // Steps: 0,1,2,3
    this.state = { step: 0, disabled: false }
    this.addRskMainnet = props.addRskMainnet.bind(this)
    this.isMetaMaskInstalled = props.isMetaMaskInstalled.bind(this)

    if (this.isMetaMaskInstalled()) {
      this.state = { step: 1, disabled: false }
    }
  }

  toConnection () {
    this.setState({
      step: 1
    })
  }

  toNetwork () {
    this.setState({
      step: 2
    })
  }

  toTokens () {
    this.setState({
      step: 3
    })
  }

  render () {
    return (
      <Container>
        <Row>
          <Col>
            <Image className="rskLogo" src={rskLogo} />
          </Col>
        </Row>
        <Row>
          <Col md={7}>
            <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&amp;family=Quicksand:wght@300;400;500;600;700&amp" rel="stylesheet"></link><link href="https://fonts.googleapis.com/css2?family=Rubik:wght@300&display=swap" rel="stylesheet" /><link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;1,100&display=swap" rel="stylesheet" />
            <header className="App-header">
                Connect Metamask to RSK
            </header>
            <br/>
            <p className="toolExplanation">Use this tool to connect your Metamask browser wallet to the RSK network. After this steps you will be able to send tokens and connect to dapps.</p>

            <DownloadComponent step={this.state.step} isMetaMaskInstalled={this.isMetaMaskInstalled.bind(this)} onChildComponentClick={this.toConnection.bind(this)}/>
            <ConnectionComponent step={this.state.step} isMetaMaskInstalled={this.isMetaMaskInstalled.bind(this)} onChildComponentClick={this.toNetwork.bind(this)} />
            <NetworkComponent step={this.state.step} onChildComponentClick={this.toTokens.bind(this)} />
            <TokensComponent step={this.state.step} />
          </Col>
          <Col>
            <Image className="mainImage" src={bitcoinHandImage} />
          </Col>
        </Row>
      </Container>
    )
  }
}

export default MainComponent
