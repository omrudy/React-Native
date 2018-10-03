import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';




/*
make component card 
when you can use it like this
first import the component like "import CardLogic from './card' "
and use the code like this :

  <CardLogic 
    thumbnail = {require('../asset/content/react.jpg')}   -> this avatar image
    name = 'Fahruddin Kadir'                              -> this name user upload
    note = 'this example note'                            -> this note 
    imageName = {require('../asset/content/pubg.jpg')}    -> this image Card component
    content = '  logic adalah sekumpulan mahasiswa '      -> this description 
    like = '4'
    comment = '10'
  />

*/

export default class CardLogic extends Component {
  render() {
    return (
        <Content>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source = {this.props.thumbnail} />
                <Body>
                  <Text>{this.props.name}</Text>
                  <Text note>{this.props.note}</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source = {this.props.imageName}
                style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            
            <CardItem>
              <Text>
                {this.props.content}
              </Text>
            </CardItem>
            
            <CardItem>

              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>{this.props.like} like</Text>
                </Button>
              </Left>

              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>{this.props.comment} coment</Text>
                </Button>
              </Body>

              <Right>
                <Text>11h ago</Text>
              </Right>

            </CardItem>
          </Card>
        </Content>
    )
  }
}