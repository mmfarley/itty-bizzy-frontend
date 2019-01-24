import { redirect } from '../history'

import {
    LOGIN_USER,
    LOGOUT_USER,
    LOGIN_ERROR,
    GET_CONVERSATIONS,
    GET_INVOICES,
    EDIT_BIZ,
    GET_BIZZYS,
    GET_MY_BIZ,
    GET_CLIENTS,
    GET_MESSAGED_USERS,
    GET_APPOINTMENTS,
    GET_CLIENT_BUSINESSES
 } from '../actions/types';

export const reducer = function (currentState, action) {
    let newState = { ...currentState }

    switch (action.type) {
        case LOGIN_USER:
            localStorage.setItem("token", action.payload.token)
            localStorage.setItem("user", JSON.stringify(action.payload.user))
            newState.currentUser = action.payload.user
            newState.loginError = null
            redirect('/user-dash')
            break;
        case LOGOUT_USER:
            localStorage.clear()
            newState = {}
            break;
        case LOGIN_ERROR:
            newState.loginError = action.payload.error
            break;

        case GET_CONVERSATIONS:
            newState.conversations = action.payload.conversations
            break;
        case GET_INVOICES:
            if (action.payload.received_bills && action.payload.received_bills.length > 0){
                newState.received_invoices = action.payload.received_bills
            }
            if (action.payload.sent_bills && action.payload.sent_bills.length > 0) {
                newState.sent_invoices = action.payload.sent_bills
            }
            break;
        case GET_BIZZYS:
            newState.bizzys = action.payload
            break;
        case GET_MY_BIZ:
            localStorage.setItem("myBiz", JSON.stringify(action.payload[0]))
            newState.my_biz = action.payload[0]
            break;
        case EDIT_BIZ:
            newState.my_biz = action.payload
            break;
        case GET_CLIENTS:
            localStorage.setItem("clients", JSON.stringify(action.payload))
            newState.clients = action.payload
            break;
        case GET_MESSAGED_USERS:
            newState.messaged_users = action.payload
            break;
        case GET_APPOINTMENTS:
            localStorage.setItem("appointments", JSON.stringify(action.payload))
            newState.appointments = action.payload
            break;
        case GET_CLIENT_BUSINESSES:
            if(action.payload.length > 0){
                newState.client_businesses = action.payload
            }
            break;
            default: return newState
    }
    return newState
}
