const produtos = [
  { nome: "Academy Conjunto 23", preco: 550, imagem: "academy-conjunto.jpg" },
  { nome: "Academy Parte Superior", preco: 330, imagem: "academy-parte.jpg" },
  { nome: "Angelical", preco: 430, imagem: "angelical.jpg" },
  { nome: "Risca Verde", preco: 430, imagem: "risca-verde.jpg" },
  { nome: "Chumbo", preco: 480, imagem: "chumbo.jpg" },
  { nome: "Conja de Calor", preco: 280, imagem: "conja-calor.jpg" },
  { nome: "Nike Facão Toca Rosa", preco: 300, imagem: "nike-facao.jpg" },
  { nome: "Azul Marinho", preco: 390, imagem: "azul-marinho.jpg" }
];

const container = document.getElementById("produtos-container");
let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
const carrinhoDiv = document.getElementById("itens-carrinho");

// Mostrar produtos
produtos.forEach((produto, index) => {
  const card = document.createElement("div");
  card.className = "produto-card";
  card.innerHTML = `
    <img src="imagens/${produto.imagem}" alt="${produto.nome}" />
    <h3>${produto.nome}</h3>
    <p>R$ ${produto.preco},00</p>
    <button onclick="verMais(${index})">Ver mais</button>
    <button onclick="adicionarAoCarrinho(${index})">Adicionar ao carrinho</button>
  `;
  container.appendChild(card);
});

function verMais(index) {
  const produto = produtos[index];
  localStorage.setItem("produtoSelecionado", JSON.stringify(produto));
  window.location.href = "produto.html";
}

function adicionarAoCarrinho(index) {
  carrinho.push(produtos[index]);
  localStorage.setItem("carrinho", JSON.stringify(carrinho));
  mostrarMensagem(`${produtos[index].nome} foi adicionado ao carrinho!`);
  atualizarCarrinho();
}

function abrirCarrinho() {
  document.getElementById("carrinho").style.display = "block";
  atualizarCarrinho();
}

function atualizarCarrinho() {
  carrinhoDiv.innerHTML = "";
  carrinho.forEach((item, i) => {
    carrinhoDiv.innerHTML += `<p>${item.nome} - R$ ${item.preco} <button onclick="removerDoCarrinho(${i})">❌</button></p>`;
  });
}

function removerDoCarrinho(index) {
  carrinho.splice(index, 1);
  localStorage.setItem("carrinho", JSON.stringify(carrinho));
  atualizarCarrinho();
}

function finalizarCompra() {
  if (carrinho.length === 0) {
    mostrarMensagem("Seu carrinho está vazio!");
    return;
  }
  window.location.href = "checkout.html";
}

// ✅ Mensagem flutuante com estilo
function mostrarMensagem(texto) {
  const msg = document.getElementById("mensagem-flutuante");
  msg.innerText = texto;
  msg.classList.add("show");

  setTimeout(() => {
    msg.classList.remove("show");
  }, 3000);
}

// Atualiza carrinho na inicialização
atualizarCarrinho();