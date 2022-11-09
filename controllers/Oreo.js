var Oreo = require('../models/Oreo'); 
 
// List of all Costumes 
exports.oreo_list = function(req, res) { 
    res.send('NOT IMPLEMENTED: Oreo list'); 
}; 
 
// for a specific Costume. 
exports.oreo_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: Oreo detail: ' + req.params.id); 
}; 
 
// Handle Costume create on POST. 
exports.oreo_create_post = function(req, res) { 
    res.send('NOT IMPLEMENTED: oreo create POST'); 
}; 
 
// Handle oreo delete form on DELETE. 
exports.oreo_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: oreo delete DELETE ' + req.params.id); 
}; 
 
// Handle oreo update form on PUT. 
exports.oreo_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: oreo update PUT' + req.params.id); 
}; 