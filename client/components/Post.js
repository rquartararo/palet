import React, { Component, Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Material from './Material';
import { getMainData, getPostData } from './apiControl';
// import e from "express";

//Hey Rachel, I am refactoring this post data into the correct method
const Post = (props) => {
  const [postData, setPostData] = useState({
    post_id: '',
    user_id: '',
    artist_name: '',
    process: '',
    artist_page: '',
    image_src: '',
    materialList: [],
  });

  const { materialList } = postData;

  const [error, setError] = useState(false);

  const loadData = () => {
    getPostData(props.match.params.postId).then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setPostData(data);
      }
    });
  };

  useEffect(() => {
    loadData();
  }, {});

  return (
    <div>
      <div className='postContainer'>
        <img src={postData.image_src} className='artistImage' />
        <div className='artistName'>
          <h2>{postData.artist_name}</h2>
          <p>Process: {postData.process}</p>
          {console.log(materialList)}
          {materialList.map((item, index) => {
            return <Material key={index} item={item} />;
          })}
          {/* {postData.materialList.map((i) => console.log(i))} */}
          {/* {console.log(typeof postData.materialList)} */}
        </div>
      </div>
    </div>
  );
};

export default Post;
