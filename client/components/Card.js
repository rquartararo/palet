import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ artifact }) => {
  return (
    <div>
      <p>{artifact.name}</p>
      <Link to={`/post/${artifact.postId}`}>
        <img className='artImage' src={artifact.url}></img>
      </Link>
    </div>
  );
};

export default Card;
