import React, { Component, Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import postArr from './mockData';
import Material from './Material';
import { getMainData } from './apiControl';
// import e from "express";

const Post = (props) => {
  const [mainData, setMainData] = useState([]);
  const [error, setError] = useState(false);

  const loadData = () => {
    getMainData().then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setMainData(data);
      }
    });
  };

  useEffect(() => {
    loadData();
  }, []);

  const postId = props.match.params.postId * 1;
  let selectedPost = mainData.find((el) => {
    return el.post_id === postId;
  });
  console.log(selectedPost);

  return (
    <div>
      <p>hello</p>
    </div>
    // <div className='postContainer'>
    //   {`this is the ` + console.log(selectedPost)}
    //   <img className='artistImage' src={selectedPost.image_src}></img>
    //   <div className='artistName'>
    //     <h2>{selectedPost.artist_name}</h2>
    //   </div>
    //   {/* <div>
    //     {materials.map((item, i) => {
    //       return <Material key={i} item={item} />;
    //     })}
    //   </div> */}
    //   <p className='process'>Process: {selectedPost.process}</p>
    // </div>
  );
};

export default Post;
