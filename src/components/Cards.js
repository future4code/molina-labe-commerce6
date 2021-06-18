import React from "react";
import styled from "styled-components";


const CardsContainer = styled.div``;

const BorderImg = styled.div`
  border: 1px solid black;
  box-shadow: 5px 5px gray;
  border-radius: 10px;
`;

class Cards extends React.Component {
  render() {
    const produto = this.props;

    return (
      <BorderImg>
        <img src={produto.imagem} />
        <div>
          <p>
            <strong>{produto.nome}</strong>
          </p>
          <p>R${produto.valor}, 00</p>
          <button onClick={() => produto.addToCart(produto)}>
            Adicionar ao Carrinho
          </button>
        </div>
      </BorderImg>
    );
  }
}

export default Cards;
