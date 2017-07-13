import {StyleSheet} from 'react-native';

export default  StyleSheet.create({
	container:{
		flexDirection:'column',
		flex:1,
		alignItems:'stretch'
	},
	image:{
		height:150,
    paddingRight:5,
    paddingLeft:5,
    paddingTop:5,
		alignItems:'stretch',
		justifyContent: 'flex-end'
	},
	title:{
		textAlign:'center',
		fontSize:20,
		backgroundColor:'rgba(0,0,0,.7)',
		color:'white',
		paddingTop:5,
		paddingRight:5,
		paddingLeft:5,
		paddingBottom:5
	}
})