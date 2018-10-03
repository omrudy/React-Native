import React from 'react'
import { Header,Footer,FooterTab, Title, Content,Button, Left, Right, Body, Icon, Text } from 'native-base';
import {StyleSheet} from 'react-native'



export default class Footers extends React.Component {
	render(){
		return(
			<Footer>
	          <FooterTab style = {styles.footerColor}>
	            <Button vertical>
	              <Icon style={styles.Color} name="apps" />
	              <Text style={styles.Color}>Apps</Text>
	            </Button>
	            <Button vertical>
	              <Icon name="camera" />
	              <Text >Camera</Text>
	            </Button>
	            <Button vertical >
	              <Icon name="navigate" />
	              <Text>Navigate</Text>
	            </Button>
	            <Button vertical>
	              <Icon name="person" />
	              <Text >Contact</Text>
	            </Button>
	          </FooterTab>
	        </Footer>
		)
	}
}


const styles = StyleSheet.create({
	footerColor : {
		backgroundColor : '#37474f'
	},
	Color :{
		color : 'white'
	}
})


