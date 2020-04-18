// this router will handle requests pertaining to posts 
const express = require('express');
const router = express.Router();

const mainController = require('../controllers/mainController.js')

// ============  DEFINE ROUTER HANDLER BELOW ============
// **This is different from server.js's 'define endpoint/route handler', since they route requests to middleware


// ======================================================
module.exports = router;