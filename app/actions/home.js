import * as typings from './typings';
import {ApiUrl} from '../constants';
import {getReq} from '../lib/api';
import {AsyncStorage} from 'react-native';
export const searchKeywordAction = (keyWord) => {

		console.log("ApiUrl+keyWordApiUrl+keyWord", ApiUrl + keyWord);
		return (dispatch, getState) => {
				dispatch(showLoader(true));
				getReq(keyWord).then(json => {
						console.log("here in json", json);
						AsyncStorage.setItem('initialMovies', JSON.stringify(json))
						dispatch(searchedMovies(json));
						dispatch(showLoader(false));
				})
		}

};

export const searchedMovies = (movies) => {
		console.log("inseide",movies);
		return {type: typings.SEARCHED_MOVIES, movies: movies.suggest}
}

export const showLoader = (flag) => {
		return {type: typings.SHOW_LOADER, loaderStatus: flag}
}

export const showInitialMovies = () => {
		return (dispatch, getState) => {
				AsyncStorage.getItem('initialMovies', (err, res) => {
						if (err) {
								dispatch(noMoviesFound())
						} else {
							console.log("here res",res);
							res = JSON.parse(res);
								if(res.suggest)
									dispatch(searchedMovies(res))
								else
									dispatch(noMoviesFound())
						}
				})
		}
}
export const noMoviesFound = () => {
		console.log("i am here");
		return {type: typings.INITIALIZE_DEFAULT_MOVIE, noMoivesFound: 'search for movies'}
}