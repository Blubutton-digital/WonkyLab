import React from "react";
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  LoadScript,
} from "@react-google-maps/api";

const Map = () => {
  //   const { isLoaded } = useJsApiLoader({
  //     id: "google-map-script",
  //     googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  //     // googleMapsApiKey: "AIzaSyBjBmjnxX5gF6jimkf5cUSYgNuLaKlE2v0",
  //   });

  const containerStyle = {
    width: "400px",
    height: "400px",
  };

  const center = {
    lat: -3.745,
    lng: -38.523,
  };
  //   if (!isLoaded) return <div>Loading....</div>;
  //   else
  //     return (
  //       <GoogleMap
  //         zoom={10}
  //         cemter={center}
  //         mapContainerClassName={containerStyle}
  //       ></GoogleMap>
  //     );

  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
      <GoogleMap
        zoom={10}
        cemter={center}
        mapContainerClassName="map rounded-md"
      ></GoogleMap>
    </LoadScript>
  );
};

export default Map;
