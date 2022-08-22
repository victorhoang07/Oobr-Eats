class MarkerManager {
  constructor(map, handleClick){
    this.map = map;
    this.handleClick = handleClick;
    this.markers = {};
  }

  updateMarkers(restaurants){
    const restaurantObj = {};
    restaurants.forEach(bench => benchesObj[bench.id] = bench);

    restaurants
      .forEach(newRestaurant => this.createMarkerFromRestaraunt(newRestaurant, this.handleClick))

//     Object.keys(this.markers)
//       .filter(benchId => !benchesObj[benchId])
//       .forEach((benchId) => this.removeMarker(this.markers[benchId]))
  }

    createMarkerFromRestaraunt(restaurant) {
    const position = new google.maps.LatLng(restaurant.lat, restaurant.lng);
    const marker = new google.maps.Marker({
      position,
      map: this.map,
      restaurantId: restaurant.id
    });

    marker.addListener('click', () => this.handleClick(restaurant));
    this.markers[marker.restaurantId] = marker;
  }

}

export default MarkerManager