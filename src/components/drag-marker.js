import React, { useState, useRef, useCallback, useMemo } from 'react';
import { Marker, Popup } from 'react-leaflet'
import {iconProps} from '../utils/icon'

export default function DraggableMarker(props) {
    const [draggable, setDraggable] = useState(false)
    const [position, setPosition] = useState([props.data.lat, props.data.long])
    const markerRef = useRef(null)
    const eventHandlers = useMemo(
      () => ({
        dragend() {
          const marker = markerRef.current
          if (marker != null) {
            setPosition(marker.getLatLng())
          }
        },
      }),
      [],
    )
    const toggleDraggable = useCallback(() => {
      setDraggable((d) => !d)
    }, [])
  
    const mapIcon = (icon) => {
      return iconProps(icon)
    }
    return (
      <Marker
        draggable={true}
        eventHandlers={eventHandlers}
        position={position}
        ref={markerRef}
        icon={mapIcon(props.data.name)}
      >
        <Popup minWidth={90}>
          <span>{props.data.des}</span>
        </Popup>
      </Marker>
    )
  }