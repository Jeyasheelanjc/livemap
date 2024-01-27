mapboxgl.accessToken = 'pk.eyJ1IjoiamV5YXNoZWVsYW4iLCJhIjoiY2xydnAyOXhxMGZ2ZTJrdGtraHd1aWJjMSJ9.X_ATxATkkIcDsDU51r1t-g';

navigator.geolocation.getCurrentPosition(success, error, { enableHighAccuracy: true })
function success(position) {
    console.log(position);
    setUpMap([position.coords.longitude, position.coords.latitude])
}
function error() {
    // setUpMap([11.022514545005167, 76.96978898641858])
}

function setUpMap(center) {
    // Map
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: center,
        zoom: 15
    });
    
    const nav = new mapboxgl.NavigationControl()
    map.addControl(nav, 'bottom-left')

    map.addControl(
        new MapboxDirections({
            accessToken: mapboxgl.accessToken
        }),
        'top-left'
    );

    // currentLocation
    map.addControl(
        new mapboxgl.GeolocateControl({
            positionOptions: {
                enableHighAccuracy: true
            },
            // When active the map will receive updates to the device's location as it changes.
            trackUserLocation: true,
            // Draw an arrow next to the location dot to indicate which direction the device is heading.
            showUserHeading: true
        }),'bottom-right'
    );

}