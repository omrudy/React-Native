import React,{Component} from 'react'
import {Image,View,StyleSheet,Text} from 'react-native'


export default class Logic extends React.Component {
	render(){
		return(
			<View>
				<Image 
					source = {require('../../asset/logo/png.png')}
					style = {styles.imageSize}
				/>
			</View>
		)
	}
}


const styles = StyleSheet.create({
	imageSize : {
		width : 200,
		height : 200
	}
})
