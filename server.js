var express = require('express');
var app = express();
//var path= require('path');
//app.use(express.static('public'));
//app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');
app.set('views', 'public');
app.get('/',(req,res) =>{

   res.render('index',{data: 'no'});
});
app.listen(4000);
