const produto_pesquisar = document.getElementById("produto_pesquisar");

produto_pesquisar.addEventListener("change",function(e){
    let xhr = new XMLHttpRequest();

xhr.open('GET','http://localhost:3555/pesquisar-produto/'+e.target.value,true);
    xhr.onload = function(){
        let response = JSON.parse(xhr.responseText);
        document.getElementById("nome_produto").value = response[0]["NOME"];
        document.getElementById("descricao_produto").value = response[0]["DESCRICAO"];
        document.getElementById("quantidade_produto").value = response[0]["QUANTIDADE"];
    }
    xhr.send();
})