// this router will handle requests pertaining to posts 
const express = require('express');
const router = express.Router();

const mainController = require('../controllers/mainController.js')

// ============  DEFINE ROUTER HANDLER BELOW ============
// **This is different from server.js's 'define endpoint/route handler', since they route requests to middleware

// grab all data from each post (SELECT EVERYTHING FROM EACH TABLE, DISPLAY IT)
router.get('/all',
  // mainController.grabAllData,
  (req, res) => {
    console.log(res); // UNDER CONSTRUCTION: REPLACE THIS W/ ANOTHER CODE
  }
);
// grab all data from one post (primary/key) of the TABLE post (SELECT ALL DATA FROM A SINGLE ROW IN A TABLE CALLED 'POSTS')
router.get('/post',
  mainController.getPostData,
  (req, res) => {
    res.status(200).json(res.locals.postObject);
  }
);
// grab all images (i.e. image_src) from TABLE post and primary keys/id's (SELECT ALL ID AND IMG_SRC FROM TABLE 'POSTS')
router.get('/main',
  mainController.getMainData,
  (req, res) => {
    res.status(200).json(res.locals.mainData);
  }
);
// add post to database
router.post('/post',
  mainController.addPost,
  (req, res) => {
    res.sendStatus(200);
  }
);
// edit/update row or replace data in that row (i.e. for a single post) in the TABLE post 
router.put('/',
  // mainController.updatePost,
  (req, res) => {

  }
);
// remove a row (i.e. delete a single post) in the TABLE post
router.delete('/',
  // mainController.deletePost,
  (req, res) => {

  }
);
// ======================================================
module.exports = router;


/* TABLE WILL CONSIST OF THE FOLLOWING:

TABLE NAME: 'POSTS'
-id
-name of the artist
-process/description of how to make the art stuff
-materials to make artwork --> this will link to another table
-URL link to artist's page
-URL link to image source

TABLE NAME: MATERIALS
-id
-name of the material
-type of material (e.g. paint)
-link to purchase the material

*/