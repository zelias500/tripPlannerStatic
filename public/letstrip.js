function initialize_gmaps() {
    // initialize new google maps LatLng object
    var myLatlng = new google.maps.LatLng(40.705189,-74.009209);
    // set the map options hash
    var mapOptions = {
        center: myLatlng,
        zoom: 16,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    // get the maps div's HTML obj
    var map_canvas_obj = document.getElementById("map-canvas");
    // initialize a new Google Map with the options
    var map = new google.maps.Map(map_canvas_obj, mapOptions);

    var imgHotel = "https://cdn2.iconfinder.com/data/icons/hotel-and-restaurant-solid-icons-vol-1/64/001-48.png";
    var imgFood = "https://cdn4.iconfinder.com/data/icons/multisizeicon-vol-03-1/512/baru-34-48.png"
    var imgActivity = "https://cdn1.iconfinder.com/data/icons/food-drink-7/100/FD_align-02-48.png"
    placeIcon(imgHotel, 40.713427, -73.993624, "Hotel 91");
    placeIcon(imgFood,40.729269,-74.003875, "Mas Farmhouse");
    placeIcon(imgFood,40.714601,-73.997761, "Joe's Shanghai");
    placeIcon(imgActivity,40.732204,-73.998649, "Washington Square Park");
    placeIcon(imgActivity,40.729373,-73.992104, "Blue Man Group");
    placeIcon(imgActivity,40.707119,-74.003602, "South Street Seaport");

    function placeIcon(imgUrl, lat, long, title){
        var myLatlng = new google.maps.LatLng(lat,long);
        var marker = new google.maps.Marker({
            position: myLatlng,
            title: title,
            icon: imgUrl
        });
        marker.setMap(map);
    }
}

$(document).ready(function() {
    initialize_gmaps();
    $(".drag-me").draggable({containment: "window"})
    $(".day-info").resizable();
});

