import React, { Component } from 'react';
import {
	Text,
	View,
	TouchableHighlight,
	TextInput,
	ScrollView ,
	Image,
	FlatList
} from 'react-native';
import styles from './detail.style';


const MovieInfo = ({movie}) =>{
	return (
		<View style={{flexDirection:'row'}}>
			<Text style={{flex:0.4}}>{movie.name}</Text>
			<Text style={{flex:0.6}}>{movie.key}</Text>
		</View>
	)
}


const DetailMovie = ({movie}) =>{
	console.log("movie",movie);
	if(movie){
		return(
			<View style={styles.container}>
				<Image
			  	style={styles.image}
          source={{uri: movie.coverUrl}}
        />
        <FlatList
				  data={[
				  				{key: movie.connectName,name:'Name  '},
				  				{key: movie.id , name:'ID  '},
				  				{key: movie.releaseYear,name:'Release Year  '},
				  				{key: movie.title,name:'Title  '}
				  		  ]}
				  renderItem={
				  						({item}) =>( <MovieInfo movie={item}/>)
				  					 }
				/>
			</View>
		)	
	}else{
		return null;
	}
	
}

export default DetailMovie