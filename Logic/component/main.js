import React,{Component} from 'react'
import {StyleSheet,View,Text,Alert}	from 'react-native'
import Logic from './logo/logic'
import {get_storage} from '../backend/storage'
import {StackActions, NavigationActions } from 'react-navigation'


export default class mainScreen extends Component {
	constructor() {																	// this constructor or first main execute
  	  super()
  	  	setTimeout(()=>{
  	  		this.auth_check_token()											        // bind the auth check to redirect to login_register form	
  	  	},2000)																		// break 2 second for show the icon logic
  	}


  	reset_navigation(){																// change the main menu to 0 or first open
	    this.props.navigation.dispatch(												// if after login and get token 
	    StackActions.reset({
	      index: 0,
	      actions: [NavigationActions.navigate({ routeName: 'aplication' })],
	    })
	)}


	async auth_check_token(){	
 		const value = await get_storage('token')									// this method to request data token in internal storage
 		if (value){
			this.reset_navigation()													// call thi method if success	
		}else{
 			this.props.navigation.navigate('login_register')						// call login_register form
 		}
	}


	render(){
		return(
			<View style = {styles.continer}>
				<Logic/>
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

