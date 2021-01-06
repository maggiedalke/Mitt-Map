let longitude,
    latitude,
    marker;

    // API CALL
const getUserPosition = () => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition((position) => {
      if (position != undefined) {
        longitude = position.coords.longitude;
        latitude = position.coords.latitude;

        resolve('completed');
      } else {
        reject('could not get position');
      }
    });
  });
};

getUserPosition()
  .then(() => displayMap());

const displayMap = function () {
  mapboxgl.accessToken =
    'pk.eyJ1IjoibWFnZ2llb3MiLCJhIjoiY2tqbGp5ZTV0NHE2MjJycDliM3ZjcWo5YSJ9.Mmc37_rqim4SCBRJX6Y_7Q';
  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [longitude, latitude],
    zoom: 12,
  });

    marker = new mapboxgl.Marker()
    .setLngLat([longitude, latitude])
    .addTo(map);
}
