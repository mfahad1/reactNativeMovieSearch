import * as typings from '../actions/typings';

export default function (state = null, action) {
    switch (action.type) {
        case typings.SEARCHED_MOVIES:
            return action.movies;
        case typings.INITIALIZE_DEFAULT_MOVIE:
            return action.noMoivesFound;
    }
    return state;
}
