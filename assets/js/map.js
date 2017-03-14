var map;


function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -22.903969, lng: -43.176608},
    zoom: 15
  });

  var marker = new google.maps.Marker({
    position: {lat: -22.903969, lng: -43.176608},
    map: map,
    title: "Gensoftware"
  });
}

