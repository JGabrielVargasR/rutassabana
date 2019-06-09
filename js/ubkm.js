function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
        window.alert("Este navegador no soporta Geolocalización");
    }
}