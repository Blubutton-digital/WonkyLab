// import React, { useMemo } from "react";
// import {
//   GoogleMap,
//   useJsApiLoader,
//   Marker,
//   LoadScript,
//   useLoadScript,
// } from "@react-google-maps/api";

// import GoogleMapReact from "google-map-react";
// const AnyReactComponent = ({ text }) => (
//   <div className="h-2 w-2 rounded-full bg-wonky">{text}</div>
// );

// const Map = () => {
//   const defaultProps = {
//     center: {
//       lat: 53.36855456847174,
//       lng: -1.5241910548663324,
//     },
//     zoom: 16,
//   };

//   // 53.36855456847174, -1.5241910548663324

//   return (
//     // Important! Always set the container height explicitly
//     <div style={{ height: "100%", width: "100%" }}>
//       <GoogleMapReact
//         bootstrapURLKeys={{ key: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY }}
//         defaultCenter={defaultProps.center}
//         defaultZoom={defaultProps.zoom}
//       >
//         <AnyReactComponent lat={53.36855456847174} lng={-1.5241910548663324} />
//       </GoogleMapReact>
//     </div>
//   );
// };

// export default Map;

import React from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const center = {
  lat: 53.36855456847174,
  lng: -1.5241910548663324,
};

function Map() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyDsUEsrZncwbtsYlKVkAcjBoNMpmHKFv5A",
  });

  return isLoaded ? (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
      {/* Child components, such as markers, info windows, etc. */}
      <Marker
        position={{
          // lat: 53.27166370701738,
          // lng: -1.440071166852214,
          lat: 53.36842339005663,
          lng: -1.5245023808390479,
        }}
        title="Wonky Labrador"
      />
    </GoogleMap>
  ) : (
    <></>
  );
}

export default React.memo(Map);
