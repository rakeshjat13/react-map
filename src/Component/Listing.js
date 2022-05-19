import React, {useRef} from "react";
import {Grid, Box, Typography} from '@mui/material'
import SingleListing from "./SingleListing";
import {scrollToDiv} from "../core/common";

function Listing(props){
    const LocationArr = props.LocationArr;
    console.log("LocationArr", LocationArr);
    console.log("props listing", props)
    // const divRef = useRef(null);
    return (
        <Box sx={{marginTop:5}}>
            <Typography variant="h5" gutterBottom component="div">All Listing</Typography>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="baseline"
                
            >   
            { LocationArr.map((data, key) => <SingleListing key={key} data={data} id={`single-${key}`} />)}
                
            </Grid>
        </Box>
    )
}

export default Listing