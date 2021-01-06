let longitude,
  latitude,
  marker,
  form,
  list,
  search;

// API CALLS
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

const getPOI = function (search) {
  return fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${search}.json?types=poi&proximity=${longitude}%2c${latitude}&limit=10&access_token=pk.eyJ1IjoibWFnZ2llb3MiLCJhIjoiY2tqbGp5ZTV0NHE2MjJycDliM3ZjcWo5YSJ9.Mmc37_rqim4SCBRJX6Y_7Q`)
    .then(response => response.json())
    .then(data => data.features)
    .then(data => {
      data.forEach(poi => {
        poi.distance = getDistance(latitude, longitude, poi.geometry.coordinates[1], poi.geometry.coordinates[0])
      })
      data.sort((a, b) => a.distance - b.distance)
      return(data)
  })
  .catch(err => `err: ${err}`)
}

//Code sourced from geodatasoruce.com
function getDistance(lat1, lon1, lat2, lon2, unit = `K`) {
  if ((lat1 == lat2) && (lon1 == lon2)) {
    return 0;
  }
  else {
    var radlat1 = Math.PI * lat1 / 180;
    var radlat2 = Math.PI * lat2 / 180;
    var theta = lon1 - lon2;
    var radtheta = Math.PI * theta / 180;
    var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    if (dist > 1) {
      dist = 1;
    }
    dist = Math.acos(dist);
    dist = dist * 180 / Math.PI;
    dist = dist * 60 * 1.1515;
    if (unit == "K") { dist = dist * 1.609344 }
    if (unit == "N") { dist = dist * 0.8684 }
    return dist;
  }
}

const listSearches = function (search) {
  list.innerHTML = ``;
  getPOI(search)
  .then(poiList => poiList.forEach((poi) => {
    console.log(poi)
    list.innerHTML +=
    `<li class="poi" data-long="${poi.geometry.coordinates[0]}"data-lat="${poi.geometry.coordinates[1]}">
      <ul>
        <li class="name">${poi.text}</li>
        <li class="street-address">${poi.properties.address}</li>
        <li class="distance">${poi.distance.toFixed(2)}KM</li>
      </ul>
    </li>`
  })
  )
}

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


window.addEventListener('DOMContentLoaded', (e) => {
  form = document.querySelector(`#search`);
  search = document.getElementsByTagName(`input`)[0];
  list = document.querySelector(`.points-of-interest`)

  form.addEventListener(`submit`, e => {
    e.preventDefault();
    listSearches(search.value)
  })
});