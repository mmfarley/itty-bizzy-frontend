import {
    LOGIN_USER,
    LOGOUT_USER,
    LOGIN_ERROR,
    GET_CONVERSATIONS,
    GET_INVOICES,
    EDIT_BIZ,
    GET_BIZZYS,
    GET_MY_BIZ,
    DELETE_BIZ,
    GET_CLIENTS,
    GET_MESSAGED_USERS,
    GET_APPOINTMENTS,
    GET_CLIENT_BUSINESSES,
    ADD_CLIENT
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
                    dispatch({ type: LOGIN_USER, payload: result })
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
            .then(conversations => dispatch({ type: GET_CONVERSATIONS, payload: conversations }))
    }
}

export const markAsPaid = (id, user_id) => {
    return function (dispatch) {
        fetch(`${API}bills/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                Authorization: `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify({ 
                is_paid: true,
                user_id: user_id
             })
        })
            .then(resp => resp.json())
            .then(invoices => dispatch({ type: GET_INVOICES, payload: invoices }))
    }
}

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

export const sendInvoice = (invoice) => {
    return function (dispatch) {
        fetch(`${API}bills`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                Authorization: `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify(invoice)
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
            .then(clients => {
                dispatch({ type: ADD_CLIENT, payload: clients })
            })
    }
}

export const removeClient = (client) => {
    return function (dispatch) {
        fetch(`${API}clients/${client.client_user_id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                Authorization: `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify(client)
        })
            .then(resp => resp.json())
            .then(clients => dispatch({ type: ADD_CLIENT, payload: clients }))
    }
}

export const getMessagedUsers = (user_id) => {
    console.log("in getmessagesuers")
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

export const getAppointments = (biz_id) => {
    return function (dispatch) {
        fetch(`${API}appointments/users/${biz_id}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(resp => resp.json())
            .then(appointments => dispatch({ type: GET_APPOINTMENTS, payload: appointments }))
    }
}

export const setAppointment = (appointment_user_id, business_id, date) => {
    return function (dispatch) {
        fetch(`${API}appointments`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                Authorization: `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify({
                appointment_user_id: appointment_user_id,
                business_id: business_id,
                date: date
            })
        })
            .then(resp => resp.json())
            .then(appointments => dispatch({ type: GET_APPOINTMENTS, payload: appointments }))
    }
}

export const getClientBusinesses = (user_id) => {
    return function (dispatch) {
        fetch(`${API}clients/businesses/${user_id}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(resp => resp.json())
            .then(clientBusinesses => dispatch({ type: GET_CLIENT_BUSINESSES, payload: clientBusinesses }))
    }
}