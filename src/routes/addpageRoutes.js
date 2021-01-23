const express = require('express');
const addpageRouter = express.Router();

const Bookdata =require('../model/bookAndAuthorData');

function router5(nav)
{ 
    
addpageRouter.get('/index', function(req,res){
    res.render('index',
    {
        nav,
        title:'House of Books'
    }
    );
});

addpageRouter.post('/add', function(req,res){
    var item = {
        title: req.body.title,
        author: req.body.author,       
        life: req.body.life, 
        genre: req.body.genre,       
        image1: req.body.image1,
        image2: req.body.image2
    }
    var book=Bookdata(item);//item passes

    book.save();
    res.redirect('/books');

    // res.send('gggggggg');
});


return addpageRouter;
}//fn router ends

module.exports=router5;//exporting to app.js


