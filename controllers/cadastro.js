const UserService = require('../services/cadastro');

exports.index = (req,res,next)=>{
    let message_register_user = user_register;
    res.render('cadastro.ejs',{css:'cadastro.css',register_status:message_register_user});
}
exports.insertUser = (req,res,next)=>{
    UserService.inserUser(req.body.nome,req.body.email,req.body.senha).then((response)=>{
        res.redirect("/");
    }).catch((err)=>{
        console.log(err);
        let errMessage = err.sqlMessage.split(" ");
        if(errMessage[0] == 'Duplicate'){
            user_register = "E-mail ja está em uso";
            res.redirect('/cadastro');
        }
    })
}