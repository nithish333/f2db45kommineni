var express = require('express');
var router = express.Router();
const oreo_controller = require("../controllers/Oreo")

/* GET home page. */
const secured = (req, res, next) => { 
    if (req.user){ 
      return next(); 
    } 
    req.session.returnTo = req.originalUrl; 
    res.redirect("/login"); 
  } 


router.get('/oreo', oreo_controller.oreo_view_all_Page ); 

router.get('/detail', oreo_controller.oreo_view_one_Page)

router.get('/create',secured, oreo_controller.oreo_create_Page); 


router.get('/update',secured, oreo_controller.oreo_update_Page);


router.get('/delete',secured, oreo_controller.oreo_delete_Page);
module.exports = router; 

