import React, { Component } from 'react';
import './App.css';
import logo from './images/flower.png';
import avatar from './images/avatar.png';



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
            <button class="ui teal inverted button">Postar Projeto</button>
            <div class="ui icon input">
              <input type="text" placeholder="Buscar..." />
              <i aria-hidden="true" class="search icon"></i>
            </div>
          </div>
          <div id="space">
          <div class="ui container three column grid">
          {this.state.lista.map(function(projeto) {
              return (
                <div class="column">
                  <div class="ui card">
                    <div class="image">
                      <img src={avatar} />
                    </div>
                    <div class="content">
                      <div class="header"> {projeto.nome} </div>
                      <div class="meta">
                        <span class="date">{projeto.usuario}</span>
                      </div>
                      <div class="description">
                        {projeto.descricao}
                      </div>
                    </div>
                    <div class="extra content">
                      <a>
                        <i aria-hidden="true" class="like icon"></i>
                        {projeto.likes} Likes
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
        </div>
        </div>
      </>
    );
            }
          }

export default App;
