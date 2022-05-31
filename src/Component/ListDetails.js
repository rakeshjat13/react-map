import React from "react";
import {Grid, Paper, Box, Card, CardMedia,
    CardContent, CardActions, Button, 
    Typography, Avatar} from '@mui/material'
import "../style.css";
import MyMapComponent from "./Map";
import {useLocation} from "react-router-dom";
import Details from "./Details";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import {useNavigate} from "react-router-dom";
import Slidder from "./Slidder";

function ListDetails (props){
    console.log("props", props)
    const data = useLocation();
    console.log("state", data);
    const navigate = useNavigate();

    return (
        <Grid container>
            <Grid item xs={12} sm={6} md={4} className="listing-main">
                <Box sx={{m:3}}>
                    <Box>
                        <Button variant="contained" startIcon={<ArrowBackIosIcon />} onClick={() => navigate(-1)}>
                            Go Back
                        </Button>
                    </Box>
                    <Details  data={data.state}/>
                    {/* <Box>
                    <Typography variant="h6" gutterBottom component="div">
                        h6. Heading
                    </Typography>
                    <Slidder />
                    </Box> */}
                    {/* <Paper sx={{my: 1, mx: 'auto', p: 2}}>
                        <Grid container wrap="nowrap" spacing={2}>
                            <Grid item>
                                <Avatar>W</Avatar>
                            </Grid>
                            <Grid item xs>
                                <Typography>{this.message}</Typography>
                            </Grid>
                        </Grid>
                    </Paper> */}
                </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={8} sx={{height:'100vh'}}>
                {/* <Paper>xs=8</Paper> */}
                <MyMapComponent LocationArr={[data['state']]} />
            </Grid>
        </Grid>
    )
}

export default ListDetails;