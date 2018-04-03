function init(){
  var latlng = new google.maps.LatLng(-43.552965, 172.47315);
  var myOptions = {
    zoom: 10,
    center: latlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  map = new google.maps.Map(document.getElementById("map"), myOptions);
}
google.maps.event.addDomListener(window, 'load', init);