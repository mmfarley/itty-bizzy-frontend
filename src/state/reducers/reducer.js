import { redirect } from '../history'

import { LOGIN_USER, 
    LOGOUT_USER,
    LOGIN_ERROR,
    GET_CONVERSATIONS,
    MARK_AS_PAID,
    GET_INVOICES,
    EDIT_BIZ,
    GET_BIZZYS,
    GET_MY_BIZ,
    ADD_CLIENT,
    GET_CLIENTS,
    SIGNUP_USER,
    GET_MESSAGED_USERS,
    REMOVE_CLIENT
 } from '../actions/types';

export const reducer = function (currentState, action) {
    const newState = { ...currentState }

    switch (action.type) {
        case LOGIN_USER:
            localStorage.setItem("token", action.payload.token)
            localStorage.setItem("user", JSON.stringify(action.payload.user))
            newState.currentUser = action.payload.user
            newState.loginError = null
            redirect('/user-dash')
            break;
        case SIGNUP_USER:
            console.log("SIGN_UP hit")
            redirect('/login')
            break;
        case LOGOUT_USER:
            localStorage.clear()
            newState.currentUser = null
            newState.conversations = null
            newState.received_invoices = null
            newState.sent_invoices = null
            newState.bizzys = null
            newState.my_biz = null
            newState.clients = null
            newState.messaged_users = null
            break;
        case LOGIN_ERROR:
            newState.loginError = action.payload.error
            break;

        case GET_CONVERSATIONS:
            newState.conversations = action.payload.conversations
            break;

        case MARK_AS_PAID:
            break;
        case GET_INVOICES:
            // console.log("invoices", action.payload)
            if (action.payload.received_bills && action.payload.received_bills.length > 0){
                newState.received_invoices = action.payload.received_bills
            }
            if (action.payload.sent_bills && action.payload.sent_bills.length > 0) {
                newState.sent_invoices = action.payload.sent_bills
            }
            break;

        case GET_BIZZYS:
            // console.log("GET_BIZZYS action.payload", action.payload)
            newState.bizzys = action.payload
            break;
        case GET_MY_BIZ:
            console.log("GET_MY_BIZ action.payoad", action.payload)
            localStorage.setItem("myBiz", JSON.stringify(action.payload[0]))
            newState.my_biz = action.payload[0]
            break;
        case EDIT_BIZ:
            console.log("EDIT_BIZ and MAKE_BIZ action.payload", action.payload)
            newState.my_biz = action.payload
            break;
        case EDIT_BIZ:
            console.log("DELETE_BIZ action.payload", action.payload)
            newState.my_biz = null
            break;
        case GET_CLIENTS:
            console.log("GET_CLIENTS action.payoad", action.payload)
            localStorage.setItem("clients", JSON.stringify(action.payload))
            newState.clients = action.payload
            break;
        case ADD_CLIENT:
            console.log("ADD_CLIENT action.payoad", action.payload)
            // newState.clients = {...newState.clients.push(action.payload)}
            // redirect('/my-biz')
            break;
        case REMOVE_CLIENT:
            console.log("REMOVE_CLIENT action.payoad", action.payload)
            redirect('/my-biz')
            break;
        case GET_MESSAGED_USERS:
            console.log("GET_MESSAGED_USERS action.payoad", action.payload)
            newState.messaged_users = action.payload
            break;

    }
    return newState
}
