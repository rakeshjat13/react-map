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
		this.state={
                refList: null,
                markerRef: null
            };
            // this.increase=this.increase.bind(this);
        this.el1 = React.createRef();
        this.el2 = React.createRef();
        console.log("listing", LocationArr);
        this.testData = this.testData.bind(this);
	}

    testData(d,e) {
        console.log("test", e);
        console.log("this state", this.state)
        console.log("current main Ref", this.el1, this.el2)
        this.setState(() => { this.state[d]  =  e });
    }

    componentDidMount() {
        console.log("main ref",this.el2.current);
      }

	render(){
		return (
            <Grid container>
                <Grid item xs={12} sm={6} md={7} sx={{height:'100vh'}}>
                    {/* <Paper>xs=8</Paper> */}
                    <MyMapComponent LocationArr={LocationArr} fun={this.testData} refernce={this.el2.current}/>
                </Grid>
                <Grid item xs={12} sm={6} md={5} className="listing-main">
                    <Box sx={{m:3}}>
                        {/* <Paper className="myBG1">xs=5</Paper> */}
                        <Listing LocationArr={LocationArr} ref={this.el2}/>
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
