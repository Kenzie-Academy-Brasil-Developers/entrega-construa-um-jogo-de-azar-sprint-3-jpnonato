
const opcoes = ['tesoura', 'papel', 'pedra'];


let pctesoura = document.getElementById("tesourapc")
let pcpapel = document.getElementById("papelpc")
let pcpedra = document.getElementById("pedrapc")

function computer () {
let escolhapc = opcoes[(Math.random() * opcoes.length) | 0]
    if (escolhapc === 'tesoura'){
        pctesoura.classList.remove("esconder-itens")
        return 'tesoura'
    } else if (escolhapc === 'papel'){
        pcpapel.classList.remove("esconder-itens")
        return 'papel'
    } else if (escolhapc === 'pedra'){
        pcpedra.classList.remove("esconder-itens")
        return 'pedra'
    }

}


let it = document.getElementById("lista-opcoes")
let criarli = document.createElement("li")
let escolha = it.appendChild(criarli)
let content = document.createTextNode("Faça sua escolha: ")

let botao = document.getElementById ("button-iniciar")
botao.addEventListener("click", function(){
     it.style.display = "flex"
     escolha.appendChild(content)
     escolha.classList.add("ajuste")
})

let opcaotesoura = document.getElementById("tesoura")
let opcaopapel = document.getElementById("papel")
let opcaopedra = document.getElementById("pedra")
let modalwin = document.getElementById("victory")
let modallose = document.getElementById("lose")
let modaldraw = document.getElementById("draw")

opcaotesoura.addEventListener("click", function(){
    opcaopapel.classList.add("esconder-itens")
    opcaopedra.classList.add("esconder-itens")
    escolha.classList.add("esconder-itens")
    opcaotesoura.style.background = "rgb(82, 255, 2)"
    let escolhapc = computer()
    if(escolhapc === 'papel'){
        modalwin.classList.remove("esconder-itens")
    } else if(escolhapc === 'pedra'){
        modallose.classList.remove("esconder-itens")
    } else if (escolhapc === 'tesoura'){
        modaldraw.classList.remove("esconder-itens")
    }
})

opcaopapel.addEventListener("click", function(){
    opcaotesoura.classList.add("esconder-itens")
    opcaopedra.classList.add("esconder-itens")
    escolha.classList.add("esconder-itens")
    opcaopapel.style.background = "rgb(82, 255, 2)"
    let escolhapc = computer()
    if(escolhapc === 'papel'){
        modaldraw.classList.remove("esconder-itens")
    } else if(escolhapc === 'pedra'){
        modalwin.classList.remove("esconder-itens")
    } else if (escolhapc === 'tesoura'){
        modallose.classList.remove("esconder-itens")
    }
})

opcaopedra.addEventListener("click", function(){
    opcaopapel.classList.add("esconder-itens")
    opcaotesoura.classList.add("esconder-itens")
    escolha.classList.add("esconder-itens")
    opcaopedra.style.background = "rgb(82, 255, 2)"
    let escolhapc = computer()
    if(escolhapc === 'papel'){
        modallose.classList.remove("esconder-itens")
    } else if(escolhapc === 'pedra'){
        modaldraw.classList.remove("esconder-itens")
    } else if (escolhapc === 'tesoura'){
        modalwin.classList.remove("esconder-itens")
    }
})

let playagainwin = document.getElementById("playagain-win")
playagainwin.addEventListener("click", function(){
    modalwin.classList.add("esconder-itens")
    document.location.reload();
})

let playagainlose = document.getElementById("playagain-lose")
playagainlose.addEventListener("click", function(){
    modallose.classList.add("esconder-itens")
    document.location.reload();
})

let playagaindraw = document.getElementById("playagain-draw")
playagaindraw.addEventListener("click", function(){
    modaldraw.classList.add("esconder-itens")
    document.location.reload();
})






/* pc => o resultado da função não a sua execução!! se colocar conosle.log(pc) => repetir inf
 o primeiro resultado */ 

// function getRandomArbitrary(min, max) {
//     return Math.random() * (max - min) + min;
//   }

// if((pc === t && elt === pedra) || (pc === pedra && elt === papel) || (pc === papel && elt === t) ){
//     console.log("você venceu!!")

// }else if((pc === t && elt === t) || (pc === pedra && elt === pedra) || (pc === papel && elt === papel)){
//     console.log("você impatou!!")
// } else {
//     console.log("você perdeu!!")
// }

// setTimeout(() => {
//     game()}, 3000)

