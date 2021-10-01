import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Trans } from 'react-i18next'
import ExchangeCarousel from './ExchangeCarousel'
import exchanges from '../config/exchanges.json'

const isMainnet = process.env.REACT_APP_ENVIRONMENT_ID === '30'
class CarouselComponent extends Component {
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
            <h2 className="step" ><span className="bullet">5</span> {isMainnet ? <Trans>Choose your favourite exchange and operate with your tokens.</Trans> : <Trans>Go to RSK Faucet and obtain test tokens.</Trans> } </h2>
          </Row>
          <Row>
            <Col>
              {isMainnet ? <ExchangeCarousel exchanges={exchanges} disabled={this.props.disabled} /> : <button onClick={ () => { window.open('https://faucet.rsk.co/') } } target="_blank" rel="noreferrer" className="button" disabled={this.props.disabled} ><Trans>Get test RBTC</Trans></button> }
            </Col>
          </Row>

        </Row>
      </Container>
    )
  }
}

export default CarouselComponent
