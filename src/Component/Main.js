import React, { Component } from "react";
import {Grid, Paper, Box, Card, CardMedia,
        CardContent, CardActions, Button, 
        Typography, Avatar} from '@mui/material'
import "../style.css";
import MyMapComponent from "./Map";
import Listing from "./Listing";
import LocationArr from "../locations.json";

class Main extends React.Component{
    message = `Truncation should be conditionally applicable on this long line of text
    as this is a much longer line than what the container can support.`
	constructor(){
        super();
		// this.state={
        //     count :0
		// };
		// this.increase=this.increase.bind(this);
        console.log("listing", LocationArr);
	}

	render(){
		return (
            <Grid container>
                <Grid item xs={12} sm={6} md={7} sx={{height:'100vh'}}>
                    {/* <Paper>xs=8</Paper> */}
                    <MyMapComponent LocationArr={LocationArr}/>
                </Grid>
                <Grid item xs={12} sm={6} md={5} className="listing-main">
                    <Box sx={{m:3}}>
                        {/* <Paper className="myBG1">xs=5</Paper> */}
                        <Listing LocationArr={LocationArr}/>
                        <Paper sx={{my: 1, mx: 'auto', p: 2}}>
                            <Grid container wrap="nowrap" spacing={2}>
                            <Grid item>
                                <Avatar>W</Avatar>
                            </Grid>
                            <Grid item xs>
                                <Typography>{this.message}</Typography>
                            </Grid>
                            </Grid>
                        </Paper>
                    </Box>
                </Grid>
            </Grid>
		)
	}
}

export default Main;
