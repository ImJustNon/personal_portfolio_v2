function saveGuestName(name){
    return localStorage.setItem("guest_name", String(name));
}

function removeGuestName(){
    return localStorage.removeItem("guest_name");
}

function getGuestName(){
    return localStorage.getItem("guest_name");
}

export {
    saveGuestName,
    removeGuestName,
    getGuestName
}