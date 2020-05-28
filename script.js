const iss_url = "https://api.wheretheiss.at/v1/satellites/25544";
var mymap = L.map('mapid').setView([51.505, -0.09], 2);
var tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});
tiles.addTo(mymap);
var myIcon = L.icon({
    iconUrl: 'iss.png',
    iconSize: [50, 32],
    iconAnchor: [25, 16],

});
const marker = L.marker([0, 0], { icon: myIcon }).addTo(mymap);
async function getdata() {
    const response = await fetch(iss_url);
    const data = await response.json();
    const { latitude, longitude } = data;
    mymap.setView([latitude, longitude], 4);
    marker.setLatLng([latitude, longitude]);
}
getdata();
setInterval(getdata, 1000);