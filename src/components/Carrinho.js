import React from "react";
import styled from "styled-components";


const ContainerCarrinho = styled.div`
  height: 50%;
  border: 1px solid black;
  justify-content: center;
  width: 70%;
  position: relative;
  top: 20px;
 
`;

const Remove = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  justify-content: center;
  justify-items: center;
  align-items: center;
  padding: 5px;
  

  button{
    height: 20px;
    align-items: center;
    justify-items: right;
  }
`;

class Carrinho extends React.Component{


    render() {
        return(

        <ContainerCarrinho>
            <h3>Carrinho</h3>
          <Remove>
            <p>1</p>
            <p> ItemA</p>
            <button>Remover</button>
          </Remove>
          <Remove>
            <p>2</p>
            <p>ItemB</p>
            <button>Remover</button>
          </Remove>
          <Remove>
            <p>3</p>
            <p>ItemC</p>
            <button>Remover</button>
          </Remove>
          <p>Valor total:</p>

        </ContainerCarrinho>

        )
    }

}
export default Carrinho 