//this form to handle local storage app
import {AsyncStorage,Alert} from 'react-native'


// this to save auth storage  
export const set_storage=(param,value)=>{
	status = AsyncStorage.setItem(
			param,						//this paramater name in storage
			value) 						//this value in storage
		.then(()=>{ 					//if success return true
			return true
		})
		.catch((error)=>{				//and if error return false
			return false
		})
	return status
	}
	



//this to get the item	
export const get_storage=(param)=>{	
	const get_value = AsyncStorage.getItem(param)
		.then((value)=>{
			if (value === null ){
				return false 						//return false to variable get_value because empty value
			}
			else {
				return value 						//return value to variable get_value
			}
		})
		.catch(()=>{
			return false
		})
	return get_value								// and this return variable get_value if request this function
	}
