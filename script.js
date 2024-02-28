if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
  } else {
    console.error("Geolocation is not supported by this browser.");
  }
  
  let map,lat,lon;
  
  function successCallback(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    lat=latitude;
    lon=longitude;
  
    console.log("Latitude: " + latitude);
    console.log("Longitude: " + longitude);
  
    initializeMap(latitude, longitude);
  }
  
  function errorCallback(error) {
    switch (error.code) {
      // Handle errors when obtaining geolocation
    }
  }
  
  function initializeMap(latitude, longitude) {
    map = L.map('map').setView([latitude, longitude], 13);
  
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
    }).addTo(map);

    var popup = L.popup()
    .setLatLng([latitude, longitude])
    .setContent("You are here")
    .openOn(map);
  }
  var marker;
  var popup;
  var content=[];
  function pin(){
    marker = L.marker([lat, lon]).addTo(map);
    var text=document.querySelector('#textarea').value;
    content.push(text);
    popup = L.popup()
    .setLatLng([lat, lon])
    .setContent(text)
    .openOn(map);
    document.querySelector(".popup").style.display="none";
    marker.on('click', function () {
      var index = content.length - 1;
      var popupContent = content[index];

      // Open the stored popup content
      console.log(popupContent);
      popup = L.popup().setLatLng([lat, lon]).setContent(popupContent).openOn(map);
    });
  }
  
let btn=document.getElementById('button');

function hide(){
  document.querySelector(".login").style.width="0px";
  document.querySelector("#button").style.display="none";
  document.querySelector("#main").style.backgroundColor="rgba( 255, 255, 255, 0.25 )";
  // document.querySelector("#main").style.display="none";
  setInterval(function () {document.querySelector("#main").style.display="none"}, 2000);

  document.querySelector("#h1").innerHTML=" ‎ ";
}

function cancel(){
  document.querySelector(".popup").style.display="none";
}
function func(){
  document.querySelector(".popup").style.display="flex";
}