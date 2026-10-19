import { useState } from "react";

function CardProduto({ produto, editarProduto, excluirProduto}) {
  const [produtoEditado, setProdutoEditado] = useState({
    nome: produto.nome,
    preço: produto.preço,
  });

  const [editando, setEditando] = useState(false);

  function salvarEdição() {
    editarProduto(produto.id, produtoEditado);
    setEditando(false);
  }

  return (
    <div className="produto">
      {editando ? (
        <div className="inputs-produto">
          <input
            type="text"
            value={produtoEditado.nome}
            onChange={(e) =>
              setProdutoEditado({ ...produtoEditado, nome: e.target.value })
            }
          />
          <input
            type="number"
            value={produtoEditado.preço}
            onChange={(e) =>
              setProdutoEditado({ ...produtoEditado, preço: e.target.value })
            }
          />
        </div>
      ) : (
        <div className="info-produto">
          <p>Nome: {produto.nome}</p>
          <p>Preço: {produto.preço}</p>
        </div>
      )}

      <div className="botoes-comando">
        {editando ? (
          <button onClick={salvarEdição}>Salvar</button>
        ) : (
          <button onClick={() => setEditando(true)}>Editar</button>
        )}
        <button onClick={()=>(excluirProduto(produto.id))}>Excluir</button>
      </div>
    </div>
  );
}
export default CardProduto;
