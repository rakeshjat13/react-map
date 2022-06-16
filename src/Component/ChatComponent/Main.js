import React, { useEffect, useState } from 'react'
import "./chatstyles.css";
import {Paper, Grid, Box, Divider, TextField, Typography, List, ListItem, ListItemIcon, ListItemText, Avatar, Fab, Container, ListItemAvatar} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import { app, db } from "../Firebase/firebaseConfig";
import {collection, getDocs, addDoc} from "firebase/firestore/lite"
import {getTimeFromDate} from "../../core/common";
import { async } from '@firebase/util';
// var localStorage : Storage;
async function getChats() {
    const collectionData = collection(db, 'chatbot');
    // console.log("collection", collectionData);
    const snapshotChat = await getDocs(collectionData);
    // console.log("snapshotChat", snapshotChat);
    const chatList = snapshotChat.docs.map(doc => doc.data());
    // console.log("chatList", chatList);
    return chatList;
}

export default function Main() {
    const [userId, setUserId] = useState(null);
    const [chat, setChat] = useState([])
    const [message, setMessage] = useState('');
    // const chatdata = getChats().then((res) => res);
    // chatdata.then((res) => {
    //     console.log("chatdatsa --", res)
    //     if(!chat)
    //         setChat(res)
    // })
    useEffect(() => { 
        if(!userId)
            setUserId(localStorage.getItem('userid'));
        // console.log("chat", chat);
        // if(!chat || chat.length <= 0)
            getChats().then((res) => {
                res.sort((a, b) => a.time.seconds - b.time.seconds);
                // console.log("ress---", res);
                setChat(res)
            })
    })
    // console.log("App", app);
    // console.log("firebase db", db);
    // console.log("firebase db", userId);
    
    // console.log("ccc", chatdata);
    // console.log('chat', chat);
    const sendMessageHandler = async () => {
        // console.log("send message", message)
        // setChat([...chat, { msg:message, senderId:userId, receiverId: 2 , time:{seconds: Math.floor(new Date().getTime()/1000)}}])
        
        try {
            const docRef = await addDoc(collection(db, "chatbot"), {
                senderId:userId, 
                receiverId: 2, 
                msg:message, 
                status: 0,
                time:{seconds: Math.floor(new Date().getTime()/1000)}
            });
            console.log("Document written with ID: ", docRef.id);
            setTimeout(() => setMessage('') , 0)
            console.log("message after", message);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }
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
            <List className="messageArea" sx={{maxHeight:'420px', overflowY:'scroll'}} >
            { chat.map((c, i) => 
                <ListItem key={`chat-${i}`} >
                    
                        { c.senderId != userId && 
                            <ListItemAvatar>
                                <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/3.jpg" />
                            </ListItemAvatar>
                        }
                    <Grid container>
                        <Grid item={true} xs={12}>
                        
                            <ListItemText align={c.senderId == userId ? 'right' : 'left'} primary={c.msg }></ListItemText>
                        </Grid>
                        <Grid item={true} xs={12}>
                            <ListItemText align={c.senderId == userId ? 'right' : 'left'} secondary={new Date(c.time.seconds * 1000).toLocaleTimeString()}></ListItemText>
                        </Grid>
                    </Grid>
                    { c.senderId == userId && 
                        <ListItemAvatar align="right">
                            <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />
                        </ListItemAvatar>
                    }
                </ListItem>
            )}
                {/* <ListItem key="2">
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
                </ListItem> */}
            </List>
            <Divider />
            <Grid container sx={{padding: '20px'}}>
                <Grid item={true} xs={11}>
                    <TextField id="outlined-basic-email" label="Type Something" fullWidth onChange={(e) => setMessage(e.target.value) } value={message} />
                </Grid>
                <Grid xs={1} align="right">
                    <Fab onClick={sendMessageHandler} color="primary" aria-label="add"><SendIcon /></Fab>
                </Grid>
            </Grid>
        </Grid>
    </Grid>
  </Container>
  )
}
