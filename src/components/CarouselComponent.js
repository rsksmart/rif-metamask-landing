import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Trans } from 'react-i18next'
import WalletCarousel from './WalletCarousel'
import wallets from '../config/wallets.json'

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
            <h2 className="step" ><span className="bullet">5</span><Trans>Choose your favourite exchange and operate with your tokens.</Trans> </h2>
          </Row>
          <Row>
            <Col>
              <WalletCarousel wallets={wallets} />
            </Col>
          </Row>

        </Row>
      </Container>
    )
  }
}

export default CarouselComponent