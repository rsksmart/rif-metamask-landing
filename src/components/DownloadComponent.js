import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { isMetaMaskInstalled } from '../commons/metamask'

class DownloadComponent extends React.Component {
  constructor (props) {
    super(props)
    this.onChildComponentClick = props.onChildComponentClick.bind(this)  
    if (isMetaMaskInstalled()) {
      this.setState({
        step: 1
      })
    }
  }

  render () {
    return (
      <Container className="marginNextStep">
        <Row>
          <Col md={{ span: 1, offset: 1 }} >
            <span className="bullet">1</span>
          </Col>
          <Col md={{ span: 8, offset: 12 }}>
            <h2 className="step" >Download and setup Metamask. </h2>
            <a href="https://metamask.io/download.html" target="_blank" rel="noreferrer" className="button" disabled={(this.props.step !== 0)}>Download Metamask</a>
          </Col>
        </Row>
      </Container>)
  }
}

export default DownloadComponent
