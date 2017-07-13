import * as typings from '../actions/typings';

export default function (state = null, action) {
    switch (action.type) {
        case typings.SHOW_LOADER:
            return action.loaderStatus;
    }
    return state;
}
