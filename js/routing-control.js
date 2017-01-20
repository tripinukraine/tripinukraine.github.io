// Add Geocoder
L.Control.geocoder().addTo(mymap);


L.Routing.control({
	waypoints: [
    L.latLng(49.98315, 36.23913),
    L.latLng(46.47304, 30.75095)
  ],
    routeWhileDragging: true,
    geocoder: L.Control.Geocoder.nominatim()
}).addTo(mymap);