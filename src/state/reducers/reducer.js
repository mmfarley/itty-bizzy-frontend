import { redirect } from '../history'

import { MAKE_TEST_FALSE, 
    MAKE_TEST_TRUE, 
    LOGIN_USER, 
    LOGOUT_USER,
    GET_CONVERSATIONS, 
    SEND_MESSAGE,
    SET_USER
 } from '../actions/types';

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
            localStorage.setItem("user", JSON.stringify(action.payload.user))
            newState.currentUser = action.payload.user
            redirect('/user-dash')
            break;
        case LOGOUT_USER:
            localStorage.clear()
            newState.currentUser = null
            break;
        case GET_CONVERSATIONS:
            newState.conversations = action.payload.conversations
            break;
        case SEND_MESSAGE:
            newState.conversations[0].conversation.push(action.payload)
            console.log("SEND MESSAGE")
            break;
    }
    return newState
}
