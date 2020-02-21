import React, { Component } from 'react';

import avatar from '../images/avatar.png';

class Card extends Component{
    render(){
        return(
      <div class="column">
        <div class="ui card">
          <div class="image">
            <img src={avatar} />
          </div>
          <div class="content">
            <div class="header"> {this.props.nome} </div>
            <div class="meta">
              <span class="date">{this.props.usuario}</span>
            </div>
            <div class="description">
              {this.props.descricao}
            </div>
          </div>
          <div class="extra content">
            <a>
              <i aria-hidden="true" class="like icon"></i>
              {this.props.likes} Likes
            </a>
          </div>
        </div>
      </div>

        );
    }
}

export default Card;