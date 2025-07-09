const produto = JSON.parse(localStorage.getItem("produtoSelecionado"));
const container = document.getElementById("produto-detalhe");

if (produto) {
  container.innerHTML = `
    <img src="imagens/${produto.imagem}" alt="${produto.nome}" style="width:250px; border-radius:8px; margin-bottom: 15px;" />
    <h2>${produto.nome}</h2>
    <p><strong>Preço:</strong> R$ ${produto.preco},00</p>
    <p>Produto de alta qualidade disponível na loja Artigos Bulls.</p>
    <button id="btn-adicionar" style="background:#0077cc; color:white; border:none; padding:10px 20px; border-radius:8px; cursor:pointer; font-weight:bold; margin-top:15px;">
      Adicionar ao Carrinho
    </button>
  `;

  // Adicionar evento para botão "Adicionar ao Carrinho"
  document.getElementById("btn-adicionar").addEventListener("click", () => {
    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
    carrinho.push(produto);
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
    alert("Produto adicionado ao carrinho!");
    window.location.href = "index.html";
  });

} else {
  container.innerHTML = "<p>Produto não encontrado.</p>";
}

// Botão Voltar ao Menu
document.getElementById("btn-voltar").addEventListener("click", () => {
  window.location.href = "index.html";
});