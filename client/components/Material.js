import React, { Component, Fragment, useState, useEffect } from 'react';

const Material = ({ item }) => {
  console.log(item);

  return (
    <div style={{ background: 'lightblue' }}>
      <h1>item</h1>
      <h4>My art work has used material name {item.name}</h4>
      <h5>My art work has used material type {item.name}</h5>
      <p>You man purchase my material here {item.purchase_link}</p>
    </div>
  );
};

export default Material;
