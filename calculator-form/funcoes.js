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
