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

filmes.forEach((filme) => {
    const cardFilm = document.createElement("div");
    cardFilm.setAttribute("class", "card-film");

    const cardTopPart = document.createElement("div");
    cardTopPart.setAttribute("class", "card-top-part");

    const cardInfo = document.createElement("div");
    cardInfo.setAttribute("class", "card-info");

    const cardTitle = document.createElement("p");
    cardTitle.setAttribute("class", "card-title");

    const cardCategories = document.createElement("p");
    cardCategories.setAttribute("class", "card-categories");

    const cardCast = document.createElement("p");
    cardCast.setAttribute("class", "card-cast");

    const cardClassification = document.createElement("p");
    cardClassification.setAttribute("class", "card-classification");

    const cardDescription = document.createElement("div");
    cardDescription.setAttribute("class", "card-card-description");

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
