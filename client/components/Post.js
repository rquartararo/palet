import React, { Component, Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Material from './Material';
import { getMainData, getPostData } from './apiControl';

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
    //renders post data and materials components
    <div>
      <div className='postContainer'>
        <img src={postData.image_src} className='artistImage' />
        <div className='postInfo'>
          <h2>{postData.artist_name}</h2>
          <p>Website: {postData.artist_page}</p>
          <p>Process: {postData.process}</p>
        </div>
        <h4> Materials Used</h4>
        {materialList.map((item, index) => {
          return <Material key={index} item={item} />;
        })}
      </div>
    </div>
  );
};

export default Post;
