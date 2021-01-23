const express = require('express');
const signupRouter = express.Router();

function router4(nav)
{ 

signupRouter.get('/', function(req,res){
    res.render("signup",
    {
        nav,
        title:'Sign Up',
        
    }
    );//passed as object
});
signupRouter.get('/login', function(req,res){
    const id=req.params.id;
    res.render("login",
    {
        nav,
        title:'Log In',
        
    }
    );//passed as object
});
return signupRouter;
}//fn router ends


module.exports=router4;//exporting to app.js


