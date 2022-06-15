import React from 'react'
import "./chatstyles.css";
import {Paper, Grid, Box, Divider, TextField, Typography, List, ListItem, ListItemIcon, ListItemText, Avatar, Fab, Container} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import { app, db } from "../Firebase/firebaseConfig";
import {collection, getDocs} from "firebase/firestore/lite"
// var localStorage : Storage;
const userId = localStorage.getItem("userid");
async function getChats() {
    const collectionData = collection(db, 'chatbot');
    console.log("collection", collectionData);
    const snapshotChat = await getDocs(collectionData);
    console.log("snapshotChat", snapshotChat);
    const chatList = snapshotChat.docs.map(doc => doc.data());
    console.log("chatList", chatList);
    return chatList;
}

export default function Main() {
    // console.log("App", app);
    // console.log("firebase db", db);
    console.log("firebase db", userId);
    const chatdata = getChats();
    chatdata.then((res) => {
        console.log("chatdata --", res)
    })
    console.log("ccc", chatdata);
  return (
    <Container>
    <Grid container>
        <Grid item xs={12} sx={{marginTop:'15px'}}>
            <Typography variant="h5" className="header-message">Chat</Typography>
        </Grid>
    </Grid>
    <Grid container component={Paper} sx={{width: '100%',
    height: '80vh'}}>
        <Grid item={true} xs={3} sx={{borderRight: '1px solid #e0e0e0'}}>
            <List>
                <ListItem button key="RemySharp">
                    <ListItemIcon>
                    <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />
                    </ListItemIcon>
                    <ListItemText primary="John Wick"></ListItemText>
                </ListItem>
            </List>
            <Divider />
            <Grid item={true} xs={12} sx={{padding: '10px'}}>
                <TextField id="outlined-basic-email" label="Search" variant="outlined" fullWidth />
            </Grid>
            <Divider />
            <List>
                <ListItem button key="RemySharp">
                    <ListItemIcon>
                        <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />
                    </ListItemIcon>
                    <ListItemText primary="Remy Sharp">Remy Sharp</ListItemText>
                    <ListItemText secondary="online" align="right"></ListItemText>
                </ListItem>
                <ListItem button key="Alice">
                    <ListItemIcon>
                        <Avatar alt="Alice" src="https://material-ui.com/static/images/avatar/3.jpg" />
                    </ListItemIcon>
                    <ListItemText primary="Alice">Alice</ListItemText>
                </ListItem>
                <ListItem button key="CindyBaker">
                    <ListItemIcon>
                        <Avatar alt="Cindy Baker" src="https://material-ui.com/static/images/avatar/2.jpg" />
                    </ListItemIcon>
                    <ListItemText primary="Cindy Baker">Cindy Baker</ListItemText>
                </ListItem>
            </List>
        </Grid>
        <Grid item={true} xs={9}>
            <List className="messageArea">
                <ListItem key="1">
                    <Grid container>
                        <Grid item={true} xs={12}>
                            <ListItemText align="right" primary="Hey man, What's up ?"></ListItemText>
                        </Grid>
                        <Grid item={true} xs={12}>
                            <ListItemText align="right" secondary="09:30"></ListItemText>
                        </Grid>
                    </Grid>
                </ListItem>
                <ListItem key="2">
                    <Grid container>
                        <Grid item={true} xs={12}>
                            <ListItemText align="left" primary="Hey, Iam Good! What about you ?"></ListItemText>
                        </Grid>
                        <Grid item={true} xs={12}>
                            <ListItemText align="left" secondary="09:31"></ListItemText>
                        </Grid>
                    </Grid>
                </ListItem>
                <ListItem key="3">
                    <Grid container>
                        <Grid item={true} xs={12}>
                            <ListItemText align="right" primary="Cool. i am good, let's catch up!"></ListItemText>
                        </Grid>
                        <Grid item={true} xs={12}>
                            <ListItemText align="right" secondary="10:30"></ListItemText>
                        </Grid>
                    </Grid>
                </ListItem>
            </List>
            <Divider />
            <Grid container sx={{padding: '20px'}}>
                <Grid item={true} xs={11}>
                    <TextField id="outlined-basic-email" label="Type Something" fullWidth />
                </Grid>
                <Grid xs={1} align="right">
                    <Fab color="primary" aria-label="add"><SendIcon /></Fab>
                </Grid>
            </Grid>
        </Grid>
    </Grid>
  </Container>
  )
}
