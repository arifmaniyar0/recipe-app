import React from 'react'
import {MapContainer,TileLayer,Marker,Popup} from 'react-leaflet';
function Map() {
    // const map = useMap();
    return (
        <MapContainer center={[27.825730, 75.026876]} zoom={12} scrollWheelZoom={false}>
        <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[27.825730, 75.026876]}>
            <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
        </Marker>
        </MapContainer>
    )
}

export default Map
