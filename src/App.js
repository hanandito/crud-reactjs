import React, { Component } from 'react'
import NavbarComponent from './components/NavbarComponent'

export default class App extends Component {
  state = {
    title : "hanandev",
    users : [
      {
        id : 1,
        nama : "kafir",
        alamat: "Pekayon",
        umur: 24,
        nohp: "08111111",
      },
      {
        id : 2,
        nama : "rijal",
        alamat: "pondok bamboe",
        umur: 88,
        nohp: "0812101010",
      }
    ]
  }

  render() {
    return(
      <NavbarComponent />
    )
  }
}