import React, { useState } from 'react';
import { Circle, Tooltip, useMapEvents } from 'react-leaflet'

export default function CircleMarker() {

    const [position, setPosition] = useState(null)
  
    const map = useMapEvents({
      click() {
        map.locate()
      },
  
      locationfound(e) {
        setPosition(e.latlng)
        map.flyTo(e.latlng, map.getZoom())
      },
    })
  
    return position === null ? null : (
      <Circle center={position} radius={20}>
        <Tooltip permanent>u r here</Tooltip>
      </Circle>
    )
}
