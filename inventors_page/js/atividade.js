
const getVal = seletor => document.querySelector(seletor).value

const geraListaHTML = (listaObj, atribs) => {
    let resultadoHTML = listaObj.reduce(function(acum, elem) {
        return acum + `<li>${elem[atribs[0]]} ${elem[atribs[1]]}</li>`
    },"<ul>")
    resultadoHTML += "</ul>"
    return resultadoHTML
}
//Faça uma função que filtre a lista de inventores para aqueles que nasceram de 1500 a 1599.
const btn1 = document.querySelector("#exec1")
btn1.onclick = () => {
    let anoInicial = getVal("#ano-inicio")
    let anoFinal = getVal("#ano-fim")
    //filtrando a lista
    const listaResultado = inventors.filter( (inventor) =>{
        return inventor.year > anoInicial && inventor.year < anoFinal
    })
    //div para resultado
    document.querySelector("#result1").innerHTML = geraListaHTML(listaResultado, ["first", "last"])
}

//Faça uma função que retorne um array com os primeiros e últimos nomes dos inventores
const btn2 = document.querySelector("#exec2"); 

const gerarListaHTML2 = (listaResultado) => {
    let resultadoHTMl = listaResultado.foreach((element) => {
        return `<li>${element}</li>`
    })
    return resultadoHTMl;
}

btn2.onclick = () => {
    const listaResultadoNome = inventors.filter( (inventor) => {
	listaResultadoNome.Add(inventor.first + " " + inventor.last);         
    });
    document.querySelect("#result2").innerHtml = gerarListagerarListaHTML2HTML(listaResultado, ["first", "last"]);
}


