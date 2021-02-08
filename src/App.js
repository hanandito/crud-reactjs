import React, { Component } from 'react'
import NavbarComponent from './components/NavbarComponent'

export default class App extends Component {
  state = {
    title : "hanandev"
  }
  render() {
    return(
      <NavbarComponent />
    )
  }
}