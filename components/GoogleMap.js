import React, { useEffect, useRef } from 'react';

const GoogleMap = ({ center, zoom }) => {
  const mapRef = useRef(null);
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  useEffect(() => {
    if (apiKey && window.google) {
      new window.google.maps.Map(mapRef.current, {
        center,
        zoom,
      });
    }
  }, [apiKey, center, zoom]);

  return <div ref={mapRef} style={{ width: '100%', height: '400px' }} />;
};

GoogleMap.defaultProps = {
  center: { lat: 0, lng: 0 },
  zoom: 8,
};

export default GoogleMap;
