import React, { Component } from 'react';
import './App.css';
import logo from './images/flower.png';

import Card from './components/Card';
import Modal from './components/criarprojeto';



class App extends Component {

  constructor() {
    super();
    this.state = {
      lista: [
        {
          nome: "Nome aleatorio",
          descricao: "descrição aleatoria",
          usuario: "Autor Aleatorio",
        }
      ]
    };
  }

  componentDidMount() {
    fetch("http://localhost:8080/api/projetos")
    .then(res => res.json())
    .then((result) => {
      this.setState({lista: result.data})
    })
  }

  render() {
    return (
      <>
      

        <div className="App">
          <div class="ui menu inverted fixed">
            <img src={logo} />
            <a class="item"> Algo</a>
    <Modal />
            <div class="ui icon input">
              <input type="text" placeholder="Buscar..." />
              <i aria-hidden="true" class="search icon"></i>
            </div>
          </div>
          <div id="space">
          <div class="ui container three column grid" >
            {this.state.lista.map(function(projeto) {
             return (
         <Card        
         key = {projeto.id}
         nome={projeto.nome}
         usuario={projeto.usuario}
         descricao={projeto.descricao}
         likes={projeto.likes}
         id = {projeto.id}
         />
             )
              }
                )
                 }
          
        </div>
        </div>
        </div>
      </>
    );
            }
          }

export default App;