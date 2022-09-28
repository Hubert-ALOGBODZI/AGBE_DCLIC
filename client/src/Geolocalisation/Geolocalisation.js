// import React from "react";
// // import { MapContainer, TileLayer } from "react-leaflet";
// import { MapContainer, TileLayer, Marker, Popup  } from 'react-leaflet'

// import "../Geolocalisation/Geolocalisation.css"

// const Geolocalisation = () => {
//     const position = [51.505, -0.09];

//   return(


//       <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
//         <TileLayer
//           attribution='&copy; <a href="https://goo.gl/maps/X6FpHN354HfT5n1p8">OpenStreetMap</a> contributors'
//           url="https://goo.gl/maps/X6FpHN354HfT5n1p8"
//         />
//         <Marker position={position}>
//           <Popup>
//             A pretty CSS3 popup. <br /> Easily customizable.
//           </Popup>
//         </Marker>
//       </MapContainer>
  


// //     <MapContainer center={[40.505, -100.09]} zoom={13} >
  
// //     <TileLayer
// //       attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
// //       url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
// //      />
// //    <Marker position={[40.505, -100.09]}>
// //         <Popup>
// //           I am a pop-up!
// //         </Popup>
// //     </Marker>
// //   </MapContainer>
  
// )};

// export default Geolocalisation;

// // // import React , { Component }from 'react'
// // // import { Map as LeafletMap, TileLayer,  Marker, Popup } from 'react-leaflet';
// // // // import './map-component.css';

// // // const Geolocalisation = () => {

// // //     const position = [51.505, -0.09]
// // //     return (

// // //         <div className="leaflet-container"

// // //         style={{

// // //                 height: "400px",
// // //                 width: "400px"
// // //         }}

// // //         >

// // //           <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
// // //             <TileLayer
// // //               attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
// // //               url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
// // //             />
// // //             <Marker position={position}>
// // //               <Popup>
// // //                 A pretty CSS3 popup. <br /> Easily customizable.
// // //               </Popup>
// // //             </Marker>
// // //           </MapContainer>,

// // // {/*
// // //       <LeafletMap
// // //         center={[60, 10]}
// // //         zoom={6}
// // //         maxZoom={10}
// // //         attributionControl={true}
// // //         zoomControl={true}
// // //         >
// // //         <TileLayer
// // //           url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
// // //           />
// // //         <Marker position={[60, 10]}>
// // //           <Popup>
// // //             Popup for any custom information.
// // //           </Popup>
// // //         </Marker>
// // //       </LeafletMap> */}
// // //           </div>
// // //     );
// // //   }

// // // export default Geolocalisation

// // function Geolocalisation() {
// //     const [position, setPosition] = useState(null)
// //     const map = useMapEvents({
// //       click() {
// //         map.locate()
// //       },
// //       locationfound(e) {
// //         setPosition(e.latlng)
// //         map.flyTo(e.latlng, map.getZoom())
// //       },
// //     })

// //     return position === null ? null : (
// //       <Marker position={position}>
// //         <Popup>You are here</Popup>
// //       </Marker>
// //     )
// //   }

// //   render(
// //     <MapContainer
// //       center={{ lat: 51.505, lng: -0.09 }}
// //       zoom={13}
// //       scrollWheelZoom={false}>
// //       <TileLayer
// //         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
// //         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
// //       />
// //       <LocationMarker />
// //     </MapContainer>,
// //   )
// //   export default Geolocalisation
