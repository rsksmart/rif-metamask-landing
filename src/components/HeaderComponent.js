import React from 'react'
import {
  Navbar, Nav, Container, Image, NavItem, NavDropdown
} from 'react-bootstrap'
import rskLogo from '../img/logoColor.svg'

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
          <NavDropdown title="About" id="navbarScrollingDropdown" className="headerDropdown">
            <NavDropdown.Item target="_blank" rel="noreferrer" href="https://www.iovlabs.org/">How to list your tokens</NavDropdown.Item>
            <NavDropdown.Item target="_blank" rel="noreferrer" href="https://www.iovlabs.org/">How to customize with your tokens</NavDropdown.Item>
            <NavDropdown.Item target="_blank" rel="noreferrer" href="https://www.iovlabs.org/">Read more</NavDropdown.Item>
            <NavDropdown.Item target="_blank" rel="noreferrer" href="https://www.iovlabs.org/">Github repo</NavDropdown.Item>
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
