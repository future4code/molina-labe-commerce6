import React from "react";
import styled from "styled-components";
import Filtro from "./components/Filtro";
import Produtos from "./components/Produtos";
import Carrinho from "./components/Carrinho"

const AppContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: space-between;
  justify-items: center;
  text-align: center;
  gap: 100px
`;




class App extends React.Component {
  state = {
    filtroMin: 100,
    filtroMax: 180,
    filtroNome: "Item",
    produtosNoCarrinho: [],
  };

   onChangeFiltroMin = (event) => {
    this.setState({ filtroMin: event.target.value});
  };

  onChangeFiltroMax = (event) => {
    this.setState({ filtroMax: event.target.value});
  };

  onChangeFiltroNome = (event) => {
    this.setState({ filtroNome: event.target.value});
  };


  adicionaProdutoNoCarrinho = () => {
    
  }


  render() {
    return (
      <AppContainer>
        
        <Filtro>
          filtroMin={this.state.filtroMin}
          filtroMax={this.state.filtroMax}
          filtroNome={this.state.filtroNome}
          onChangeFiltroMin={this.onChangeFiltroMin}
          onChangeFiltroMax={this.onChangeFiltroMax}
          onChangeFiltroNome={this.onChangeFiltroNome}
        </Filtro>
        
        <Produtos></Produtos>
        
        <Carrinho>
        
        </Carrinho>

      </AppContainer>
    );
  }
}

export default App;
