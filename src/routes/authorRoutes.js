const express = require('express');
const authorsRouter = express.Router();

const Bookdata=require('../model/bookAndAuthorData');

function router2(nav)
{ 
// var authors=[
//     { 
//     title: 'Joseph Barbera',
//     life: '1911 - 2006', 
//     genre: 'Cartoon',
//     img:"barbera.jpeg"
//     },
//     {
//     title: 'J K Rowling',
//     life: '1965 - ', 
//     genre: 'Fantasy', 
//     img: "jk.jpeg"
//     },
//     {    
//     title: 'Vaikom Muhammad Basheer',
//     life: '1908 - 1994',
//     genre: 'Drama',
//     img: "basheerpic.jpeg"
        
//     }
// ]
authorsRouter.get('/', function(req,res){
    Bookdata.find()
    .then(function(authors){
       res.render("authors",
       {
           nav,
           title:'Authors',
           authors //books array
       }
       );//passed as object
    })
   });

authorsRouter.get('/:id', function(req,res){
    const id=req.params.id;
    Bookdata.findOne({_id:id}) 
    .then(function(author){
        res.render('author', {
        
            nav,
            title:'Author',
            author
        
        }
        );//passed as object
     })
    });

     
    
return authorsRouter;
}//fn router ends

module.exports=router2;//exporting to app.js