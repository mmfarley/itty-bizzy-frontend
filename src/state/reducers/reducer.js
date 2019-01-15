// import history from './history'
import { MAKE_TEST_FALSE, MAKE_TEST_TRUE, LOGIN_USER, LOGOUT_USER, SIGNUP_USER } from '../actions/types';

export const reducer = function (currentState, action) {
    const newState = { ...currentState }

    switch (action.type) {
        case MAKE_TEST_FALSE:
            newState.test = false;
            break;
        case MAKE_TEST_TRUE:
            newState.test = true;
            break;

        case LOGIN_USER:
            localStorage.setItem("token", action.payload.token)
            newState.currentUser = action.payload 
            break;
        case LOGOUT_USER:
            localStorage.clear()
            newState.currentUser = null
            break;
        case SIGNUP_USER:
            
            break;
    }
    return newState
}
