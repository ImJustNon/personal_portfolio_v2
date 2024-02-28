function saveGuestName(name){
    localStorage.setItem("guest_name", String(name));
}

function removeGuestName(){
    localStorage.removeItem("guest_name");
}

function getGuestName(){
    localStorage.getItem("guest_name");
}

export {
    saveGuestName,
    removeGuestName,
    getGuestName
}