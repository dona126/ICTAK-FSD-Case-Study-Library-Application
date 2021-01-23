const express = require('express');
const nav=[
    {link:'/books', name: 'Books' },
    {link: '/authors', name:"Authors"},
    {link: '/login', name:"Add New Book"},
    {link: '/login', name:"Log In"},
    {link: '/signup', name:"Sign Up"}



];

const port =process.env.PORT || 5008;

const booksRouter = require('./src/routes/bookRoutes')(nav);
const authorsRouter = require('./src/routes/authorRoutes')(nav);
const loginRouter = require('./src/routes/loginRoutes')(nav);
const signupRouter = require('./src/routes/signupRoutes')(nav);
const addpageRouter = require('./src/routes/addpageRoutes')(nav);
// const updateRoutes = require('./src/routes/updateRoutes')(nav);
// const deleteRoutes = require('./src/routes/deleteRoutes')(nav);

// const addpageRouter = require('./src/routes/addpageRoutes');

//route handlers
const app = express();

app.use(express.urlencoded({extended:true}));

app.use('/books', booksRouter);
app.use('/authors', authorsRouter);
app.use('/login', loginRouter);
app.use('/signup',signupRouter);
app.use('/addpage',addpageRouter);
// app.use('/update',updateRoutes);
// app.use('/delete',deleteRoutes);


app.set('view engine', 'ejs'); 
app.set('views', __dirname+'/src/views');

app.use(express.static('./public'));

app.get('/',function(req, res){
    res.render('index',
    {
        nav,
        title:'House of Books'
    }
    );
});

app.listen(port,()=>{console.log("Server ready at port "+port)});

