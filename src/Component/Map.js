import React,{useRef, useEffect, useState } from "react";


export default function MyMapComponent(props) {
    // console.log("props map", props.LocationArr)
    const LocationArr = props.LocationArr;
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
        if(map){
            createSingleMarker();
        }

    }, [ref, map]);

    const bounds = new window.google.maps.LatLngBounds();

    function createSingleMarker(){
        LocationArr.map((val) => {
            // console.log("lat ", parseFloat(val.latitude), " Lng ", parseFloat(val.longitude))
            let m = new window.google.maps.Marker({
                position: {lat: parseFloat(val.latitude), lng:parseFloat(val.longitude)},
                map,
                icon: "/assets/img/map-marker1.ico",
            });

            bounds.extend(m.getPosition());
        })
        map.fitBounds(bounds);
    }
  
    return <div ref={ref} id="map" style={{height:'100%'}} />;
    // return(
    //     <div>Hello</div>
    // )
  }