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
      },
      {
        id : 3,
        nama : "torik",
        alamat: "limo",
        umur: 20,
        nohp: "08223979",
      },
      {
        id : 4,
        nama : "miko",
        alamat: "tanah sereal",
        umur: 24,
        nohp: "0812108",
      },
      {
        id : 5,
        nama : "arie",
        alamat: "serua",
        umur: 22,
        nohp: "08192198",
      }
    ]
  }

  render() {
    return(
      <NavbarComponent />
    )
  }
}