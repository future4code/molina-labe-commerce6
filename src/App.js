import React from "react";
import styled from "styled-components";
import Filtro from "./components/Filtro";
import Carrinho from "./components/Carrinho";
import Cards from "./components/Cards";

const AppContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: space-between;
  justify-items: center;
  text-align: center;
  gap: 100px;
  
`

const ContainerProdutos = styled.div`
  height: 80rem;
  width: 120%;
  flex-direction: row;
  justify-content: center;
  text-align: right;
  position: relative;
  top: 20px;
 
`;

const CardsProdutos = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px; 
  text-align: center;
  position: relative;
  

  button {
    cursor: pointer;
    margin-bottom: 10px;
    border-radius: 5px;
    color: white;
    background-color: blueviolet;
  }

  img {
    max-width: 150px;
    padding-top: 20px;
  }
`;

const Contagem = styled.div`
  display: flex;
  align-items: left;
  position: relative;
  top: 10px;
 
`;

const Ordena = styled.div`

  position: relative;
  bottom: 30px;
  right: 10px;
`;


const produtos = [
  {
    id: 1,
    nome: "Dog in Space",
    valor: 100,
    img: "https://urnashirts.com/images/uploads/280504/space-pug-galaxy-funny-pug-t-shirt_Men_Black.jpg",
    quantidade: 1,
  },

  {
    id: 2,
    nome: "Nebula",
    valor: 110,
    img: "data:image/jpeg;base64,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",
    quantidade: 1,
  },

  {
    id: 3,
    nome: "Rick and Morty",
    valor: 120,
    img: "https://cdn.shopify.com/s/files/1/0195/3734/products/RM0007-T1031C_Front_5777.jpg?v=1622784872",
    quantidade: 1,
  },

  {
    id: 4,
    nome: "Eye In The Lock",
    valor: 130,
    img: "data:image/jpeg;base64,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",
    quantidade: 1,
  },

  {
    id: 5,
    nome: "Triangle",
    valor: 140,
    img: "data:image/jpeg;base64,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",
    quantidade: 1,
  },

  {
    id: 6,
    nome: "Galactic Donuts",
    valor: 150,
    img: "https://teeuni.com/images/uploads/260507/space-cat-riding-llama-and-donuts-galaxy-funny-cat-t-shirt_Men_1.jpg",
    quantidade: 1,
  },

  {
    id: 7,
    nome: "Cat Planets",
    valor: 160,
    img: "http://i.ebayimg.com/images/g/WuQAAOSwyrZcpcnW/s-l500.jpg",
    quantidade: 1,
  },

  {
    id: 8,
    nome: "I Don't Believe In Humans",
    valor: 170,
    img: "https://m.media-amazon.com/images/I/A13usaonutL._CLa%7C2140%2C2000%7C81wr59A0gAL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_UL1500_.png",
    quantidade: 1,
  },

  {
    id: 9,
    nome: "Funny Cat",
    valor: 180,
    img: "https://toptierstyle.com/wp-content/uploads/2017/08/2017-New-Fashion-Men-Women-3D-T-Shirt-Funny-Print-Glasses-Cat-Space-Galaxy-T-Shirt-2.jpg",
    quantidade: 1,
  },
];

class App extends React.Component {
  state = {
    filtroMin: 100,
    filtroMax: 180,
    filtroNome: "" ,
    produtos: produtos,
    cart: [],
    sort: 'Crescente',
  };

  componentDidMount() {
  
    const carrinhoSalvo = localStorage.getItem('cart') 
    const arrayCart = JSON.parse(carrinhoSalvo)
    if(arrayCart) {
      this.setState({cart: arrayCart})
    }
    
  }
  componentDidUpdate() {
    localStorage.setItem('cart', JSON.stringify(this.state.cart))
  }


  filtraProduto = ()  => {
     return this.state.produtos
     .filter((produto) => produto.valor <= (this.state.filtroMax || Infinity))
     .filter((produto) => produto.valor >= this.state.filtroMin)
     .filter((produto) => produto.nome.includes(this.state.filtroNome))
     .sort((a, b) => this.state.sort === 'Crescente' ? a.valor - b.valor : b.valor - a.valor)
 }

  onChangeSort = (event) => {
    this.setState({sort: event.target.value});
  };

  onChangeFiltroMin = (event) => {
    this.setState({filtroMin: event.target.value});
  };

  onChangeFiltroMax = (event) => {
    this.setState({filtroMax: event.target.value});
  };

  onChangeFiltroNome = (event) => {
    this.setState({filtroNome: event.target.value});
  };

  addToCart = (produto) => {
    this.setState({cart: [...this.state.cart, produto]});
  };

  removeFromCart = (produtoToRemove) => {
    const newCart = this.state.cart
      .map((produto) => {
        if (produto === produtoToRemove) {
          return {
            ...produto,
            quantidade: produto.quantidade - 1,
          };
        }
        return produto;
      })
      .filter((produto) => produto.quantidade > 0);
    this.setState({ cart: newCart });
  };

  render() {
    const listaFiltrada = this.filtraProduto()
    
    return (
      <AppContainer>
        <Filtro
          filtroMin={this.state.filtroMin}
          filtroMax={this.state.filtroMax}
          filtroNome={this.state.filtroNome}
          onChangeFiltroMin={this.onChangeFiltroMin}
          onChangeFiltroMax={this.onChangeFiltroMax}
          onChangeFiltroNome={this.onChangeFiltroNome}
        />

        <ContainerProdutos>
          <div>
            <Contagem>
              <p>Quantidade de Produtos: {listaFiltrada.length}</p>
            </Contagem>
            <Ordena>
            <label>
              Ordena????o :
             <select value={this.state.sort} onChange={this.onChangeSort}>
                <option value={'Crescente'}> Crescente </option>
                <option value={'Decrescente'}> Decrescente </option>
              </select>
            </label>
            </Ordena>
          </div>
          <CardsProdutos>
            {listaFiltrada.map((produto) => {
              return (
                <Cards
                  key={produto.id}
                  imagem={produto.img}
                  id={produto.id}
                  nome={produto.nome}
                  valor={produto.valor}
                  quantidade={produto.quantidade}
                  addToCart={this.addToCart}
                />
              );
            })}
          </CardsProdutos>
        </ContainerProdutos>
        <Carrinho
          removeFromCart={this.removeFromCart}
          produtos={this.state.produtos}
          cart={this.state.cart}
          valorTotalCompra={this.valorTotalCompra}
        />
        
      </AppContainer>
    );
  }
}

export default App;
