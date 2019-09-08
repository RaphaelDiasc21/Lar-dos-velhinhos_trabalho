const con = require('../database/connection');

exports.inserUser = (nome,email,senha) =>{ return new Promise((resolve,reject)=>{   
    con.query("INSERT INTO Usuario(nome,email,senha)VALUES(?,?,?)",
    [
        nome,
        email,
        senha
    ],
    function(err,result){
        if(!err){
            user_register = "usuario "+nome+" cadastrado no sistema";
            resolve(user_register);
        }else{
            reject(err);
        }
    })
})

}