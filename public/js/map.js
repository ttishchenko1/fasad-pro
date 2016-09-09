function initialize() {
	var latlng = new google.maps.LatLng(50.452962, 30.524395);
	var centerLatlng = new google.maps.LatLng(50.455136, 30.524322);
	var mapProp = {
		scrollwheel: false,
		center: centerLatlng,
		zoom: 15,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);

	var marker = new google.maps.Marker({
    	position: latlng
	});
	marker.setMap(map);

	var infowindow = new google.maps.InfoWindow({
  		content:"<br><strong>Fasad-Pro</strong><br>ул. Костельная 13<br>Добро, пожаловать к нам!"
  	});
	infowindow.open(map,marker);
}
google.maps.event.addDomListener(window, 'load', initialize);