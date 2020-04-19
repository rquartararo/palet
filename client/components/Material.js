import React, { Component, Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import postArr from './mockData';

const Material = ({ item }) => {
  console.log(item);
  return (
    <div>
      <div className='container'>
        <h2>This is made by {item.materialName}</h2>
        <p>{item.materialName}</p>
        <p>{item.materialType}</p>
      </div>
    </div>
  );
};

class List extends React.Component {
  render() {
    const friends = this.props.friends;

    return (
      <ul>
        {friends.map((friend) => (
          <li></li>
        ))}
      </ul>
    );
  }
}

ReactDOM.render(
  <List
    friends={[
      { id: 893, name: 'Mikenzi' },
      { id: 871, name: 'Cash' },
      { id: 982, name: 'Steven' },
      { id: 061, name: 'Kimmy' },
      { id: 117, name: 'Doug' },
    ]}
  />,
  document.getElementById('app')
);

export default Material;
