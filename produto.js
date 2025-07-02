<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <title>Produto | Artigos Bulls</title>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <header>
    <div class="logo">
      <img src="imagens/logo.png" alt="Logo" />
      <h1>Artigos Bulls</h1>
    </div>
    <a href="index.html">🏠 Voltar</a>
  </header>

  <main>
    <div id="produto-detalhe" style="text-align: center; padding: 30px;"></div>
  </main>

  <script>
    const produto = JSON.parse(localStorage.getItem("produtoSelecionado"));
    const div = document.getElementById("produto-detalhe");

    if (produto) {
      div.innerHTML = `
        <img src="imagens/${produto.imagem}" style="width: 250px;" />
        <h2>${produto.nome}</h2>
        <p>R$ ${produto.preco},00</p>
        <button onclick="adicionar()">Adicionar ao Carrinho</button>
      `;
    }

    function adicionar() {
      alert("Produto adicionado! Volte para o carrinho.");
      window.location.href = "index.html";
    }
  </script>
</body>
</html>