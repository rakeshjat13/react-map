import * as React from "react";
import {scrollToDiv} from "../core/common"
// import { useNavigate } from "react-router-dom";

const LatLng = {lat: -23.6993287, lng:133.8691865};
var mapOptions = {
    center: LatLng,
    zoom: 5
};
let map,bounds;
const deactiveMarkerImg = "./assets/img/marker.png";
const activeMarkerImg = "./assets/img/active-marker.png";
// const navigate = useNavigate();
class MyMapComponent extends React.Component{
    constructor(props){
        super(props)
        console.log("props map", this.props.LocationArr)
        this.LocationArr = this.props.LocationArr;
        // const ref = useRef(map);
        this.ref = React.createRef();
        // console.log("id map c",document.getElementById('map'))
        this.state = {map:null,bounds: null}
        // console.log("state", this.state)
        
            
        // if (this.ref.current && !map) {
        //     setMap(new window.google.maps.Map(this.ref.current, mapOptions));
        // }

        
    }
    
    componentDidMount() {
        console.log("id map",document.getElementById('map'))
        console.log("this ref",this.ref)
        // const map = 
        // console.log("map..", map)
        console.log("bounds.....", bounds);
        map = new window.google.maps.Map(this.ref.current, mapOptions);
        this.setState({map:map});
        console.log("this.state", this.state)
        bounds = new window.google.maps.LatLngBounds();
        this.createSingleMarker();
    }
    
    
    createSingleMarker() {
        // this.setState({bounds: new window.google.maps.LatLngBounds()});
        
        this.LocationArr.map((val) => {
            // console.log("lat ", parseFloat(val.latitude), " Lng ", parseFloat(val.longitude))
            let m = new window.google.maps.Marker({
                position: {lat: parseFloat(val.latitude), lng:parseFloat(val.longitude)},
                map:map,
                icon: (this.props.marker) ? activeMarkerImg : deactiveMarkerImg,
                detail: val,
                title: val.title,
                markerID:val.id
            });
            // console.log("marker", m);
            if(!this.props.page){
                m.addListener("mouseover", (mObj) => {
                    console.log("mobj", mObj);
                    scrollToDiv(`single-${m.detail.id}`)
                    m.setIcon(activeMarkerImg);
                })
            }

            if(!this.props.page){
                m.addListener("mouseout", () => {
                    m.setIcon(deactiveMarkerImg);
                })
            }

            m.addListener("click", (mObj) => {
                console.log("marker click", mObj);
                console.log("m", m);
                // (this.props.page) ? navigate('/') : null
                // navigate('/detail', {state:m.detail})
            })
            bounds.extend(m.getPosition());
        })
        map.fitBounds(bounds);
    }
  
    render(){
        console.log("state", this.state)
        return <div ref={this.ref} id="map" style={{height:'100%'}} />;
    }
  }

  export default MyMapComponent;