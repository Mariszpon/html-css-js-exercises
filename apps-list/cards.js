let dados = [
    {id_aplicativo: "com.whatsapp", nome: "WhatsApp", descricao: "Mensagens rápidas"},
    {id_aplicativo: "com.spotify.music", nome: "Spotify", descricao: "Streaming de músicas"},
    {id_aplicativo: "com.duolingo", nome: "Duolingo", descricao: "Aprendizado de idiomas"},
    {id_aplicativo: "com.instagram.android", nome: "Instagram", descricao: "Rede social"},
    {id_aplicativo: "com.netflix.mediaclient", nome: "Netflix", descricao: "Plataforma de filmes e séries"},
];

let cardsProcessados = dados.map(n => `
    <div class="card">
        <h2>${n.nome}</h2>
        <p><strong>ID:</strong> ${n.id_aplicativo}</p>
        <p><strong>DESC:</strong> ${n.descricao}</p>
    </div>
`).join("");

document.getElementById("cards-container").innerHTML = cardsProcessados;
