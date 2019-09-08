const LoginService = require('../services/login');
const session = require('express-session');

exports.index = (req,res,next)=>{
    res.render('login.ejs',{css:"main.css"});
}

exports.loginUser = (req,res,next)=>{
    LoginService.loginUser(req.body.email, req.body.senha).then((response)=>{
        console.log(response);
        if((response.length > 0) || (response != undefined)){
            req.session.usuario = response[0].nome;
            res.redirect('/');
        }
    }).catch((err)=>{
        console.log(err);
        res.redirect('/login')
    })
}

exports.logout = (req,res,next) =>{
    req.session.destroy();
    res.redirect('/login');
}