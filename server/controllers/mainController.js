const fs = require('fs');
const path = require('path');
const pool = require('../db.js');

const mainController = {};

// ===========  Build all of mainController's methods below =======

mainController.grabAllData = (req, res, next) => {
  // Query the database to get all data from all tables

  next();
}

mainController.getMainData = async (req, res, next) => {
  // Get post_id and image_src of each post in the database
  try {
    const mainData = await pool.query(
      'SELECT post_id, image_src FROM post;',
    );
    res.locals.mainData = mainData.rows;
    return next();
    
  } catch (error) {
    return next({
      message: 'Error in getMainData middleware',
      log: {error},
    });
  }
}

mainController.getPostData = async (req, res, next) => {
  try {
    // Store the id used to query for specific post/ material data
    const id = req.query.id;
    // Get a list of materials with matching post_id
    const materialList = await pool.query(
      'SELECT * FROM material WHERE post_id = $1;',
      [id]
    );
    // Get row from post table with matching post_id
    const post = await pool.query(
      'SELECT * FROM post WHERE post_id = $1;',
      [id]
    );
    // Add material list to post object
    const postObject = post.rows[0];
    postObject.materialList = materialList.rows;
    // Pass post object to response
    res.locals.postObject = postObject;
    return next();    

  } catch (error) {
    return next({
      message: 'Error in get post middleware',
      log: {error},
    });
  }
}

mainController.addPost = async (req, res, next) => {
  // Add a post to the database
  try {
    // data will come into req.body as an object, filled with line 34-30 (working on table 'post' for now)
    const { user_id, artist_name, process, artist_page, image_src, materialList } = req.body;
    const createPost = await pool.query(
      'INSERT INTO post(user_id, artist_name, process, artist_page, image_src) VALUES($1, $2, $3, $4, $5) RETURNING post_id;',
      [user_id, artist_name, process, artist_page, image_src]
    );
    // Get the post_id of the post that was just created
    const post_id = createPost.rows[0].post_id;
    // Using that post_id, add new materials to the material table with a link to the new post
    for (const material of materialList) {
      const { name, type, purchase_link } = material;
      const createMaterial = await pool.query(
        'INSERT INTO material(post_id, name, type, purchase_link) VALUES($1, $2, $3, $4);',
        [post_id, name, type, purchase_link]
      );
    }
    return next();

  } catch (error) {
    return next({
      log: 'Error in the addpost middleware',
      message: { error },
    })
  }
}

mainController.updatePost = async (req, res, next) => {
  // Edit a post in the database 
  const { user_id, artist_name, process, artist_page, image_src, post_id } = req.body

  try {
    const updatePost = await pool.query(
      'UPDATE post SET user_id = $1, artist_name = $2, process = $3, artist_page = $4, image_src = $5 WHERE post_id = $6;',
      [user_id, artist_name, process, artist_page, image_src, post_id]
    );
    res.json(`Post was updated post_id: ${post_id}`);
    
  } catch (error) {
    return next({
      log: 'Error in the updatePost middleware',
      message: { error },
    });
  }
}

mainController.deletePost = async (req, res, next) => {
  // Delete a post in the database 
  try {
    const { id } = req.query;

    const deletePost = await pool.query(
      'DELETE FROM post WHERE post_id = $1;', //need to delete data from TABLE materialList as well
      [id]
    );
    const deleteMaterial = await pool.query(
      'DELETE FROM material WHERE post_id = $1;', //need to delete data from TABLE materialList as well
      [id]
    );
    res.json('Post was deleted, along with the following: user_id, artist_name, process, artist_page, image_src')

  } catch (error) {
    return next({
      log: 'Error in the deletePost middleware',
      message: { error },
    });
  }
}

// ======= Controllers below for add, edit, and remove a single material from TABLE 'material' 
// from the materialList property 

mainController.addMaterial = async (req, res, next) => {
  try {
    const { name, type, purchase_link, post_id } = req.body;
    
    const addMaterial = await pool.query(
    'INSERT INTO material (name, type, purchase_link, post_id) VALUES($1, $2, $3, $4);',
    [name, type, purchase_link, post_id]
    );
    return next();
    
  } catch (error) {
    return next({
      log: 'Error in the addedMaterial middleware',
      message: { error },
    });
  }
}

mainController.updateMaterial = async (req, res, next) => {
  try {
    const { name, type, purchase_link, material_id } = req.body;
    
    const updateMaterial = await pool.query(
      'UPDATE material SET name = $1, type = $2, purchase_link = $3 WHERE material_id = $4;',
      [name, type, purchase_link, material_id]
    );
    return next();

  } catch (error) {
    return next({
      log: 'Error in the updateMaterial middleware',
      message: { error },
    });
  }
}

mainController.deleteMaterial = async (req, res, next) => {
  try {
    const { id } = req.query;

    const deleteMaterial = await pool.query(
      'DELETE FROM material WHERE material_id = $1;',
      [id]
    );
    return next();
    
  } catch (error) {
    return next({
      log: 'Error in the deleteMaterial middleware',
      message: { error },
    });
  }
}

// ================================================================
module.exports = mainController;

/*
CREATE TABLE post (
  post_id SERIAL PRIMARY KEY,
  user_id INTEGER,
  artist_name VARCHAR(255),
  process VARCHAR(255),
  artist_page VARCHAR(255),
  image_src VARCHAR(255)
);

CREATE TABLE user (
  user_id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  artist_page VARCHAR(255)
);

CREATE TABLE material (
  material_id SERIAL PRIMARY KEY,
  post_id INTEGER,
  name VARCHAR(255),
  type VARCHAR(255),
  purchase_link VARCHAR(255)
);

*/

/*
MODEL FROM JIMMY'S SOLO PROJECT -- create an action (post request for our to do list)

app.post('/createaction', async (req, res) => {

  try {
    const { description } = req.body; //const description = req.body.description

    const createAction = await pool.query(
      'INSERT INTO actionplan (description) VALUES($1) RETURNING * ',
      [description]
    );
    res.json(createAction.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
})
*/