window.sr = ScrollReveal({ reset: true});

sr.reveal('.texto-quemsomos',{
    rotate: {x:0, y:-80, z:0},
    duration:1000
})

sr.reveal('.texto-oquefazemos', {
    rotate: {x:0, y:80, z:0},
    duration:1000
})


sr.reveal('.conteudo-duvidas',{
    rotate: {x:100, y:0, z:0},
    duration:1000
}) 


sr.reveal('.texto-portfolio',{
    rotate: {x:0, y:100, z:0},
    duration:1000
})

let menu = document.getElementById("menu")
let iconeBarras = document.getElementById("botao-hambuerguer")
let iconeX = document.getElementById("icone-x")

function openClose() {
    if (menu.classList.contains("menu-fechado")) {
        menu.classList.remove("menu-fechado")
        iconeBarras.style.display = "none"
        iconeX.style.display = "inline"
    } else {
        menu.classList.add("menu-fechado")
        iconeBarras.style.display = "inline"
        iconeX.style.display = "none"
    }
}

window.onresize = () => {
    menu.classList.remove ("menu-fechado")
    iconeBarras.style.display = "none"
    iconeX.style.display = "inline"
}

const solicitarOrcamento = (event) => {
    let valorNome = document.getElementById("campo-nome").value
    let valorEmail = document.getElementById("campo-email").value
    let valorAssunto = document.getElementById("campo-assunto").value

    let dadosForm = {
        nome: valorNome,
        email: valorEmail,
        descricao: valorAssunto
    }

    fetch("http://127.0.0.1:3000/solicitacoes", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dadosForm)
    })
        .then(resposta => {
            console.log(resposta)
            document.querySelector("#contato form").reset()

            alert("Solicitação cadastrada")
        })
        .catch(erro => {
            console.error(erro)
            alert("Erro na requisição")
        })

    event.preventDefault()
}
