import React, { Component } from 'react'
import { Button, Header, Image, Modal , Form} from 'semantic-ui-react';
import sunflower from '../images/sunflower.png';

class ModalModalExample extends Component{
  constructor(){
    super()
    this.state = {   
      nome:"",
      usuario:"",
      descricao:""
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

  }

  handleInputChange({target:{name}, target:{value}}){
    this.setState({[name]: value}) 
  }

  handleSubmit(evento) {
    evento.preventDefault();
    this.props.inserirProjeto(this.state);
  }



  render(){
    return(
  <Modal trigger={<Button inverted circular>Cadastre-se!</Button>}>
    <Modal.Header>Esta pronto para essa aventura?</Modal.Header>
    <Modal.Content image>
      <Image wrapped size='medium' src={sunflower}  />  

    <Form onSubmit={this.handleSubmit}>

      <Form.Input name="nome" 
      values={this.state.nome} 
      onChange={this.handleInputChange}
      label="Nome do projeto" />

      <Form.Input name="autor" 
      values={this.state.user} 
      onChange={this.handleInputChange}
      label="Autor do projeto" />

      <Form.TextArea name="descricao" 
      values={this.state.descricao} 
      onChange={this.handleInputChange}
      label="Descrição do projeto" />

      <Button 
      color="teal" 
      type="submit" 
      onClick={this.handleSubmit}>Bora!
      </Button>

    </Form>
    </Modal.Content>
  </Modal>
    );
  }
}
export default ModalModalExample