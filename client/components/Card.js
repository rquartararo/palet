import React from 'react'

const Card = ({ artifact }) => {
  return (
    <div>
      <p>{artifact.name}</p>
      <img className='artImage' src={artifact.url}></img>
    </div>
  )
}

export default Card;
