let map = null;
const button = document.getElementById('find-location');
function initMap () {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 12,
    });
}


button.addEventListener("click", getLocation);
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            updateMap(position.coords.latitude, position.coords.longitude);
        });
    }
}

function updateMap(lat, lng) {
    map.setCenter(new google.maps.LatLng(lat, lng));
    const goldenGatePosition = {lat: lat,lng: lng};
    const marker = new google.maps.Marker({
        position: goldenGatePosition,
        map: map,
        title: '❤️ Position'
        });
}

 