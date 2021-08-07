import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

import DraggableMarker from './drag-marker'
import PermissionWrapper from '../hocs/permission-hoc'

import { request } from '../utils/http-request'


const MapComponent = () => {

  const [objects, setObjects] = useState([]);

  const getObjects = async() => {
    const result = await request('get', '/');
    setObjects(result['result']);
  }
  useEffect(() => {
    getObjects();
  }, [])
  return (
    <>
       <MapContainer center={[13.7218137, 100.5546136]} zoom={15} scrollWheelZoom={true} style={{ height: '600px', width: '900px' }}>
         <TileLayer
           attribution='&copy; <a href="http:osm.org/copyright">OpenStreetMap</a> contributors'
           url="https:{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
         />
        {objects.map((i, key) => <DraggableMarker key={key} data={i}/> )}
       </MapContainer>
     </>
  )
}
const Map = PermissionWrapper()(MapComponent);
export default Map;


