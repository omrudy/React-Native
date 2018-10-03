import React,{Component} from 'react'
import {View,StyleSheet,TextInput,TouchableOpacity,Dimensions,Alert} from 'react-native'
import {Button,Input,Item,Icon,Text,Toast,Content,Form} from 'native-base'
import {auth_login} from '../../backend/login'


export default class Login extends React.Component{
	constructor(props) {
	  super(props)
	
		this.state = {
	  		width 	: Dimensions.get('screen').width ,      //get the width smartphone
	  		height 	: Dimensions.get('window').height ,
	  		username : '',
	  		password : '',
	  		enableButton : false,
	 	}	
	}

	
	async login(){
		value = await auth_login(
					this.state.username,
					this.state.password
			)
		if (value === true){
			Alert.alert('success')
		}else{
			Alert.alert('false')
		}
	}


	render(){
		return(
			<View> 
				<Form style = {style.continer}>

					 <Item>
			            <Icon active name='person' style = {style.icon} />
			            <Input 
			            	placeholder='username'
			            	onChangeText = {(user)=>this.setState({username:user})}
			            />
			         </Item>
			       
					<Item>
			            <Icon active name='eye' style = {style.icon} />
			            <Input
			            	placeholder='password'
			            	onChangeText = {(pass)=>this.setState({password:pass})}
			            />
			        </Item>
		 
 					<Item
 						style = {{
 							alignItems : 'center',
							justifyContent : 'center'
 						}}>

						 <Button danger
						 	style = {style.buttonContiner}
						 	onPress={()=>this.login()}>

							<Text style = {style.buttonText}>Login</Text>
						
						</Button>
					</Item>
				</Form>
			</View>
		)
	}
}



const style = StyleSheet.create({
	continer : {
		width : 200,
		marginBottom  : 10,
	}, 
	buttonContiner : {
		marginTop:10,
	},
	buttonText : {
		color : 'white'
	},
	icon :{
		color : '#130f40'
	}
})