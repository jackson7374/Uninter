let botao = document.querySelector("#botao")
let saida = document.querySelector("#saida")

botao.addEventListener("click", clicou)

function clicou(){
    saida.innerHTML = "boas vindas ao meu site"
}