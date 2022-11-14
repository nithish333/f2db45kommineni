var express = require('express');
var router = express.Router();
const oreo_controller = require("../controllers/Oreo")

/* GET home page. */


router.get('/oreo', oreo_controller.oreo_view_all_Page ); 

router.get('/detail', oreo_controller.oreo_view_one_Page)

router.get('/create', oreo_controller.oreo_create_Page); 

router.get('/update', oreo_controller.oreo_update_Page);

router.get('/delete', oreo_controller.oreo_delete_Page);
module.exports = router; 

