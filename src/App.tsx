import React from 'react'
import './App.scss'
import {
  Container
} from 'react-bootstrap'
import MainComponent from './components/MainComponent'
import FooterComponent from './components/FooterComponent'

function App () {
  return (
    <Container>
      <div className="App">
        <MainComponent />
        <FooterComponent/>
      </div>
    </Container>
  )
}

export default App
