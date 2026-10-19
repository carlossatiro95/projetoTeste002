function CardProduto({ produto }) {
  return (
    <div className="produto">
      <div className="info-produto">
        <p>Nome: {produto.nome}</p>
        <p>Preço: {produto.preço}</p>
      </div>
      <div className="botoes-comando">
        <button>Editar</button>
        <button>Excluir</button>
      </div>
    </div>
  );
}
export default CardProduto;
