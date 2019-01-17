// import history from './history'

import { MAKE_TEST_FALSE, 
    MAKE_TEST_TRUE, 
    LOGIN_USER, 
    LOGOUT_USER, 
    SIGNUP_USER, 
    GET_CONVERSATIONS, 
    SEND_MESSAGE } from '../actions/types';

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
        console.log(action)
            localStorage.setItem("token", action.payload.token)
            newState.currentUser = action.payload
            break;
        case LOGOUT_USER:
            localStorage.clear()
            newState.currentUser = null
            break;
        case SIGNUP_USER:
            console.log("SIGNUP_USER", action.payload)
            break;

        case GET_CONVERSATIONS:
            console.log("GET_CONVERSATIONS", action.payload)
            newState.conversations = action.payload.conversations
            break;
        case SEND_MESSAGE:
            console.log("SEND MESSAGE")
            break;
    }
    return newState
}
