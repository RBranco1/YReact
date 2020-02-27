import React from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react';
import sunflower from '../images/sunflower.png'


const ModalModalExample = () => (
  <Modal trigger={<Button inverted circular>Cadastre-se!</Button>}>
    <Modal.Header>Esta pronto para essa aventura?</Modal.Header>
    <Modal.Content image>
      <Image wrapped size='medium' src={sunflower}  />
      <Modal.Description>

        <Header>Insira seus melhores dados!</Header>

        <p>Insira seu nome</p>
        <div class="ui icon input">
         <input type="text" placeholder="Nome" />
        <i aria-hidden="true" class="shield alternate icon"></i>
        </div>

        <p>Insira o nome do projeto!</p>
        <div class="ui icon input">
         <input type="text" placeholder="Yonia" />
        <i aria-hidden="true" class="user icon"></i>
        </div>

        <p>Fala brevemente sobre o seu projeto</p>
        <div class="ui icon input">
         <input type="text" placeholder="Esse projeto é incrivel" />
        <i aria-hidden="true" class="address card icon"></i>
        </div>
        
        <Button color='teal' fluid>Cadastrar</Button>
        
      </Modal.Description>
    </Modal.Content>
  </Modal>
)

export default ModalModalExample