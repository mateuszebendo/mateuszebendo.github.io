console.log("Arquivo javascript carregado com sucesso!")

/////////////////////////

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

const divFrequencia = document.getElementById("frequencia-container")
const inputFrequencia = document.getElementById("frequencia-input")
const btnFrequencia = document.getElementById("frequencia-button")

const achaMaiorItem = (array) => {
    let aux = { key: null, value: -Infinity };

    for (let i = 0; i < array.length; i++) {
        const [key, value] = array[i];
        if (value > aux.value) {
            aux = { key, value };
        }
    }

    return aux;
};

const achaPalavraMaisFrequente = (texto) => {
    const palavras = texto.trim().split(" ");
    const frequenciaMap = {};

    palavras.forEach((palavra) => {
        if (frequenciaMap[palavra]) {
            frequenciaMap[palavra]++;
        } else {
            frequenciaMap[palavra] = 1;
        }
    });

    const entries = Object.entries(frequenciaMap);

    const palavraMaisFrequente = achaMaiorItem(entries);

    return `${palavraMaisFrequente.key} - ${palavraMaisFrequente.value}`;
};

btnFrequencia.addEventListener("click", () => {
    const texto = inputFrequencia.value.trim()

    const palavraMaisFrequente = achaPalavraMaisFrequente(texto)
    const h1Element = document.createElement("h1")
    h1Element.textContent = palavraMaisFrequente

    divFrequencia.appendChild(h1Element)
})

////////////////////////

const divTxt = document.getElementById("texto-modificar-container")
const inputTxt = document.getElementById("texto-modificar-input")
const inputAchar = document.getElementById("texto-procurar-input")
const btnAchar = document.getElementById("texto-procurar-button")
const inputSubs = document.getElementById("texto-substituir-input")
const btnSubs = document.getElementById("texto-substituir-button")

const acharPalavra = (texto, palavra) => {
    return texto.map((palavraTexto) => {
        if (palavraTexto.toLowerCase() === palavra.toLowerCase()) {
            return `${palavraTexto.toUpperCase()}`
        }
        return palavraTexto
    }).join(" ")
}

const substituirPalavra = (texto, antigaPalavra, novaPalavra) => {
    return texto.map((palavraTexto) => {
        if (palavraTexto.toLowerCase() === antigaPalavra.toLowerCase()) {
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

    if (diferencaDias < 0) {
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

const divData = document.getElementById("data-container")
const inputData = document.getElementById("data-input")
const btnData = document.getElementById("data-button")
const meses = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro"
];

const escreverDataPorExtenso = (data) => {
    return data.map((value, index) => {
        if (index === 1) return `de ${meses[value - 1]} de`
        return value
    }).join(" ")
}

btnData.addEventListener("click", () => {
    const data = inputData.value.trim().split("/")

    const dataFormatada = escreverDataPorExtenso(data)
    const novoH1 = document.createElement("h1")
    novoH1.textContent = dataFormatada

    divData.appendChild(novoH1)
})

////////////////////////

const divSemana = document.getElementById("semana-container")
const inputPrimeriaData = document.getElementById("primeira-semana-input")
const inputSegundaData = document.getElementById("segunda-semana-input")
const btnSemana = document.getElementById("semana-button")

const calculaDiferencaDeSemanas = (primeiraData, segundaData) => {
    const [ano1, mes1, dia1] = primeiraData.map(Number)
    const [ano2, mes2, dia2] = segundaData.map(Number)
    const data1 = new Date(ano1, mes1 - 1, dia1)
    const data2 = new Date(ano2, mes2 - 1, dia2)

    const diferencaMilissegundos = data1 >= data2 ? data1 - data2 : data2 - data1

    const diferencaSemanas = Math.floor(diferencaMilissegundos / (1000 * 60 * 60 * 24 * 7));

    return diferencaSemanas + " semanas"
}

btnSemana.addEventListener("click", () => {
    const primeiraData = inputPrimeriaData.value.split("-")
    const segundaData = inputSegundaData.value.split("-")

    const diferencaSemanas = calculaDiferencaDeSemanas(primeiraData, segundaData)
    const novoH1 = document.createElement("h1")
    novoH1.textContent = diferencaSemanas

    divSemana.appendChild(novoH1)
})

////////////////////////

const divPalavraForte = document.getElementById("palavra-forte-container")
const inputPalavraForte = document.getElementById("palavra-forte-input")
const btnPalavraForte = document.getElementById("palavra-forte-button")

const analisaPalavra = (palavra) => {
    const temMaiuscula = /[A-Z]/.test(palavra);
    const temNumero = /[0-9]/.test(palavra);
    const temEspecial = /[#?!@$%^&*-]/.test(palavra);

    if (temMaiuscula && temNumero && temEspecial) {
        return "green";
    } else if (temMaiuscula && temNumero) {
        return "orange";
    } else {
        return "red";
    }
};

btnPalavraForte.addEventListener("click", () => {
    const palavra = inputPalavraForte.value.trim()
    const resultadoAnalise = analisaPalavra(palavra)
    inputPalavraForte.style.color = resultadoAnalise
})

////////////////////////
//TENIS
//POLAR 

const divTenisPolar = document.getElementById("tenis-polar-container")
const inputTenisPolar = document.getElementById("tenis-polar-input")
const btnTenisPolar = document.getElementById("tenis-polar-button")

const codificaEmTenisPolar = (texto) => {
    // Mapeamento bidirecional
    const mapa = {
        't': 'p',
        'p': 't',
        'e': 'o',
        'o': 'e',
        'n': 'l',
        'l': 'n',
        'i': 'a',
        'a': 'i',
        's': 'r',
        'r': 's'
    };

    return texto.split(" ").map((palavra) => {
        return palavra.split("").map((letra) => {
            const isUpperCase = letra === letra.toUpperCase();
            const letraMinuscula = letra.toLowerCase();
            if (mapa.hasOwnProperty(letraMinuscula)) {
                const letraSubstituida = mapa[letraMinuscula];
                return isUpperCase ? letraSubstituida.toUpperCase() : letraSubstituida;
            }
            return letra;
        }).join("");
    }).join(" ");
}

btnTenisPolar.addEventListener("click", () => {
    const texto = inputTenisPolar.value.trim()

    const textoCodificado = codificaEmTenisPolar(texto)

    const novoH1 = document.createElement("h1")
    novoH1.textcontent = textoCodificado

    divTenisPolar.appendChild(novoH1)
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
