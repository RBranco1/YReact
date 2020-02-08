import React from 'react';
import './App.css';
import logo from './images/flower.png';

function App() {
  return (
    <>
      <div className="App">
        <div class="ui menu inverted fixed">
          <img src={logo} />
          <a class="item">algo</a>
          <button class="ui teal inverted button">Postar Projeto</button>
          <div class="ui icon input">
            <input type="text" placeholder="Buscar..." />
            <i aria-hidden="true" class="search icon"></i>
          </div>
        </div>
      </div>
      <div class="ui container three column grid">
          <div class="ui card">
            <div class="image"><img src="/images/avatar/large/matthew.png" /></div>
            <div class="content">
              <div class="header">Matthew</div>
              <div class="meta"><span class="date">Joined in 2015</span></div>
              <div class="description">Matthew is a musician living in Nashville.</div>
            </div>
            <div class="extra content">
              <a>
                <i aria-hidden="true" class="user icon"></i>
                22 Friends
              </a>
            </div>
          </div>
          <div class="column"><img src="/images/wireframe/image.png" class="ui image" /></div>
          <div class="column"><img src="/images/wireframe/image.png" class="ui image" /></div>
        </div>
    </>
  );
}

export default App;
