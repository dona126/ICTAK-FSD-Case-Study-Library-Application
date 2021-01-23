const express = require('express');
const booksRouter = express.Router();



const Bookdata=require('../model/bookAndAuthorData');
function router(nav)
{ 
// var books=[
//     { 
//     title: 'Tom and Jerry',
//     author: 'Joseph Barbera', 
//     genre: 'Cartoon',
//     image1:"tom.jpeg"
//     },
//     {
//     title: 'Harry Potter',
//     author: 'J K Rowling', 
//     genre: 'Fantasy', 
//     image1: "harry.jpeg"
//     },
//     {    
//     title: 'Paathumayude Aadu',
//     author: 'Vaikom Muhammad Basheer',
//     genre: 'Drama',
//     image1: "basheer.jpeg"
        
//     }
// ]


booksRouter.get('/', function(req,res){
 Bookdata.find()
 .then(function(books){
    res.render("books",
    {
        nav,
        title:'Books',
        books //books array
    }
    );//passed as object
 })
});

booksRouter.get('/login', function(req,res){
       
    res.render("login",
    {
        nav,
        title:'Log In',
        
    }
    );//passed as object
 })



booksRouter.get('/:id', function(req,res){
    const id=req.params.id;

    Bookdata.findOne({_id:id}) 
    .then(function(book){
        res.render('book', {
        
            nav,
            title:'Book',
            book
        
        }
        );//passed as object
     })
    });

   

return booksRouter;
}//fn router ends

module.exports=router;//exporting to app.js













