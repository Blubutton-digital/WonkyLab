import React, { useMemo } from "react";
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  LoadScript,
  useLoadScript,
} from "@react-google-maps/api";

import GoogleMapReact from "google-map-react";
const AnyReactComponent = ({ text }) => (
  <div className="h-10 w-10 rounded-full bg-wonky">{text}</div>
);

const Map = () => {
  //   const { isLoaded } = useLoadScript({
  //     googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  //     // googleMapsApiKey: "AIzaSyBjBmjnxX5gF6jimkf5cUSYgNuLaKlE2v0",
  //   });

  //   const containerStyle = {
  //     position: "relative",
  //     width: "100%",
  //     height: "100%",
  //   };

  //   // const center = {
  //   //   lat: -3.745,
  //   //   lng: -38.523,
  //   // };
  //   const center = useMemo(() => ({ lat: 44, lng: -80 }), []);

  //   if (!isLoaded) return <div>Loading....</div>;
  //   else
  //     return (
  //       <GoogleMap
  //         zoom={10}
  //         cemter={center}
  //         mapContainerClassName={containerStyle}
  //       ></GoogleMap>
  //     );

  const defaultProps = {
    center: {
      lat: 53.36855456847174,
      lng: -1.5241910548663324,
    },
    zoom: 16,
  };

  // 53.36855456847174, -1.5241910548663324

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "100%", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent lat={53.36855456847174} lng={-1.5241910548663324} />
      </GoogleMapReact>
    </div>
  );
};

export default Map;
