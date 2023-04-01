import { LocationContext } from '@/context/LocationContext'
import { useContext } from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

export function MapOrg() {
  const { orgCoordinates } = useContext(LocationContext)

  const latitudeNumber = Number(orgCoordinates?.latitude)
  const longitudeNumber = Number(orgCoordinates?.longitude)

  return (
    <>
      {orgCoordinates ? (
        <MapContainer
          center={[latitudeNumber, longitudeNumber]}
          zoom={13}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[latitudeNumber, longitudeNumber]}>
            <Popup>Localização da organização.</Popup>
          </Marker>
        </MapContainer>
      ) : (
        <p>Localização não encontrado</p>
      )}
    </>
  )
}
