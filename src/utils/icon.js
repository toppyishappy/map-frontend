import MapMarker from '../icons/map-marker.png'
import L from 'leaflet'

export const iconProps = (name) => {
    
    switch (name) {
        case 'police':
            return new L.icon({
                iconUrl: MapMarker,
                iconSize: [40, 40],
            })
        default:
            return new L.icon({
                iconUrl: MapMarker,
                iconSize: [40, 40],
            })
    }
    
    
}

