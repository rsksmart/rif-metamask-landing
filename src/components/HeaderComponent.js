import React from 'react'
import {
  Navbar, Nav, Container, Image, NavItem, NavDropdown
} from 'react-bootstrap'
import rskLogo from '../img/logoColor.svg'

class HeaderComponent extends React.Component {
  render () {
    console.log(this.props)

    return (
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
                <NavDropdown.Item target="_blank" rel="noreferrer" href="https://www.iovlabs.org/">About IOVLabs</NavDropdown.Item>
                <NavDropdown.Item target="_blank" rel="noreferrer" href="https://www.rsk.co/">RSK</NavDropdown.Item>
                <NavDropdown.Item target="_blank" rel="noreferrer" href="http://www.rifos.org/assets/whitepapers/rif-whitepaper-en.pdf">Whitepaper</NavDropdown.Item>
              </NavDropdown>
            </Nav>

            {this.props.address && (
              <NavItem className="headerNet">
                {this.props.net}
              </NavItem>)}

            {this.props.address && (
              <NavItem className="headerAdress">
                {this.props.address}
              </NavItem>)}

          </Navbar.Collapse>
        </Navbar>
      </Container>
    )
  }
}

export default HeaderComponent
