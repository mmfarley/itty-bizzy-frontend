import { redirect } from '../history'

import { MAKE_TEST_FALSE, 
    MAKE_TEST_TRUE, 
    LOGIN_USER, 
    LOGOUT_USER,
    GET_CONVERSATIONS,
    MARK_AS_PAID,
    GET_INVOICES,
    EDIT_BIZ,
    GET_BIZZYS,
    GET_MY_BIZ
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
            newState.currentUser = {}
            break;

        case GET_CONVERSATIONS:
            newState.conversations = action.payload.conversations
            break;

        case MARK_AS_PAID:
            break;
        case GET_INVOICES:
            console.log("invoices", action.payload)
            if (action.payload.received_bills.length > 0){
                newState.received_invoices = action.payload.received_bills
            }
            if (action.payload.sent_bills.length > 0) {
                newState.sent_invoices = action.payload.sent_bills
            }
            break;

        case GET_BIZZYS:
            console.log("GET_BIZZYS action.payload", action.payload)
            newState.bizzys = action.payload
        break;
        case GET_MY_BIZ:
            console.log("GET_MY_BIZ action.payoad", action.payload)
            newState.myBiz = action.payload[0]
        break;
        case EDIT_BIZ:
            console.log("EDIT_BIZ and MAKE_BIZ action.payload", action.payload)
            newState.myBiz = action.payload
        break;
    }
    return newState
}
