import React from "react";
import styled from "styled-components";

const FiltroDiv = styled.div`
  height: 20rem;
  width: 12rem;
  border-radius: 10px;
  border: 1px solid black;
  position: relative;
  top: 55px;
  box-shadow: 3px 3px gray;
`;


class Filtro extends React.Component {
  render() {
    return(
      <FiltroDiv>
          <h3>Filtrar</h3>
          <p>Valor mínimo:</p>
            <input 
              type="number"
              value={this.props.filtroMin}
              onChange={this.props.onChangeFiltroMin}
            
            />
          <p>Valor máximo:</p>
          <input type="number"
              value={this.props.filtroMax}
              onChange={this.props.onChangeFiltroMax}
              />
          <p>Busca por nome:</p>
          <label>
          <input 
          type="text" 
          value={this.props.filtroNome}
          onChange={this.props.onChangeFiltroNome}
          placeholder="Buscar"
          />
          </label>
      </FiltroDiv>
    )
      
  }
}

export default Filtro;
