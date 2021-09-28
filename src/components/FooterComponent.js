import React from 'react'
import {
  Container, Image, Col, Row
} from 'react-bootstrap'
import logo from '../img/powered_by.png'
import { Trans } from 'react-i18next'

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
                  <p><Trans>RIF enables broad interoperability and faster time-to-deployment, bridging the gap between blockchain technologies and their mass-market adoption.</Trans></p>
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
                      <a target="_blank" rel="noreferrer" href="http://www.rifos.org/assets/whitepapers/rif-whitepaper-en.pdf" ><Trans>Whitepaper</Trans></a>
                    </li>
                    <li>
                      <a target="_blank" rel="noreferrer" href="http://www.rifos.org/blog/" ><Trans>Blog</Trans></a>
                    </li>
                    <li>
                      <a target="_blank" rel="noreferrer" href="http://www.rifos.org/roadmap" ><Trans>Roadmap</Trans></a>
                    </li>
                    <li>
                      <a target="_blank" rel="noreferrer" href="https://github.com/riflabs" ><Trans>Github</Trans></a>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col md="4">
                <div className="footer-links">
                  <ul>
                    <li>
                      <a target="_blank" rel="noreferrer" href="http://www.rifos.org/faqs" ><Trans>FAQ´s</Trans></a>
                    </li>
                    <li>
                      <a target="_blank" rel="noreferrer" href="http://www.rifos.org/assets/guidelines/RIF_FullBrandGuidelines_En.pdf" ><Trans>Brand Guidelines</Trans></a>
                    </li>
                    <li>
                      <a target="_blank" rel="noreferrer" href="https://www.rsk.co/" className="medium"><Trans>RSK</Trans></a>
                    </li>
                    <li>
                      <a target="_blank" rel="noreferrer" href="https://www.iovlabs.org/" className="medium"><Trans>About IOVLabs</Trans></a>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col md="4">
                <div className="footer-links">
                  <ul>
                    <li>
                      <a target="_blank" rel="noreferrer" href="https://www.iovlabs.org/contact.html" className="medium"><Trans>Contact IOVLabs</Trans></a>
                    </li>
                    <li>
                      <a target="_blank" rel="noreferrer" href="http://www.rifos.org/terms-conditions" ><Trans>Terms & Conditions</Trans></a>
                    </li>
                    <li>
                      <a target="_blank" rel="noreferrer" href="http://www.rifos.org/privacy-policy" ><Trans>Privacy Policy</Trans></a>
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
              <Trans>Copyright</Trans>{` © ${new Date().getFullYear()} `}
              <Trans>RSK Labs. All rights reserved.</Trans>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  </footer>

export default FooterComponent
