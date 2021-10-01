import React, { useState } from 'react'
import propTypes from 'prop-types'
import { Carousel, Row, Col } from 'react-bootstrap'

const ExchangeCarousel = ({ exchanges }) => {
  const [index, setIndex] = useState(0)

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex)
  }

  /**
   * Group the exchanges into 3s:
   */
  const exchangesByThree = []
  exchanges.forEach((exchange, i) => {
    if (i % 3 === 0) {
      // new set
      exchangesByThree[Math.floor(i / 3)] = [exchange]
    } else {
      exchangesByThree[Math.floor(i / 3)].push(exchange)
    }
  })

  const SingleItem = (item) => {
    const { name, link, image } = item
    return (
      <Col key={name}>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <div className="image-container" style={{ backgroundImage: `url(${image})` }} />
          <p>{name}</p>
        </a>
      </Col>
    )
  }

  return (
    <div className="supported-exchanges">
      <Carousel activeIndex={index} onSelect={handleSelect} controls className="exchange-carousel">
        {exchangesByThree.map(exchangeGroup => (
          <Carousel.Item key={exchangeGroup[0].name}>
            <Row>
              {exchangeGroup.map(exchange => SingleItem(exchange))}
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  )
}

ExchangeCarousel.propTypes = {
  exchanges: propTypes.arrayOf(propTypes.shape({
    name: propTypes.string.isRequired,
    link: propTypes.string.isRequired,
    image: propTypes.string.isRequired
  })).isRequired
}

export default ExchangeCarousel
