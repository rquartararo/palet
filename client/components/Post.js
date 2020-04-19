import React, { Component, Fragment, useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import postArr from './mockData'
import Material from './Material'
// import e from "express";

class Post extends Component {
  constructor(props) {
    super(props);

  }

  render() {

    let selectedPost = postArr.find(el => el.postId === this.props.match.params.postId)
    let materials = selectedPost.materialsUsed
    return (
      <div className="postContainer">
        <img className='artistImage' src={selectedPost.url}></img>
        <div className='artistName'>
          <h2>{selectedPost.name}</h2>
        </div>
        <div>
          {materials.map((item, i) => {
            return <Material key={i} item={item} />
          })}
        </div>
      </div >
    )
  }
}

export default Post;
