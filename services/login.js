const con = require('../database/connection');

exports.loginUser = (email,senha) =>{ return new Promise((resolve,reject)=>{
        con.query('SELECT nome, email FROM Usuario WHERE email = ? AND senha = ?',
        [
            email,
            senha
        ],function(err, result){
            if(!err){
                resolve(result);
            }else{
                reject(err);
            }
        })
    })
}