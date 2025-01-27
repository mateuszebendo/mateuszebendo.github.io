const url = "https://rafaelescalfoni.github.io/desenv_web/filmes.json"

const filmes = await fetch(url)
    .then((response) => {
        if (!response.ok) {
            throw new Error("Status da resposta: ", response.status)
        }
        return response.json()
    })
    .catch(error => {
        console.error(error.message)
    })

const mainDiv = document.getElementById("main-container");

const criaElementoPersonalizado = (type, className) => {
    const element = document.createElement(type)
    element.setAttribute("class", className)

    return element
}

filmes.forEach((filme) => {
    const cardFilm = criaElementoPersonalizado("div", "card-film")
    const cardTopPart = criaElementoPersonalizado("div", "card-top-part");
    const cardInfo = criaElementoPersonalizado("div", "card-info");
    const cardTitle = criaElementoPersonalizado("p","card-title");
    const cardCategories = criaElementoPersonalizado("p", "card-categories");
    const cardCast = criaElementoPersonalizado("p", "card-cast");
    const cardClassification = criaElementoPersonalizado("p", "card-classification");
    const cardDescription = criaElementoPersonalizado("div", "card-card-description");

    const novaImagem = document.createElement("img");
    novaImagem.setAttribute("src", filme.figura);

    cardTitle.textContent = filme.titulo;
    cardCategories.textContent = filme.generos.join(", ");
    cardCast.textContent = filme.elenco.join(", ");
    cardClassification.textContent = filme.classificacao;
    cardDescription.textContent = filme.resumo;

    cardInfo.appendChild(cardTitle);
    cardInfo.appendChild(cardCategories);
    cardInfo.appendChild(cardCast);

    cardTopPart.appendChild(novaImagem);
    cardTopPart.appendChild(cardInfo);
    cardTopPart.appendChild(cardClassification);

    cardFilm.appendChild(cardTopPart);
    cardFilm.appendChild(cardDescription);

    mainDiv.appendChild(cardFilm); 
});
