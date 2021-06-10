import React from "react";
import styled from "styled-components";

const FiltroDiv = styled.div`
  height: 30rem;
  width: 12rem;
  border: 1px solid black;
  position: relative;
  top: 20px;
`;



class Filtro extends React.Component {
  render() {
    return(
      <FiltroDiv>
          <h3>Filtro</h3>
          <p>Valor mínimo:</p>
            <input 
              type="number"
              value={this.props.filtroMin}
              onChange={this.props.onChangeFiltroMin}
              >
            </input>
          <p>Valor máximo:</p>
          <input type="number"
              value={this.props.filtroMax}
              onChange={this.props.onChangeFiltroMax}
              />
          <p>Busca por nome:</p>
          <label>
          <input type="text" 
          id="text" 
          name="text"
          placeholder="Buscar"
          ></input>
          </label>
      </FiltroDiv>
    )
      
  }
}

export default Filtro;
