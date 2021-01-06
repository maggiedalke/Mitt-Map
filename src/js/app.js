// ApiKey pk.eyJ1IjoibWFnZ2llb3MiLCJhIjoiY2tqbGp5ZTV0NHE2MjJycDliM3ZjcWo5YSJ9.Mmc37_rqim4SCBRJX6Y_7Q

// API CALL
let longitude;
let latitude;

const getUserPosition = () => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition((position) => {
      longitude = position.coords.longitude;
      latitude = position.coords.latitude;

      resolve('completed');
    });
  });
};

getUserPosition().then((response) => {
  mapboxgl.accessToken =
    'pk.eyJ1IjoibWFnZ2llb3MiLCJhIjoiY2tqbGp5ZTV0NHE2MjJycDliM3ZjcWo5YSJ9.Mmc37_rqim4SCBRJX6Y_7Q';
  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [longitude, latitude],
    zoom: 12,
  });

  let marker = new mapboxgl.Marker()
    .setLngLat([longitude, latitude])
    .addTo(map);
});
