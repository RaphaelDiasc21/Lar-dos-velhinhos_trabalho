const atualiza_select = document.querySelector(".select_inserir");

atualiza_select.addEventListener("change",function(e){
    let xhr = new XMLHttpRequest();

    xhr.open('GET','http://localhost:3555/quantidade-produto/'+e.target.value,true);
    xhr.onload = function(){
        let response = JSON.parse(xhr.responseText);
        console.log(response);
        document.getElementById("quantidade_estoque").value = response[0]["QUANTIDADE"];
    }
    xhr.send();
})