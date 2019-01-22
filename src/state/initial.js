let currentUser;
let my_biz;
let clients;

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

export const initialState = {
    currentUser,
    clients,
    my_biz
}