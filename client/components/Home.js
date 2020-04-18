import React, { useState, useEffect, Component } from "react";
import Card from './Card'

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    const imageArr = [
      {
        postId: "rachel1",
        name: 'Rachel',
        url: 'https://i.pinimg.com/originals/a2/47/8f/a2478ff279ba9d34aa93a4ac5f119d22.jpg'
      },
      {
        postId: 'wenfei2',
        name: 'Wenfei',
        url: 'https://i.pinimg.com/originals/a2/47/8f/a2478ff279ba9d34aa93a4ac5f119d22.jpg'
      },
      {
        postId: 'jimmy3',
        name: 'Jimmy',
        url: 'https://i.pinimg.com/originals/a2/47/8f/a2478ff279ba9d34aa93a4ac5f119d22.jpg'
      }
    ]

    return (
      <div>
        <div className="mainContainer">
          {imageArr.map((artifact, i) => (
            < Card key={i} artifact={artifact} />
          ))}
        </div>
      </div >
    )
  }
}

export default Home;