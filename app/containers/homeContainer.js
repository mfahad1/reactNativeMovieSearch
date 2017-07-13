import React, {Component} from 'react';
import {connect} from 'react-redux';

import {Text, View, TouchableOpacity} from 'react-native';
import {Actions} from 'react-native-router-flux';
import Spinner from 'react-native-loading-spinner-overlay';
import {bindActionCreators} from 'redux';

import * as AllActions from '../actions';
import SearchBar from '../components/home/searchBar';
import MovieList from '../components/home/movieList';
import Datastore from 'react-native-local-mongodb';
import MongoLocalStorage from '../lib/mongoLocalStorage';

class HomeContainer extends Component {

		constructor(props) {
				super(props);
				let storage = new MongoLocalStorage();
				console.log("ge", storage);
				storage.insertDataIn('allData', {val: 'asddsa'});
				console.log("getting data", storage.getData('toBeUploaded'));
		}

		produceAction = () => {
				Actions.away();
				// this.props.initialAction();
				this.props.dispatch(AllActions.showInitialMovies);
		}

		callSearch = () => {
				this.props.dispatch(AllActions.searchKeywordAction());
		}

		render() {
				console.log("moviesmovies", this.props.loaderStatus);
				return (
						<View style={{
								flex: 1
						}}>
								<SearchBar searchKeywordAction={this.callSearch}/>
								<MovieList movies={this.props.movies}/>
								<Spinner
										visible={this.props.loaderStatus}
										textContent={"Loading..."}
										textStyle={{
										color: '#FFF'
								}}/>
						</View>
				)
		}
}

// const mapStateToProps = (state) => { 		return { 			loaderStatus:
// state.loaderStatus, 			movies: state.searchedMovies,
// 			noMoivesFound:state.noMoivesFound 		}; } const mapDispatchToProps =
// (dispatch) => { 		return bindActionCreators(AllActions, dispatch); }

export default connect((state) => {
		return {loaderStatus: state.loaderStatus, movies: state.searchedMovies, noMoivesFound: state.noMoivesFound};
})(HomeContainer);