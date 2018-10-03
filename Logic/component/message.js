import React from 'react'
import Footers from './header_footer/footer'
import { Container,Content,Text,Input,Textarea,Form,Item,Button } from 'native-base';
import Headers from './header_footer/header'
import { Col, Row, Grid } from 'react-native-easy-grid';
import {StyleSheet,Alert,Dimensions} from 'react-native'
import CardLogic from './card'


const width = Dimensions.get('window').width;


export default class Message extends React.Component {
	render(){
		return(
			<Container>
					<Col>
						<Headers
							logo = 'arrow-back'
							title = 'Logic'
							routerLeft = {()=>{this.props.navigation.goBack()}}
						/>

						<Content>
							<Text> message</Text>
						</Content>
						
						<Form style= {{  flexDirection: "row"}}>
					        <Textarea rowSpan={2} style={styles.input} placeholder="Sending Message ..." />	
					       	<Button bordered danger style =  {{}}>
            					<Text>Danger</Text>
          					</Button>
          				</Form>
					</Col>
			</Container>

		)
	}
}


const styles = StyleSheet.create({
	input:{
    backgroundColor: 'white',
    opacity : 0.84,
    margin:10,
    borderRadius:30,
	borderWidth:2,
	marginTop:6,
	width:width-120,

}
})


