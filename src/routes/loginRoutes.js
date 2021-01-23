const express = require('express');
const loginRouter = express.Router();

function router3(nav)
{ 
    
loginRouter.get('/', function(req,res){
    res.render("login",
    {
        nav,
        title:'Log In',
       
    }
    );//passed as object
});
loginRouter.get('/addpage', function(req,res){
    // const id=req.params.id;
    res.render("addpage",
    {
        title:'Add new book',
        
    }
    );//passed as object
});




return loginRouter;
}//fn router ends

module.exports=router3;//exporting to app.js


