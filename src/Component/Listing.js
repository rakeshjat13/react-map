import * as React from "react";
import {Grid, Box, Typography} from '@mui/material'
import SingleListing from "./SingleListing";

function Listing(props){
    const LocationArr = props.LocationArr;
    console.log("LocationArr", LocationArr);
    return (
        <Box sx={{marginTop:5}}>
            <Typography variant="h5" gutterBottom component="div">All Listing</Typography>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="baseline"
                
            >   
            { LocationArr.map((data, key) => <SingleListing key={key} data={data}/>)}
                
            </Grid>
        </Box>
    )
}

export default Listing