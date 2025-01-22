
let h2 = document.querySelector('h2');
var map;


function sucess(pos){
    console.log(pos.coords.latitude, pos.coords.longitude);
    h2.textContent = `Latitue:${pos.coords.latitude}, Longitude:${pos.coords.longitude}`;

    if (map === undefined){
        map = L.map('mapid').setView([pos.coords.latitude, pos.coords.longitude], 13);
    } else {
        map = L.map('mapid').setView([pos.coords.latitude, pos.coords.longitude], 13);
    }

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

    L.marker([pos.coords.latitude, pos.coords.longitude]).addTo(map).bindPopup('A localização atual.').openPopup();
}

function error(err){
    console.log(err);
}

var watchID = navigator.geolocation.watchPosition(sucess, error, {
    enableHighAccuracy: true,
    timeout: 5000
});


