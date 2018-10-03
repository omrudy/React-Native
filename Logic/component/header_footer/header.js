import React from 'react'
import { Header, Title, Content,Button, Left, Right, Body, Icon, Text,Badge } from 'native-base';
import {StyleSheet,Alert} from 'react-native'


export default class Headers extends React.Component {
	render(){
		return(
			<Header style = {styles.headerColor} androidStatusBarColor="#102027">
	          <Left>
	            <Button transparent onPress={this.props.routerLeft}>
	              <Icon name={this.props.logo} />
	            </Button>
	          </Left>
	          <Body>
	            <Title>{this.props.title}</Title>
	          </Body>
	           <Right>
	            <Button Badge transparent onPress={this.props.routerRigth}>
	            { 
	            	this.props.notification > 0 &&															//this condition for check have notification or not
		            	<Badge styles = {styles.badgeColor} >
		              		<Text style = {styles.badgeText}>{this.props.notification}</Text>
		            	</Badge>
	            }
	              <Icon name="chatboxes" />
	            </Button>
	          </Right>
	        </Header>
		)
	}
}


const styles = StyleSheet.create({
	headerColor : {
		backgroundColor : '#37474f'
	},
	badgeColor : {
		backgroundColor : '#1565c0',
		opacity : 0.8
	},
	badgeText :{
		fontSize : 11
	}
})


