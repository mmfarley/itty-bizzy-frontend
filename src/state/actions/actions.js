import {
    LOGIN_USER,
    LOGOUT_USER,
    LOGIN_ERROR,
    GET_CONVERSATIONS,
    SEND_MESSAGE,
    MARK_AS_PAID,
    GET_INVOICES,
    EDIT_BIZ,
    GET_BIZZYS,
    GET_MY_BIZ,
    DELETE_BIZ,
    GET_CLIENTS,
    ADD_CLIENT,
    GET_MESSAGED_USERS,
    SIGNUP_USER,
    REMOVE_CLIENT
} from "./types";

const API = 'http://localhost:3000/api/v1/'

export const login = (loggingUser) => {
    return function (dispatch) {
        fetch(`${API}auth`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(loggingUser)
        })
            .then(resp => resp.json())
            .then(result => {
                if (result.error) {
                    dispatch({ type: LOGIN_ERROR, payload: result })
                }else{
                    dispatch({ type: LOGIN_USER, payload: result })
                }
            })
    }
}

export const signup = (loggingUser) => {
    return function (dispatch) {
        fetch(`${API}users`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(loggingUser)
        })
            .then(resp => resp.json())
            .then(result => {
                if (result.error) {
                    dispatch({ type: LOGIN_ERROR, payload: result })
                } else {
                    dispatch({ type: SIGNUP_USER, payload: loggingUser })
                }
            })
    }
}

export const logout = () => {
    return {
        type: LOGOUT_USER
    }
}

export const getConversations = (user_id) => {
    return function (dispatch) {
        fetch(`${API}messages/user/${user_id}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(resp => resp.json())
            .then(conversations => dispatch({ type: GET_CONVERSATIONS, payload: conversations }))
    }
}

export const sendMessage = (message) => {
    return function (dispatch) {
        fetch(`${API}messages`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                Authorization: `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify(message)
        })
            .then(resp => resp.json())
            .then(message => dispatch({ type: SEND_MESSAGE, payload: message }))
    }
}

export const markAsPaid = (id) => {
    return function (dispatch) {
        fetch(`${API}bills/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                Authorization: `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify({ is_paid: true })//check this syntax
        })
            .then(resp => resp.json())
            .then(() => dispatch({ type: MARK_AS_PAID }))
    }
}

//make custom route for this. model after messages custom route
export const getInvoices = (user_id) => {
    return function (dispatch) {
        fetch(`${API}bills/user/${user_id}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(resp => resp.json())
            .then(invoices => dispatch({ type: GET_INVOICES, payload: invoices }))
    }
}

export const editBiz = (business) => {
    return function (dispatch) {
        fetch(`${API}businesses/${business.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                Authorization: `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify( business )
        })
            .then(resp => resp.json())
            .then(business => dispatch({ type: EDIT_BIZ, payload: business }))
    }
}

export const makeBiz = (business) => {
    return function (dispatch) {
        fetch(`${API}businesses`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                Authorization: `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify(business)
        })
            .then(resp => resp.json())
            .then(business => dispatch({ type: EDIT_BIZ, payload: business }))
    }
}


export const getBizzys = () => {
    return function (dispatch) {
        fetch(`${API}businesses`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(resp => resp.json())
            .then(bizzys => dispatch({ type: GET_BIZZYS, payload: bizzys }))
    }
}

//make custom route for this. model after messages custom route. 
//NOTE THAT RELATIONSHIP IS DIFFERENT. SHOULD BE EASIER
export const getMyBiz = (user_id) => {
    return function (dispatch) {
        fetch(`${API}businesses/user/${user_id}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(resp => resp.json())
            .then(myBiz => dispatch({ type: GET_MY_BIZ, payload: myBiz }))
    }
}

export const deleteBiz = (biz_id) => {
    return function (dispatch) {
        fetch(`${API}businesses/${biz_id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                Authorization: `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify(biz_id)
        })
            .then(resp => resp.json())
            .then(biz => dispatch({ type: DELETE_BIZ, payload: biz }))
    }
}

export const getClients = (biz_id) => {
    return function (dispatch) {
        fetch(`${API}clients/users/${biz_id}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(resp => resp.json())
            .then(clients => dispatch({ type: GET_CLIENTS, payload: clients }))
    }
}

export const addClient = (client) => {
    return function (dispatch) {
        fetch(`${API}clients`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                Authorization: `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify(client)
        })
            .then(resp => resp.json())
            .then(client => dispatch({ type: ADD_CLIENT, payload: client }))
    }
}

export const removeClient = (client_id) => {
    return function (dispatch) {
        fetch(`${API}clients/${client_id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                Authorization: `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify(client_id)
        })
            .then(resp => resp.json())
            .then(client => dispatch({ type: REMOVE_CLIENT, payload: client }))
    }
}

export const getMessagedUsers = (user_id) => {
    return function (dispatch) {
        fetch(`${API}messages/messaged-users/${user_id}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(resp => resp.json())
            .then(users => dispatch({ type: GET_MESSAGED_USERS, payload: users }))
    }
}