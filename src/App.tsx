import React from 'react'
import './App.scss'
import {
  Container
} from 'react-bootstrap'
import MainComponent from './components/MainComponent'

function App () {
  return (
    <Container>
      <div className="App">
        <MainComponent />
      </div>
    </Container>
  )
}

export default App
