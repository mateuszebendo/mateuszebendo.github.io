import { inventors, data } from "./data_base.js"

const divFiltroIdade = document.getElementById("filtro-idade-container")
const btnFiltroIdade = document.getElementById("filtro-idade-button")

btnFiltroIdade.addEventListener("click", () => {
    const novaLista = inventors
    .filter((inventor) => inventor.year >= 1500 && inventor.year <= 1599)
    .reduce((acumulador, elemento) => {
        acumulador += `<li>${elemento.first} - ${elemento.year}</li>`
        return acumulador
    }, `<ul>`) + `</ul>`

    divFiltroIdade.innerHTML += novaLista;
})

/////////////////////////////////////////

const divFiltroNome = document.getElementById("filtro-nome-container")
const btnFiltroNome = document.getElementById("filtro-nome-button")

btnFiltroNome.addEventListener("click", () => {
    const listaPrimeiroUltimoNome = inventors.reduce((acumulador, inventor) => {
        acumulador += `<li>${inventor.first} ${inventor.last}</li>`
        return acumulador
    }, `<ul>`) + `</ul>`

    divFiltroNome.innerHTML += listaPrimeiroUltimoNome;
})

/////////////////////////////////////////

const divOrdenacao = document.getElementById("ordenamento-container")
const btnOrdenacao = document.getElementById("ordenamento-button")

btnOrdenacao.addEventListener("click", () => {
    const listaOrdenada = inventors.sort(function(a, b) {return a.year - b.year})

    const novaListaElementos = listaOrdenada.reduce((acumulador, inventor) => {
        acumulador += `<li>${inventor.first} - ${inventor.year}`
        return acumulador
    }, `<ul>`) + `</ul>`

    divOrdenacao.innerHTML += novaListaElementos
})

/////////////////////////////////////////

const divAnos = document.getElementById("anos-container")
const btnAnos = document.getElementById("anos-button")

btnAnos.addEventListener("click", () => {
    const quantidadeTotal = inventors.reduce((acumulador, inventor) => {
        acumulador += inventor.passed - inventor.year
        return acumulador
    }, 0)

    const novoTitulo = document.createElement("h1")
    novoTitulo.textContent = quantidadeTotal
    divAnos.appendChild(novoTitulo)
})

/////////////////////////////////////////

const divIdade = document.getElementById("ordenar-vida-container")
const btnIdade = document.getElementById("ordenar-vida-button")

btnIdade.addEventListener("click", () => {
    const listaOrdenada = inventors.sort(function(a, b) {return (a.passed - a.year) - (b.passed - b.year)})

    const novaListaElementos = listaOrdenada.reduce((acumulador, inventor) => {
        acumulador += `<li>${inventor.first} - ${inventor.passed - inventor.year}`
        return acumulador
    }, `<ul>`) + `</ul>`

    divIdade.innerHTML += novaListaElementos
})

/////////////////////////////////////////

const divRedundancia = document.getElementById("redundancia-container")
const btnRedundancia = document.getElementById("redundancia-button")

btnRedundancia.addEventListener("click", () => {
    const listaLimpa = data.filter((value, index) => data.indexOf(value) === index);
    //const listaLimpa = [...new Set(data)]

    divRedundancia.innerHTML += listaLimpa.reduce((acumulador, dado) => {
        acumulador += `<li>${dado}</li>`
        return acumulador
    }, `<ul>`) + `</ul>`
})