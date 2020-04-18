import React, { Component, Fragment } from "react";
import { Link } from 'react-router-dom';

class Post extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log('inside the post')

    return (
      <div>
        <h2>Yo YO Yo</h2>
      </div>
    )
  }
}

export default Post;
