
const LIGHT_CIRCLE = {
  path: google.maps.SymbolPath.CIRCLE,
  scale: 15,
  fillColor: "#FFFFFF",
  strokeColor: "#FFFFFF",
  fillOpacity: 1.0,
  strokeWeight: 0.4,
}

const DARK_CIRCLE = {
  path: google.maps.SymbolPath.CIRCLE,
  scale: 15,
  fillColor: "#000000",
  strokeColor: "#000000",
  fillOpacity: 1.0,
  strokeWeight: 0.4
}

class MarkerManager {
  constructor(map, handleClick){
    this.map = map;
    this.handleClick = handleClick;
  }

    updateMarkers(restaurants){
        Object.values(restaurants || {}).forEach(newRestaurant => 
            {
                this.createMarkerFromRestaurant(newRestaurant, this.handleClick)
            })
    }

    createMarkerFromRestaurant(restaurant) {
        const position = new google.maps.LatLng(restaurant.lat, restaurant.lng);
        const marker = new google.maps.Marker({
            position,
            map: this.map,
            title: restaurant.name,
            label: {
                text: `${restaurant.rating}`,
                color: "black"
            },
            icon: LIGHT_CIRCLE,
        });

        marker.addListener('click', () => this.handleClick(restaurant));
        marker.addListener('mouseover', () => {
            const label = marker.getLabel();
            label.color = "white"
            marker.setLabel(label);
            marker.setIcon(DARK_CIRCLE);
        })
        marker.addListener('mouseout', () => {
            const label = marker.getLabel();
            label.color = "black"
            marker.setLabel(label);
            marker.setIcon(LIGHT_CIRCLE);
        })

        const infoWindowContent = 
            `<div class="marker-content">` +
                    `<img src="${restaurant.img_url}" class="marker-img" />` +
                    `<br/>` +
                    `<div class="marker-info-container">` +
                        `<div class="marker-title">${restaurant.name}</div>` +
                        `<div class="marker-rating">${restaurant.rating}</div>` +
                    `</ div>` +
            `</div>`;
        
        const infoWindow = new google.maps.InfoWindow({
            content: infoWindowContent,
            maxWidth: 250
        })

        marker.addListener("mouseover", () => {
            infoWindow.open({
                anchor: marker,
                map: this.map,
                shouldFocus: false
            })
        })

        marker.addListener("mouseout", () => {
            infoWindow.close()
        })
  }

}

export default MarkerManager