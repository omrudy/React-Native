import React, { Component } from 'react';
import { Container, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import Headers from './header_footer/header'
import Footers from './header_footer/footer'
import CardLogic from './card'


export default class AnatomyExample extends Component {
  render() {
    return (
      <Container>
        
        <Headers 
          logo='menu'
          title = 'Logic'
          notification = '0'
          routerRigth = {
            ()=>{this.props.navigation.navigate('message')}     //this manipulated method router because didn't use to diferent file
          }
          /> 
          <Content>              
            <CardLogic 
              thumbnail = {require('../asset/content/react.jpg')}
              name = 'Fahruddin Kadir'
              note = 'this example note'
              imageName = {require('../asset/content/pubg.jpg')} 
              content = '  logic adalah sekumpulan mahasiswa yang bertekat untuk menjadi lebih cerdas dengan kesadaran masin-masing'
              like = '4'
              comment = '10'
            />

             <CardLogic 
              thumbnail = {require('../asset/content/brain2.jpg')}
              name = 'Herianty'
              note = 'this example note'
              imageName = {require('../asset/content/test.png')} 
              content = '  ini adalah contoh isi'
              like = '4'
              comment = '10'
            />
          </Content>
        <Footers/>
      </Container>
    );
  }
}