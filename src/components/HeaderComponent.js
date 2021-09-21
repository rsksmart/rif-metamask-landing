import React from 'react'
import {
  Navbar, Nav, Container, Image, NavItem, NavDropdown
} from 'react-bootstrap'
import { Trans, useTranslation } from 'react-i18next'
import rskLogo from '../img/logoColor.svg'

function transTitle (s) {
  const { t } = useTranslation()
  return t(s)
}

const HeaderComponent = ({ address, net }) =>
  <Container>
    <Navbar bg="white" expand="lg">
      <Navbar.Brand href="#"><Image className="rskLogo" src={rskLogo} /></Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll" className="justify-content-end">
        <Nav
          className="mr-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <NavDropdown title={transTitle('About')} id="navbarScrollingDropdown" className="headerDropdown">
            <NavDropdown.Item target="_blank" rel="noreferrer" href="https://github.com/rsksmart/rif-metamask-landing#how-to-add-my-tokens-to-the-list"><Trans>How to list your tokens</Trans></NavDropdown.Item>
            <NavDropdown.Item target="_blank" rel="noreferrer" href="https://github.com/rsksmart/rif-metamask-landing#how-to-show-my-tokens-by-default"><Trans>How to customize with your tokens</Trans></NavDropdown.Item>
            <NavDropdown.Item target="_blank" rel="noreferrer" href="https://github.com/rsksmart/rif-metamask-landing#readme"><Trans>Read more</Trans></NavDropdown.Item>
            <NavDropdown.Item target="_blank" rel="noreferrer" href="https://github.com/rsksmart/rif-metamask-landing"><Trans>Github repo</Trans></NavDropdown.Item>
          </NavDropdown>
        </Nav>

        {address && (
          <NavItem className="headerNet">
            {net}
          </NavItem>)}

        {address && (
          <NavItem className="headerAdress">
            {address}
          </NavItem>)}

      </Navbar.Collapse>
    </Navbar>
  </Container>

export default HeaderComponent
