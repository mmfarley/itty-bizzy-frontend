let currentUser;

try{
    currentUser = JSON.parse(localStorage.getItem("user"))
}catch(error){
    currentUser = null
}

export const initialState = {
    currentUser
}