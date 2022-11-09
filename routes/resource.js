var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var oreo_controller = require('../controllers/Oreo'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/', api_controller.api); 
 
/// oreo ROUTES /// 
 
// POST request for creating a oreo.  
router.post('/oreos', oreo_controller.oreo_create_post); 
 
// DELETE request to delete oreo. 
router.delete('/oreos/:id', oreo_controller.oreo_delete); 
 
// PUT request to update oreo. 
router.put('/oreos/:id', oreo_controller.oreo_update_put); 
 
// GET request for one oreo. 
router.get('/oreos/:id', oreo_controller.oreo_detail); 
 
// GET request for list of all oreo items. 
router.get('/oreos', oreo_controller.oreo_list); 
 
module.exports = router; 
 