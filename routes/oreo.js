var express = require('express');
var router = express.Router();
const oreo_controller = require("../controllers/Oreo")

/* GET home page. */


router.get('/oreo', oreo_controller.oreo_view_all_Page ); 
module.exports = router; 

