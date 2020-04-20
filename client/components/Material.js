import React, { Component, Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import postArr from './mockData';

const Material = ({ item }) => {
  console.log(item);
  return (
    <div className='boxed' style={{ border: '1px solid black' }}>
      <h4>Name: {item.materialName}</h4>
      <p>Type: {item.materialType}</p>
      <p>Buy here: {item.materialLink}</p>
    </div>
  );
};

export default Material;
