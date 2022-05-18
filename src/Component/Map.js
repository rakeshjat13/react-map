import React,{useRef, useEffect, useState } from "react";


export default function MyMapComponent() {
    const ref = useRef(null);
    console.log("ref", ref);
    const [map, setMap] = useState();
    const LatLng = {lat: -23.6993287, lng:133.8691865};
        var mapOptions = {
            center: LatLng,
            zoom: 5
        };
    useEffect(() => {
        if (ref.current && !map) {
            setMap(new window.google.maps.Map(ref.current, mapOptions));
          }
    }, [ref, map]);
  
    return <div ref={ref} id="map" style={{height:'100%'}} />;
    // return(
    //     <div>Hello</div>
    // )
  }