import {
    MAKE_TEST_FALSE,
    MAKE_TEST_TRUE,
    LOGIN_USER,
    LOGOUT_USER,
    GET_CONVERSATIONS,
    SEND_MESSAGE,
    SET_USER
} from "./types";



export const makeFalse = () => {
    return {
        type: MAKE_TEST_FALSE
    }
}

export const makeTrue = () => {
    return{
        type: MAKE_TEST_TRUE
    }
}

export const login = (loggingUser) => {
    return function (dispatch) {
        fetch('http://localhost:3000/api/v1/auth', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(loggingUser)
        })
            .then(resp => resp.json())
            .then(user => dispatch({ type: LOGIN_USER, payload: user }))
    }
}


export const signup = (loggingUser) => {
    return function (dispatch) {
        fetch('http://localhost:3000/api/v1/users', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(loggingUser)
        })
            .then(resp => resp.json())
            .then(user => dispatch({ type: LOGIN_USER, payload: user }))
    }
}

export const logout = () => {
    return {
        type: LOGOUT_USER
    }
}

export const getConversations = (user_id) => {
    return function (dispatch) {
        fetch(`http://localhost:3000/api/v1/messages/user/${user_id}`, {
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
        fetch('http://localhost:3000/api/v1/messages', {
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

