// this form to handle login and logout
import {Alert} from 'react-native'
import {set_storage} from './storage'
import {url} from './core'

export const auth_login=(username,password)=>{
	const status = fetch(url+'login?username='+username+'&password='+password)				//this like (https://domain.com/login?username=a&password=a)
	    .then((response) => response.json())												//if respon is json continue else not happen
		    .then((responseJson) => {														//asigment the value json to responJson
			    const status = responseJson.status
			    const token  = String(responseJson.token)
			    if(status===true){															//if respone status true asigment the token to storage
			    	if(set_storage('token',token)){											//set token to local storage
			    		Alert.alert(token)
			    		return true 														// this same like status = true
			   		}else{
			   			Alert.alert('didnt set token')
			   		}
			    }else{																		//if login error give the alert
			    	return false 															//this same like status = false
			    }
		     })
		     .catch((error) =>{																//if the fetc something wrong
		       console.log(error)
		     });
		return status
		}
