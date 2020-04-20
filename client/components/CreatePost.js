import React, { Component, Fragment, useState } from "react";
import { Link, withRouter } from 'react-router-dom';


const CreatePost = () => {

  const [newPostInfo, setNewPostInfo] = useState({
    artist_name: "",
    process: "",
    artist_page: "",
    image_src: "",
    materialList: [],
    material_name: "",
    material_type: "",
    material_link: "",
  });

  // const [materialList, setMaterialList] = useState([])

  const { artist_name, process, artist_page, image_src, materialList, material_name, material_type, material_link } = newPostInfo;

  console.log(newPostInfo)

  // onSubmitForm = async (e) => {
  // e.preventDefault();
  // try {
  //   // fetching data 
  //   const body = {}
  // } catch (error) {

  // }
  // }


  const handleChange = (key, event) => {
    setNewPostInfo({
      ...newPostInfo,
      [key]: event.target.value,
    });
  }

  const submitMaterial = (event) => {
    event.preventDefault();
    let newMaterial = {
      name: material_name,
      type: material_type,
      purchase_link: material_link,
    };
    setNewPostInfo({
      ...newPostInfo,
      materialList: [...materialList, newMaterial],
      material_type: '',
      material_name: '',
      material_link: '',
    });
  }

  console.log(materialList)

  return (
    <form /*onSubmit={onSubmitForm}*/>
      <div className='form-group'>
        <label for='name'>Artist Name</label>
        <input type='text' value={artist_name} onChange={e => handleChange('artist_name', e)} />
      </div>

      <div className='form-group'>
        <label for='materials'>Artist Website Link</label>
        <input type='text' value={artist_page} onChange={e => handleChange('artist_page', e)} />
      </div>

      <form className='materialsForm' onSubmit={submitMaterial}>
        <div className='form-group'>
          <label for='materials'>Materials</label>
          <input type='text' value={material_name} onChange={e => handleChange('material_name', e)} />
        </div>

        <div className='form-group'>
          <label for='materials'>Materials Type</label>
          <input type='text' value={material_type} onChange={e => handleChange('material_type', e)} />
        </div>

        <div className='form-group'>
          <label for='materials'>Materials Link</label>
          <input type='text' value={material_link} onChange={e => handleChange('material_link', e)} />
        </div>

        <input type="submit" value="Add Material" />
      </form>

      <div className='form-group'>
        <label for='materials'>Art Image Link</label>
        <input type='text' value={image_src} onChange={e => handleChange('image_src', e)} />
      </div>

      <div className='form-group'>
        <label for='materials'>Process</label>
        <input type='text' value={process} onChange={e => handleChange('process', e)} />
      </div>

      <input type="submit" value="Submit" />

    </form>
  )
}

export default CreatePost;