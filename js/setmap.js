// Set map view

var mymap = L.map('map').setView([49.00, 32.00], 8);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
            attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
            maxZoom: 18, 
            id: 'aero-kirya.137n8jma', 
            accessToken: 'pk.eyJ1IjoiYWVyby1raXJ5YSIsImEiOiJjaXJwMThreDEwMDk1aGpuaHJsajQxNWJpIn0.VEEUkusLyrjVlhTeJRopRw#13/49.9845/36.2265'
                }).addTo(mymap);

// Markers

// Events

var popup = L.popup();

function onMapClick(e) {
	popup
		.setLatLng(e.latlng)
		.setContent('Вы ткнули по карте в точке с координатами: ' + e.latlng.toString() +
					' В скором времени будет добавлено детальное описание этого места!')
		.openOn(mymap);
}

mymap.on('click', onMapClick);