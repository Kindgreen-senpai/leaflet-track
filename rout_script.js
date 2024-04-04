let map = L.map('map');
var is_map_sat = 1;

//set up
var mapLink = '<a href="http://www.esri.com/">Esri</a>';
var wholink = 'i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community';

var baseline = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
});

var satelite = L.tileLayer(
    'http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    attribution: '&copy; ' + mapLink + ', ' + wholink,
    maxZoom: 18,
});
map.addLayer(baseline);


L.Control.geocoder().addTo(map);

var routeControl = L.Routing.control({
    waypoints: [
        L.latLng(46.48195392047000, 30.725802494375000),
        L.latLng(46.48934111200000, 30.741681172100000)
    ],
    routeWhileDragging: true,
    geocoder: L.Control.Geocoder.nominatim()
}).addTo(map);


//change map button
document.getElementById('change_map_btn').onclick = function (e) {
    if (is_map_sat == 1) {
        map.removeLayer(satelite);
        map.addLayer(baseline);
        is_map_sat = 0;
        document.getElementById('change_map_btn').innerHTML = "Roadmap";
    }
    else if (is_map_sat == 0) {
        map.removeLayer(baseline);
        map.addLayer(satelite);
        is_map_sat = 1;
        document.getElementById('change_map_btn').innerHTML = "Satellite ESRI";
    }

}
