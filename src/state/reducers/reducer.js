// import history from './history'
import { MAKE_TEST_FALSE, MAKE_TEST_TRUE } from '../actions/types';

export const reducer = function (currentState, action) {
    const newState = { ...currentState }

    switch (action.type) {
        case MAKE_TEST_FALSE:
            newState.test = false;
        break;
        case MAKE_TEST_TRUE:
            newState.test = true;
        break;
    }
    return newState
}
