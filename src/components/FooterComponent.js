import React from 'react'
import {
  Container, Image, Col, Row
} from 'react-bootstrap'
import logo from '../img/powered_by.png'

const FooterComponent = () =>
  <footer id="footer">
    <div className="footer-top">
      <Container>
        <Row>
          <Col md="12">
            <Image src={logo} alt="RSK Logo" className="powered_by"/>
          </Col>
        </Row>
        <Row>
          <Col md="6">
            <Row>
              <Col md="7">
                <div className="footer-info">
                  <p>RIF enables broad interoperability and faster time-to-deployment, bridging the gap between blockchain technologies and their mass-market adoption.</p>
                </div>
              </Col>
              <Col md="5">
              </Col>
            </Row>
          </Col>
          <Col md="6">
            <Row>
              <Col md="4">
                <div className="footer-links">
                  <ul>
                    <li>
                      <a target="_blank" rel="noreferrer" href="http://www.rifos.org/assets/whitepapers/rif-whitepaper-en.pdf" >Whitepaper</a>
                    </li>
                    <li>
                      <a target="_blank" rel="noreferrer" href="http://www.rifos.org/blog/" >Blog</a>
                    </li>
                    <li>
                      <a target="_blank" rel="noreferrer" href="http://www.rifos.org/roadmap" >Roadmap</a>
                    </li>
                    <li>
                      <a target="_blank" rel="noreferrer" href="https://github.com/riflabs" >Github</a>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col md="4">
                <div className="footer-links">
                  <ul>
                    <li>
                      <a target="_blank" rel="noreferrer" href="http://www.rifos.org/faqs" >FAQ´s</a>
                    </li>
                    <li>
                      <a target="_blank" rel="noreferrer" href="http://www.rifos.org/assets/guidelines/RIF_FullBrandGuidelines_En.pdf" >Brand Guidelines</a>
                    </li>
                    <li>
                      <a target="_blank" rel="noreferrer" href="https://www.rsk.co/" className="medium">RSK</a>
                    </li>
                    <li>
                      <a target="_blank" rel="noreferrer" href="https://www.iovlabs.org/" className="medium">About IOVLabs</a>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col md="4">
                <div className="footer-links">
                  <ul>
                    <li>
                      <a target="_blank" rel="noreferrer" href="https://www.iovlabs.org/contact.html" className="medium">Contact IOVLabs</a>
                    </li>
                    <li>
                      <a target="_blank" rel="noreferrer" href="http://www.rifos.org/terms-conditions" >Terms & Conditions</a>
                    </li>
                    <li>
                      <a target="_blank" rel="noreferrer" href="http://www.rifos.org/privacy-policy" >Privacy Policy</a>
                    </li>
                  </ul>
                </div>
                <div className="social-links">
                  <a target="_blank" rel="noreferrer" href="https://twitter.com/rif_os" className="twitter"><i className="fab fa-twitter"></i></a>
                  <a target="_blank" rel="noreferrer" href="https://t.me/rif_os_community" className="telegram"><i className="fab fa-telegram"></i></a>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col className="copyright">
            <p >
              {`Copyright © ${new Date().getFullYear()} `}
                    RSK Labs. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  </footer>

export default FooterComponent
