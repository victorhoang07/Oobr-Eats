import React, {useEffect} from "react";

const CENTER =  {
        lat: 40.734037,
        lng: -73.966614
        }

    const mapOptions = {
        center: CENTER,
        zoom: 13.5,
        streetViewControl: false,
        mapTypeControl: false,
        fullscreenControl: false,
        keyboardShortcuts: false,
        backgroundColor: "none",
        minZoom: 13,
        maxZoom: 14,
        gestureHandling: 'greedy',
    };

class PickupMap extends React.Component {
    constructor(props) {
        super(props)

        this.map;
    }
   

    componentDidMount() {
       
        // wrap this.mapNode in a Google Map
        this.map = new google.maps.Map(this.mapNode, mapOptions);
    }


    render() {
        return (
            <div id="map-container" ref={map => this.mapNode = map}/>
        )
    }
}

export default PickupMap