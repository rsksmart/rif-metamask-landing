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
          <Navbar.Text id="basic-navbar-nav" className="justify-content-right">
            <Nav >
              <NavItem className="headerAdress">
                {this.props.address}
              </NavItem >
              <NavItem className="headerNet">
                {this.props.net}
              </NavItem>
            </Nav>
          </Navbar.Text>
        </Container>
      </Navbar>
    )
  }
}

export default HeaderComponent
