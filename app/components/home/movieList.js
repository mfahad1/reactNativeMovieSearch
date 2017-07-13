import React, {Component} from 'react';
import {
		Text,
		View,
		TouchableHighlight,
		TextInput,
		ScrollView,
		Image
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import styles from './movieList.style';

const selectMovie = (movieSelected) => {
		console.log("movieSelected::", movieSelected);
		Actions.movieDetail({movie: movieSelected})
}

const MovieList = ({movies}) => {
		if (movies instanceof Array) {
				return (
						<View style={{
								flex: 1
						}}>
								<ScrollView >
										{movies.map((movie) => (
												<View key={movie.id}>
														<TouchableHighlight onPress={selectMovie.bind(this, movie)}>
																<Image
																		style={styles.image}
																		source={{
																		uri: movie.coverUrl
																}}>
																		<Text style={styles.title}>{movie.title}</Text>
																</Image>
														</TouchableHighlight>
												</View>
										))
}
								</ScrollView>
						</View>
				)
		} else {
				return <View>
						<Text>Search For Movies</Text>
				</View>;
		}

}

export default MovieList