const fs = require('fs');
const path = require('path');
const pool = require('./db.js');

const mainController = {};

// ===========  Build all of mainController's methods below =======

// grab all data from each row (primary/key) of the TABLE post

// grab all images (i.e. image_src) from TABLE post and primary keys/id's

// edit/update row or replace data in that row (i.e. for a single post) in the TABLE post 

// remove a row (i.e. delete a single post) in the TABLE post

// ================================================================
module.exports = mainController;



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