let currentUser;
let my_biz;
let clients;
let appointments;

try{
    currentUser = JSON.parse(localStorage.getItem("user"))
}catch(error){
    currentUser = null
}

try {
    clients = JSON.parse(localStorage.getItem("clients"))
} catch (error) {
    clients = null
}

try {
    my_biz = JSON.parse(localStorage.getItem("myBiz"))
} catch (error) {
    my_biz = null
}

try {
    appointments = JSON.parse(localStorage.getItem("appointments"))
} catch (error) {
    appointments = null
}

export const initialState = {
    currentUser,
    clients,
    my_biz,
    appointments
}