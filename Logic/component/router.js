import {StackNavigator,TabNavigator} from 'react-navigation'
import mainScreen from './main'
import Main_Login_Register from './login_register/main'
import aplication from './aplication'
import Message from './message'
import Headers from './header_footer/header'


export const AppNavigation = StackNavigator({
			mainScreen : {screen : mainScreen},
			login_register : {screen : Main_Login_Register},
			aplication : {screen : aplication},
			message : {screen : Message},
		},{
			headerMode : 'None'
 })



