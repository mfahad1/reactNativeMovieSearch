import {StyleSheet,Dimensions,PixelRatio} from 'react-native';

export default  StyleSheet.create({
	container:{
		flex:1,
    backgroundColor:'#2D3F57',
    alignItems:'center',
    justifyContent:'center',
    width:Dimensions.get('window').width
	},
  image:{
    borderRadius: 200 / PixelRatio.get(),
    height: Dimensions.get('window').height / 5,
    width: 120,
  },
  inputContainer:{
    paddingTop:45,
    width:200,
  },
  input:{
    textAlign:'center',
    color:'white',
    backgroundColor:'rgba(0,0,0,0.7)'
  },
  backImage:{

  }
	
})