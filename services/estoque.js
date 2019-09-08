const conn = require('../database/connection');

exports.getEstoque = ()=>{ return new Promise((resolve,reject)=>{
    conn.query("select produto.NOME, produto.DESCRICAO, estoque.QUANTIDADE FROM Produto as produto INNER JOIN Estoque as estoque ON produto.ID = estoque.ID_PRODUTO;",
     function(err,results){
        if(!err){
            resolve(results);
        }else{

            reject(err);
        }
    })
})
}

exports.getProductEstoque = (nome)=>{ return new Promise((resolve,reject)=>{
    conn.query("select produto.NOME, produto.DESCRICAO, estoque.QUANTIDADE FROM Produto as produto INNER JOIN Estoque as estoque ON produto.ID = estoque.ID_PRODUTO WHERE produto.NOME = ?",
    [nome],
     function(err,results){
        if(!err){
            resolve(results);
        }else{

            reject(err);
        }
    })
})
}
exports.insertEstoque = (nome,quantidade) =>{ return new Promise((resolve,reject)=>{
    conn.query("INSERT INTO Estoque(id_produto,quantidade)VALUES((SELECT id FROM Produto WHERE nome = ?),?)",
    [
        nome,
        quantidade
    ], function(err,results){
        if(!err){
            resolve(results);
        }else{

            reject(err);
        }
    })
})

}

exports.updateQuantity = (nome,quantidade) =>{ return new Promise((resolve,reject)=>{
    conn.query("update Estoque as estoque INNER JOIN Produto as produto ON estoque.ID_PRODUTO = produto.ID set estoque.QUANTIDADE = ? WHERE produto.NOME = ?",
    [
        quantidade,
        nome
    ], function(err,results){
        if(!err){
            resolve(results);
        }else{

            reject(err);
        }
    })
})

}

exports.deleteEstoque = (nome) =>{ return new Promise((resolve,reject)=>{
    console.log(nome);
    conn.query("DELETE Estoque FROM Estoque INNER JOIN Produto ON Produto.ID = Estoque.ID_PRODUTO WHERE Produto.NOME = ?",
    [
        nome
    ], function(err,results){
        if(!err){
            resolve(results);
        }else{

            reject(err);
        }
    })
})

}

exports.quantidadeEstoque = (nome) =>{ return new Promise((resolve,reject)=>{
    console.log(nome);
    conn.query("select estoque.QUANTIDADE FROM Produto as produto INNER JOIN Estoque as estoque ON produto.ID = estoque.ID_PRODUTO WHERE produto.NOME = ?;",
    [
        nome
    ], function(err,results){
        if(!err){
            resolve(results);
        }else{

            reject(err);
        }
    })
})

}