function panelek(db){
    const panelek=document.getElementById('panelek');
    panelek.innerHTML="";
    for (i = 0; i < db; i++) {
        panelek.innerHTML += "<img src='pics\\napelem_ikon.png'>"; 
    }
    panelek.innerHTML += "<br>"
    panelek.innerHTML += "("+db+" db)";
    document.getElementById('osszteljesitmeny').value = db * 275;
    document.getElementById("tetofelulet").value = db * 3,5
}
panelek(8)