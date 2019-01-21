let currentUser;
let my_biz;
let clients;

try{
    currentUser = JSON.parse(localStorage.getItem("user"))
    clients = JSON.parse(localStorage.getItem("clients"))
    my_biz = JSON.parse(localStorage.getItem("myBiz"))
}catch(error){
    currentUser = null
    clients = null
    my_biz = null
}

export const initialState = {
    currentUser,
    clients,
    my_biz
}