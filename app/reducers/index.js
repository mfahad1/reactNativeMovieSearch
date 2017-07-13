import {combineReducers} from 'redux';
import initialReducer from './initialReducer';
import searchedMovies from './searchedMovies';
import loaderReducer from './loaderReducer';

/*
 * We combine all reducers into a single object before updated data is dispatched (sent) to store
 * Your entire applications state (store) is just whatever gets returned from all your reducers
 * */

const Reducers = combineReducers({
  searchedMovies: searchedMovies, 
  loaderStatus: loaderReducer
});

export default Reducers
