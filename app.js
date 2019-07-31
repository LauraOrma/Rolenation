const express= require('express');
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection');

const characterRouter = require ('./src/routes/character')
const indexRouter = require ('./src/routes/index')
const principalRouter = require ('./src/routes/principal')


const app = express();

app.set('port', process.env.PORT || 3030 );

app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, 'src/views'));

app.use(morgan('dev'));

app.use(myConnection(mysql, {
    host:'localhost',
    user:'root',
    password:'1234',
    port:3306,
    database :'onlinerole'
 }));

app.use(express.urlencoded({extended:false}))

app.use('/', principalRouter)
app.use('/profile', indexRouter)
app.use('/character', characterRouter);

app.use(express.static(path.join(__dirname, 'src/public')));

app.listen(app.get('port'), () =>{
    console.log('Funciona! 3030')
 });