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
        this.setState({ lista: result.data })


      })
  }

  inserirProjeto() {

  }

  render() {
    return (
      <>
        <div className="App">
          <div className="ui menu inverted fixed">
            <img src={logo} />
            <a className="item">Yonia</a>
            <Modal inserirProjeto={this.inserirProjeto}/>
            <div className="ui icon input">
              <input type="text" placeholder="Buscar..." />
              <i aria-hidden="true" className="search icon"></i>
            </div>
          </div>
          <div id="space">
            <div className="ui container three column grid" >
              {this.state.lista.map(function (projeto) {
                return (
                  <Card
                    key={projeto.id}
                    nome={projeto.nome}
                    usuario={projeto.usuario}
                    descricao={projeto.descricao}
                    likes={projeto.likes}

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