import React, { useState, useEffect, Component } from "react";
import MainContainer from './MainContainer'
import Card from './Card'

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    const imageArr = [
      {
        name: 'Rachel',
        url: 'https://i.pinimg.com/originals/a2/47/8f/a2478ff279ba9d34aa93a4ac5f119d22.jpg'
      },
      {
        name: 'Wenfei',
        url: 'https://i.pinimg.com/originals/a2/47/8f/a2478ff279ba9d34aa93a4ac5f119d22.jpg'
      },
      {
        name: 'Jimmy',
        url: 'https://i.pinimg.com/originals/a2/47/8f/a2478ff279ba9d34aa93a4ac5f119d22.jpg'
      }
    ]

    return (
      <div>
        <MainContainer className="container-fluid">
          <div className="row">
            {imageArr.map((artifact, i) => (
              < Card key={i} artifact={artifact} />
            ))}
          </div>
        </MainContainer>
      </div >
    )
  }
}

export default Home;