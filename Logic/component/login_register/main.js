import React from 'react'
import {View,Text,StyleSheet} from 'react-native'

import Login from './login'


export default class Main_Login_Register extends React.Component{
	render(){
		return(
			<View style = {styles.continer}>
				<Login/>
			</View>
		)
	}
}


const styles = StyleSheet.create({
	continer : {
		backgroundColor: '#ecf0f1',
		flex : 1,
		alignItems : 'center',
		justifyContent : 'center'
	},
	textStyle : {
		color : 'black',
		fontWeight : 'bold',
		fontSize : 30
	}
})
