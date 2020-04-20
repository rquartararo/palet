import React, { Component, Fragment } from "react";
import { Link, withRouter } from 'react-router-dom';


class CreatePost extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      // <div className="formContainer">
      <form>
        <div className='form-group'>
          <label for='name'>Artist Name</label>
          <input type='text' />
        </div>

        <div className='form-group'>
          <label for='materials'>Artist Website Link</label>
          <input type='text' />
        </div>

        <div className='form-group'>
          <label for='materials'>Materials</label>
          <input type='text' />
        </div>

        <div className='form-group'>
          <label for='materials'>Materials Type</label>
          <input type='text' />
        </div>

        <div className='form-group'>
          <label for='materials'>Materials Link</label>
          <input type='text' />
        </div>

        <div className='form-group'>
          <label for='materials'>Art Image Link</label>
          <input type='text' />
        </div>

        <div className='form-group'>
          <label for='materials'>Process</label>
          <input type='text' />
        </div>

        <input type="submit" value="Submit" />

      </form>
    )
  }
}

export default CreatePost;