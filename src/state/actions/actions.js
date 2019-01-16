import { MAKE_TEST_FALSE, MAKE_TEST_TRUE, LOGIN_USER, LOGOUT_USER, SIGNUP_USER } from "./types";



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

export const logout = () => {
    return {
        type: LOGOUT_USER
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
            .then(user => dispatch({ type: SIGNUP_USER, payload: user }))
    }
}
