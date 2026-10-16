import { useState } from "react";
import "./App.css";

function App() {
  const [produto, setProduto] = useState({
    nome: "",
    preço: "",
  });

  const [listaProdutos, setListaProdutos] = useState([]);

  async function enviarForm(e) {
    e.preventDefault();

    try {
      const resultado = await fetch("http://localhost:3000/produtos", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(produto),
      });

      const produtoCadastrado = await resultado.json();

      setListaProdutos([ ...listaProdutos, produtoCadastrado ]);
    } catch (error) {}
  }

  return (
    <div className="container">
      <div className="box-form">
        <form onSubmit={enviarForm}>
          <h1>Cadastro de Produtos</h1>
          <input
            type="text"
            value={produto.nome}
            onChange={(e) => setProduto({ ...produto, nome: e.target.value })}
          />
          <input
            type="number"
            value={produto.preço}
            onChange={(e) => setProduto({ ...produto, preço: e.target.value })}
          />
          <button className="button-submit">Cadastrar</button>
        </form>
      </div>
      <div className="box-produtos">
        <div className="produto">
          <div className="info-produto">
            <p>Nome:</p>
            <p>Preço:</p>
          </div>
          <div className="botoes-comando">
            <button>Editar</button>
            <button>Excluir</button>
          </div>
        </div>
      </div>
      <button className="excluir-tudo">Excluir Tudo</button>
    </div>
  );
}

export default App;
