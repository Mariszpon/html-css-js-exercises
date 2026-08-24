// ------------------------
// Calculadora Maior/Menor
// ------------------------

//Pegando elementos pelo id
const num1 = document.getElementById("num1")
const num2 = document.getElementById("num2")
const resultado = document.getElementById("resultado")
const mensagem = document.getElementById("mensagem")

//function define a função que vai ser chamada ao clicar no botão
//.value e .textContent lê/muda o conteúdo de um campo
//parseFloat converte o valor digitado em número, pq o js pega com "x", ai tem que tirar
function descobrirMaior() {
    const valor1 = parseFloat(num1.value) //valores digitados
    const valor2 = parseFloat(num2.value) //valores digitados
    // const resultado = (document.getElementById("resultado").textContent)

    //isNaN verifica se o valor não é um número
    //se os campos n tiverem nada
        if (isNaN(valor1) || isNaN(valor2)) {
        mensagem.textContent = "Insira números válidos.";
        mensagem.style.color = "#a33636"
                // Apagando texto dentro do elemento
        resultado.textContent = "O resultado é...";
        return;
    }

    //resultado.textContent altera o texto dentro do <h1 id="resultado">
    mensagem.textContent="Comparação realizada com sucesso!"; //limpa
    mensagem.style.color = "#45886e"

    if (valor1>valor2) {
        resultado.textContent = `O maior número é: ${valor1}!`
    } else if (valor2>valor1) {
        resultado.textContent = `O maior número é: ${valor2}!`
    } else {
        resultado.textContent = "Os números são iguais!"
    }
}

// ------------------------
// Calculadora de Operações
// ------------------------

// let cria variáveis, aqui eu criei uma variável chamada "operacaoSelecionada" e deixei ela com o valor null (sem valor)
// Serve pra guardar ql operação o usuário escolheu (+, -, *, /)
let operacaoSelecionada = null

// function é oq acontece pra qnd eu clico em um botão de operação
// O (simboloOp: +, -, /, *) é o simbolo da da operação que é guardado dentro de operacaoSelecionada
// Depois, pega o campo <textarea id="numeros"> e vê os números que tão lá
// Aí adiciona os símbolos de operação lá, junto com o que tava escrito
function setOperacao(simboloOp) {
    operacaoSelecionada = simboloOp //Guarda o simboloOp na operacaoSelecionada
    const numerosInput = document.getElementById("numeros") //numerosInput é uma variável que eu criei agora pra pegar o i="numeros" na textarea

    // adiciona o número e o símbolo no textarea
    // numerosInput.value lê os números
    // .trim remove espaços extrar no fim dos números (string)
    // + junta as strings
    // ` ${simboloOp} ` insere o símbolo da operação com espaços pq tá (` ) e não (`)
    numerosInput.value = numerosInput.value.trim() + ` ${simboloOp} `
}

// function é o que acontece qnd clica no botão com onclick="calcular()", que é o =
// .value lê o que tá escrito no textarea
// não precisa de parsefloat por causa do eval() que interpreta a string inteira como expressão matemática
// Depois, nas outras const, ele pega os elementos que vai mostrar resultado e imagem
function calcular() {
    const numerosInput = document.getElementById("numeros").value
    const resultado = document.getElementById("resultado")
    const mensagem = document.getElementById("mensagem")

    // o try é se dar certo, mostrando o resultado (resultado.textContent = `O resultado é: ${resposta}`)
    // E aí mostra a mensagem

    try {
        // eval avalia a expressão (ex: "10 + 5 * 2"), interpretando o texto como expressão matemática
        // se o usuário digitar algo inválido, dá erro (catch)
        const resposta = eval(numerosInput)

        resultado.textContent = `O resultado é: ${resposta}`
        mensagem.textContent = "Operação realizada com sucesso!"
        mensagem.style.color = "#45886e"

    // o catch é pra se der errado, mostrando a mensagem

    } catch {
        mensagem.textContent = "Expressão inválida."
        mensagem.style.color = "#a33636"
    }
}

function limpar() {
    // Apaga o conteúdo do textarea (a operação)
    document.getElementById("numeros").value = ""
    // Reseta o resultado e mensagem
    document.getElementById("resultado").textContent = "O resultado é..."
    document.getElementById("mensagem").textContent = ""
    // volta pro início com a operação sem nada
    operacaoSelecionada = null
}
