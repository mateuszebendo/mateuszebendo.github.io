const input01 = document.getElementById("inverter-string-input");
const btn01 = document.getElementById("inverter-string-button");

const inverterString = string => {
    return string.split("").reverse().join("");
};

btn01.addEventListener("click", () => {
    const stringOriginal = input01.value;
    const stringInvertida = inverterString(stringOriginal);

    const displayStringInvertida = document.querySelector(".display-string-invertida");
    displayStringInvertida.innerHTML = stringInvertida;
});

////////////////////////

const input02 = document.getElementById("marcar-vogais-input")
const btn02 = document.getElementById("marcar-vogais-button")

const vogais = ['a', 'e', 'i', 'o', 'u'];

const marcarVogais = (string) => {
    return string
        .split("")
        .map((letra) =>
            vogais.includes(letra.toLowerCase())
                ? `<span style="background-color: yellow">${letra}</span>`
                : letra
        )
        .join("");
};

btn02.addEventListener("click", () => {
    const string = input02.value;
    const stringMarcada = marcarVogais(string);

    const displayMarcarVogais = document.querySelector(".display-marcar-vogais");
    displayMarcarVogais.innerHTML = stringMarcada;
});

////////////////////////

const input03 = document.getElementById("texto-input")
const btn03 = document.getElementById("texto-button")

const separaTexto = (texto) => {
    const palavras = texto.split(" ");
    const ocorrenciasMap = {};

    palavras.forEach((palavra) => {
        if (ocorrenciasMap[palavra]) {
            ocorrenciasMap[palavra]++;
        } else {
            ocorrenciasMap[palavra] = 1;
        }
    });

    const tableHead = document.getElementById("texto-table-head");
    const tableRow = document.getElementById("texto-table-row");
    tableHead.innerHTML = "";
    tableRow.innerHTML = "";

    for (const [palavra, quantidade] of Object.entries(ocorrenciasMap)) {
        tableHead.innerHTML += `<th>${palavra}</th>`;
        tableRow.innerHTML += `<td>${quantidade}</td>`;
    }
};

btn03.addEventListener("click", () => {
    const texto = input03.value.trim();
    separaTexto(texto);
});

////////////////////////

const divTxt = document.getElementById("texto-modificar-container")
const inputTxt = document.getElementById("texto-modificar-input")
const inputAchar = document.getElementById("texto-procurar-input")
const btnAchar = document.getElementById("texto-procurar-button")
const inputSubs = document.getElementById("texto-substituir-input")
const btnSubs = document.getElementById("texto-substituir-button")

const acharPalavra = (texto, palavra) => {
    return texto.map((palavraTexto) => {
        if(palavraTexto.toLowerCase() === palavra.toLowerCase())
        {
            return`${palavraTexto.toUpperCase()}`
        }
        return palavraTexto
    }).join(" ")
}

const substituirPalavra = (texto, antigaPalavra, novaPalavra) => {
    return texto.map((palavraTexto) => {
        if(palavraTexto.toLowerCase() === antigaPalavra.toLowerCase()){
            return novaPalavra
        }
        return palavraTexto
    }).join(" ")
}

btnAchar.addEventListener("click", () => {
    const texto = inputTxt.value.trim().split(" ")
    const palavra = inputAchar.value.trim()

    const textoMarcado = acharPalavra(texto, palavra);

    const novaDiv = document.createElement("div")
    novaDiv.textContent = textoMarcado
    
    divTxt.appendChild(novaDiv)
})

btnSubs.addEventListener("click", () => {
    const texto = inputTxt.value.trim().split(" ")
    const antigaPalavra = inputAchar.value.trim()
    const novaPalavra = inputSubs.value.trim()

    const novoTexto = substituirPalavra(texto, antigaPalavra, novaPalavra)
    const novaDiv = document.createElement("div")
    novaDiv.textContent = novoTexto 

    divTxt.appendChild(novaDiv)
})

////////////////////////

const divDate = document.getElementById("nascimento-container")
const inputDate = document.getElementById("nascimento-input")
const btnDate = document.getElementById("nascimento-button")

const calculaDiasVida = (dateArray) => {
    const [ano, mes, dia] = dateArray.map(Number);
    const dataNascimento = new Date(ano, mes - 1, dia); // Meses começam de 0 (jan) a 11 (dez)
    
    const hoje = Date.now(); 

    const diferencaMilissegundos = hoje - dataNascimento;

    const diferencaDias = Math.floor(diferencaMilissegundos / (1000 * 60 * 60 * 24));

    if(diferencaDias < 0)
    {
        return "Data inválida"
    }
    return diferencaDias;
};

btnDate.addEventListener("click", () => {
    const date = inputDate.value.trim().split("-");
    console.log(date)

    const totalDiasVida = calculaDiasVida(date);
    const novoH1 = document.createElement("h1");    
    novoH1.textContent = totalDiasVida;

    divDate.appendChild(novoH1)
})


////////////////////////

const divTeste = document.getElementById("div-objeto-aleatoria")
const btnTeste = document.getElementById("button-objeto-aleatoria");

const stringAleatoria = () => {
    const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split("");
    const indexAleatorio = Math.floor(Math.random() * caracteres.length);
    return caracteres[indexAleatorio]
}

const geraObjeto = () => {
    const randomSize = Math.ceil(Math.random() * 1000)
    let obj = {}

    for (let i = 0; i < randomSize; i++) {
        obj[`${i}`] = stringAleatoria()
    }
    return obj
}

const gerarLista = (object) => {
    const ul = document.createElement("ul");
    for (const [key, value] of Object.entries(object)) {
        const li = document.createElement("li");
        li.textContent = `Key: ${key} - Value: ${value}`;
        ul.appendChild(li);
    }
    return ul;
};

btnTeste.addEventListener("click", () => {
    const newObj = geraObjeto();
    const newHtmlElement = gerarLista(newObj);
    divTeste.appendChild(newHtmlElement);   

    const pessoa = {
        falar: function () {
            console.log("Oi!");
        }
    };
});
