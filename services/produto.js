const conn = require('../database/connection');

exports.store = (nome,descricao)=>{conn.query("insert into Produto(nome,descricao)values(?,?)",
[
    nome,
    descricao
], (err,results)=>{
    if(err){
        console.log(err);
    }else{
        console.log(results);
    }
})}

exports.listAll = ()=>{ return new Promise((resolve,reject)=>{
    conn.query("SELECT * FROM Produto",
    (err,rows)=>{
        if(err){
            reject(err);
        }else{
            resolve(rows);
        }
      })
  })
}
