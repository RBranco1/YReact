import React, { Component } from 'react';

import avatar from '../images/avatar.png';

class Card extends Component{

   constructor(){
     super()
     this.state = {likes: 0}
     this.addLike = this.addLike.bind(this);
     ;


   }

   componentDidMount(){
     this.setState({
       likes:this.props.likes
     })


   }

   

   addLike(){
    let likes = parseInt(this.state.likes) + 1;
    this.setState({likes:likes})
  console.log(likes)


   }


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
            <span>
              <i aria-hidden="true" className="chat icon"></i>10 comments
            </span>

            <span href="/" className="Right floated botao-like" onClick={this.addLike}>
              <i aria-hidden="true" className="like icon" ></i> {this.state.likes} likes
              </span>
             
            
          </div>
        </div>
      </div>

        );
    }
}

export default Card;