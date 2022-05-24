import React,{useRef, useEffect, useState } from "react";
import {scrollToDiv} from "../core/common"

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
    const deactiveMarkerImg = "/assets/img/marker.png";
    const activeMarkerImg = "/assets/img/active-marker.png";
    function createSingleMarker(){
        LocationArr.map((val) => {
            // console.log("lat ", parseFloat(val.latitude), " Lng ", parseFloat(val.longitude))
            let m = new window.google.maps.Marker({
                position: {lat: parseFloat(val.latitude), lng:parseFloat(val.longitude)},
                map,
                icon: deactiveMarkerImg,
                detail: val,
                title: val.title,
                markerID:val.id
            });
            console.log("marker", m);
            m.addListener("mouseover", (mObj) => {
                console.log("mobj", mObj);
                props.fun('markerRef', mObj);
                scrollToDiv(`single-${m.detail.id}`)
                m.setIcon(activeMarkerImg);
            })

            m.addListener("mouseout", () => {
                m.setIcon(deactiveMarkerImg);
            })

            bounds.extend(m.getPosition());
        })
        map.fitBounds(bounds);
    }
  
    return <div ref={ref} id="map" style={{height:'100%'}} />;
    // return(
    //     <div>Hello</div>
    // )
  }