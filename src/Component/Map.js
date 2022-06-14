import React,{useRef, useEffect, useState } from "react";
import {scrollToDiv} from "../core/common"
import { useNavigate } from "react-router-dom";

export default function MyMapComponent(props) {
    // console.log("props map", props.LocationArr)
    const navigate = useNavigate();
    const LocationArr = props.LocationArr;
    const ref = useRef(null);
    const [map, setMap] = useState();
    const LatLng = {lat: -23.6993287, lng:133.8691865};
        var mapOptions = {
            center: LatLng,
            // zoom: 5
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
                icon: (props.marker) ? activeMarkerImg : deactiveMarkerImg,
                detail: val,
                title: val.title,
                markerID:val.id
            });
            // console.log("marker", m);
            m.addListener("mouseover", (mObj) => {
                console.log("mobj", mObj);
                scrollToDiv(`single-${m.detail.id}`)
                m.setIcon(activeMarkerImg);
            })

            m.addListener("mouseout", () => {
                m.setIcon(deactiveMarkerImg);
            })

            m.addListener("click", (mObj) => {
                console.log("marker click", mObj);
                console.log("m", m);
                navigate('/detail', {state:m.detail});
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