var Oreo = require('../models/Oreo'); 
 
// List of all Costumes 
exports.oreo_list = async function(req, res) { 
    try{ 
        theOreos = await Oreo.find(); 
        res.send(theOreos); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}
 
// for a specific Costume. 
exports.oreo_detail =async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await Oreo.findById(req.params.id) 
        console.log(result)
        res.send(result) 
        // res.write(result)
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
}; 
 
exports.oreo_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new Oreo(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"costume_type":"goat", "cost":12, "size":"large"} 
    document.flavour = req.body.flavour; 
    document.manufacturerlocation = req.body.manufacturerlocation; 
    document.netweight = req.body.netweight; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 

 
// Handle oreo delete form on DELETE. 
exports.oreo_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: oreo delete DELETE ' + req.params.id); 
}; 
 
// Handle oreo update form on PUT. 
exports.oreo_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await Oreo.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.flavour)  
               toUpdate.flavour = req.body.flavour; 
        if(req.body.manufacturerlocation) toUpdate.manufacturerlocation = req.body.manufacturerlocation; 
        if(req.body.netweight) toUpdate.netweight = req.body.netweight; 
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`); 
    } 
}; 

exports.oreo_view_all_Page = async function(req, res) { 
    try{ 
        theOreos = await Oreo.find(); 
        res.render('oreo', { title: 'Oreo Search Results', results: theOreos }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 