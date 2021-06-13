import React, { useState } from "react";
import styled from "styled-components";


const ContainerCarrinho = styled.div`
  
  height: 30px;
  border: none;
  justify-content: center;
  position: relative;
  top: 20px;
 

  button {
      
    cursor: pointer;
    margin-bottom: 10px;
    border-radius: 5px;
    color: white;
    background-color: blueviolet;
    position: relative;
    top: 25px;
  }
`;

const Texto = styled.h3`
  text-align: start;
  padding-left: 10px;
  width: 600px;
`;

const Imagem = styled.img`
  width: 130px;
`;

const BotaoRemover =  styled.div`
  
  button {
        
    cursor: pointer;
    margin-bottom: 10px;
    border-radius: 5px;
    color: white;
    background-color: blueviolet;
      
  }
`
function Carrinho(props) {
  const [abrir, setAbrir] = useState(false);

  const navigateTo = () => {
    setAbrir(!abrir);
  };

  const valorTotalCompra = () => {
    let valorTotal = 0

    for(let produto of props.cart) {
      valorTotal += produto.valor * produto.quantidade
    }

    return valorTotal
  }
  const renderCart = () => (
    <>
    
      <h3>Carrinho</h3>
      <div className="produtos">
        {props.cart.map((produto) => (
          <div className="produto" key={produto.id}>
            <Imagem src={produto.imagem} alt={produto.nome} />
            <p>{produto.nome}</p>
            <p>R${produto.valor},00</p>
            <BotaoRemover>
            <button onClick={() => props.removeFromCart(produto)}>
              Remover do Carrinho
            </button>
            </BotaoRemover>
          </div>
        ))}
        <p>Valor total: R${valorTotalCompra()},00</p>
      </div>
    </>
  );

  return (
    <div className="Carrinho">
      <ContainerCarrinho>
        <button onClick={() => navigateTo()}>
          Ir para o Carrinho({props.cart.length})
        </button>
      </ContainerCarrinho>
      {abrir === true && renderCart()}
    </div>
  );
}

export default Carrinho;
