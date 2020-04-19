import React, { Component, Fragment } from "react";
import { Link, withRouter } from 'react-router-dom';


class NavBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Fragment>
        <Link className='nav-link' to="/"><button className='logo'>Home</button></Link>
        <Link className='nav-link-2' to="/createPost"><button className='createPost'>Create Post</button></Link>
      </Fragment >
    )
  }
}

export default NavBar;
