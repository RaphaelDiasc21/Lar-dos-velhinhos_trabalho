const express = require('express');
const mysql = require('mysql');
const session = require('express-session');
const BodyParser = require('body-parser');
const helmet = require('helmet');
const app = express();

app.set('view engine','ejs');
app.use(BodyParser.json());
app.use(BodyParser.urlencoded());

const produto = require('./routes/produto');
const estoque = require('./routes/estoque');
const cadastro = require('./routes/cadastro');
const login = require('./routes/login');
const LoginService = require('./services/login');
global.message_about_estoque = null;
global.user_register = null;
app.use(express.static(__dirname + '/static'));
app.use(helmet());
app.use(session({
    secret:'5589-54',
    resave:true,
    saveUninitialized:true
}));
app.disable('x-powered-by');
app.post('/login-user',(req,res,next)=>{
    LoginService.loginUser(req.body.email, req.body.senha).then((response)=>{
    req.session.usuario = response[0].nome;
    res.redirect("/");
    })
});
app.use((req,res,next)=>{
    if((req.session.usuario == undefined) || (req.session.usuario == 'a')){
        req.session.usuario = 'a';
        console.log(req.session.usuario);
        res.render('login.ejs',{css:'main.css'});
    }else{
        console.log('passando');
        console.log(req.session.usuario);
        next();
    }
})
app.use("/",produto);
app.use("/",estoque);
app.use('/',cadastro);
app.use('/',login)

app.listen(3555,()=>{
    console.log("Running");
})