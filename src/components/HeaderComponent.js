import React from 'react'
import {
  Navbar, Nav, Container, Image, NavItem
} from 'react-bootstrap'
import rskLogo from '../img/logoColor.svg'

class HeaderComponent extends React.Component {
  render () {
    console.log(this.props)

    return (
      <Navbar bg="white" expand="lg" className="justify-content-right" >
        <Container>
          <Image className="rskLogo" src={rskLogo} />
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="justify-content-right">
              <NavItem>
                {this.props.address}
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
  }
}

export default HeaderComponent
