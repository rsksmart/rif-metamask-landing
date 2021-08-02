import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
class DownloadComponent extends React.Component {
  constructor (props) {
    super(props)
    this.onChildComponentClick = props.onChildComponentClick.bind(this)
    props = { step: Number, disabled: Boolean }
  }

  onClickCalls () {
    window.open('https://metamask.io/download.html', '_blank')
  }

  render () {
    return (
      <Container className="marginNextStep">
        <Row>
          <Col xs={1} className="bulletRight" >
            <span className="bullet1">1</span>
          </Col>
          <Col>
            <h2 className="step" >Download and setup Metamask. </h2>
            <button className="button" disabled={(this.props.step !== 0) || (this.props.isMetaMaskInstalled())} onClick= {() => { this.onClickCalls() }}>Download Metamask</button>
          </Col>
        </Row>
      </Container>)
  }
}

export default DownloadComponent
