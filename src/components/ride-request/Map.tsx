import { GoogleMap, Marker } from '@react-google-maps/api';


interface LocationProps {
    latitude: number
    longitude: number
}
const Map: React.FC<LocationProps> = ({ latitude, longitude }) => {
  const mapContainerStyle = {
    width: '100%',
    height: '400px',
  };

  const center = {
    lat: latitude,
    lng: longitude,
  };

  return (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      center={center}
      zoom={10}
    >
      <Marker position={center} />
    </GoogleMap>
  );
};

export default Map;
