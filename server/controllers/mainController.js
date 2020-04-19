const fs = require('fs');
const path = require('path');
const pool = require('../db.js');

const mainController = {};

// ===========  Build all of mainController's methods below =======

mainController.grabAllData = (req, res, next) => {
  // Query the database to get all data from all tables
  next();
}

mainController.addPost = async (req, res, next) => {
  try {
    console.log(req.body);
    console.log(typeof req.body);
    // data will come into req.body as an object, filled with line 34-30 (working on table 'post' for now)
    const { user_id, artist_name, process, artist_page, image_src, materialList } = req.body;

    const createPost = await pool.query(
      'INSERT INTO post(user_id, artist_name, process, artist_page, image_src) VALUES($1, $2, $3, $4, $5);',
      [user_id, artist_name, process, artist_page, image_src]
    );

    console.log(createPost.fields)

    for (const material of materialList) {
      const { name, type, purchase_link } = material;
      const createMaterial = await pool.query(
        'INSERT INTO material(post_id, name, type, purchase_link) VALUES($1, $2, $3, $4);',
        [post_id, name, type, purchase_link]
      );
    }

    return next();
  } catch (error) {
    console.log(error);
    return next({
      log: 'Error in the addpost middleware',
      message: { error },
    })
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