import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
class DownloadComponent extends React.Component {
  constructor (props) {
    super(props)
    this.onChildComponentClick = props.onChildComponentClick.bind(this)
    props = { step: Number, disabled: Boolean }
  }

  render () {
    return (
      <Container className="marginNextStep">
        <Row>
          <Col md={{ span: 1, offset: 1 }} className="bulletRight" >
            <span className="bullet1">1</span>
          </Col>
          <Col md={{ span: 8, offset: 12 }}>
            <h2 className="step" >Download and setup Metamask. </h2>
            <a href="https://metamask.io/download.html" target="_blank" rel="noreferrer" className="button" disabled={(this.props.step !== 0) || (this.props.isMetaMaskInstalled())}>Download Metamask</a>
          </Col>
        </Row>
      </Container>)
  }
}

export default DownloadComponent
