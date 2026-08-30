// Só imprime no console pra saber que o script carregou.
console.log("pagina inicial rodando!")

// Pega o elemento <tbody id="tabela-corpo"> do HTML, que é onde os dados vão ser inseridos.
const tabelaCorpo = document.getElementById("tabela-corpo")

// Cria o array (lista ordenada de valores) de objetos com os apps (id, nome, descrição).
let dados = [
    {id_aplicativo: "com.whatsapp", nome: "WhatsApp", descricao: "Mensagens rápidas"},
    {id_aplicativo: "com.spotify.music", nome: "Spotify", descricao: "Streaming de músicas"},
    {id_aplicativo: "com.duolingo", nome: "Duolingo", descricao: "Aprendizado de idiomas"},
    {id_aplicativo: "com.instagram.android", nome: "Instagram", descricao: "Rede social"},
    {id_aplicativo: "com.netflix.mediaclient", nome: "Netflix", descricao: "Plataforma de filmes e séries"},
]

// dados.map(...) = Para cada objeto do array, monta uma linha de tabela (<tr>) com 3 células (<td>).
// dados.map(n => ...) quer dizer:
//“para cada elemento n dentro do array dados, execute essa função”.
// Quando você escreve uma string entre crases (`), pode colocar variáveis ou expressões dentro de ${ ... }.
// O JavaScript substitui esse trecho pelo valor da variável.
// O n é cada objeto do array dados.
//
let linhasProcessadas = dados.map(n => `
        <tr class="linhas">
            <td>${n.id_aplicativo}</td>
            <td>${n.nome}</td>
            <td>${n.descricao}</td>
        </tr>
    `).join("") //O .join("") junta todas as linhas em uma única string
    // .join(separador) pega cada item do array e cola tudo junto, usando o separador que você passar.
    // Se passar "" (string vazia), ele cola sem nada entre os itens.
    // Se passar ",", ele cola com vírgula entre cada item.

// Insere todas as linhas dentro do <tbody>.
// Resultado: a tabela aparece preenchida automaticamente.
tabelaCorpo.innerHTML += linhasProcessadas

// Mostra no console o HTML gerado, útil pra debug.
console.log(linhasProcessadas)
