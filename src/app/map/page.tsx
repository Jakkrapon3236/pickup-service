"use client";
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { useState } from 'react';

const containerStyle = {
  width: '100%',
  height: '100vh', // เปลี่ยนเป็น 100vh เพื่อให้แผนที่เต็มจอ
};

const center = {
  lat: 16.475206028861912,
  lng: 99.50818040374983
};

function MapComponent() {
  const [map, setMap] = useState<google.maps.Map | null>(null);

  const onLoad = (map: google.maps.Map | null) => {
    setMap(map);
  };

  const onUnmount = () => {
    setMap(null);
  };

  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? ''}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={15}
          onLoad={onLoad}
          onUnmount={onUnmount}
        >
          { /* Child components, such as markers, info windows, etc. */ }
        </GoogleMap>
      </LoadScript>
    </div>
  );
}

export default MapComponent;
