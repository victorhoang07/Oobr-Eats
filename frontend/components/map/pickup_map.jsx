import React, {useEffect} from "react";
import MarkerManager from "../../util/marker_manager";
import { withRouter } from "react-router-dom";
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
        this.map = new google.maps.Map(this.mapNode, mapOptions);
        this.MarkerManager = new MarkerManager(this.map, this.handleMarkerClick.bind(this));
    }

    handleMarkerClick(bench) {
        this.props.history.push(`benches/${bench.id}`);
    }

    render() {
        return (
            <div id="map-container" ref={map => this.mapNode = map}/>
        )
    }
}

export default withRouter(PickupMap)