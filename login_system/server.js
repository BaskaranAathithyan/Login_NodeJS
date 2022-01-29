const express=require('express');
const path=require("path");
const app=express();
const bodyparser=require("body-parser");
const session=require("express-session");


const port= process.env.PORT || 3000;

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}))

app.set('view engine','ejs');

//load static assest
app.use('/static',express.static(path.join(__dirname,'public')))


app.use(session({
    secret:'secret',
    resave:false,
    saveUninitializeed:true
}))

//home route
app.get('/',(req,res) => {
    res.render('base',{title:"login system"});
});

app.listen(port, () =>{
    console.log("started");
})