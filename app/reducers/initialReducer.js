import * as typings from '../actions/typings';

export default function (state = null, action) {
	console.log("action",action.recipe);
    switch (action.type) {
        case typings.INITIAL_ACTION:
            return 'ínitial setup';
    }
    return state;
}
