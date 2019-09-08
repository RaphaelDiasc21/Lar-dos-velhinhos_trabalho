const ProdutoService = require("../services/produto");

exports.index = (req,res,next) =>{
    ProdutoService.listAll().then((products)=>{
        res.render('index.ejs',{products:products, css:"produtos.css"});
    })

}

exports.store = (req,res,next) =>{
    let nome = req.body.nome;
    let desc = req.body.description;
    ProdutoService.store(nome,desc);

    res.redirect("/produto");
}