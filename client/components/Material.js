import React, { Component, Fragment, useState, useEffect } from 'react';

const Material = ({ item }) => {
  console.log(item);

  return (
    <div style={{ background: 'lightblue' }}>
      <p>{item.name}</p>
      <p>{item.type}</p>
      <p> {item.purchase_link}</p>
    </div>
  );
};

export default Material;
