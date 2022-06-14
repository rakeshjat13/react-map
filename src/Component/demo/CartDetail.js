import React from 'react';
import { useTheme } from '@mui/material/styles';
import {Typography, Paper, List, ListItem, ListItemAvatar, ListItemText, Divider, Avatar, ListItemIcon, CardMedia, ButtonGroup, Button} from "@mui/material";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import CircleIcon from '@mui/icons-material/Circle';
import { connect } from 'react-redux';
import {addToCart, removeToCart} from "../Redux/Action"
import CardList from './CardList';

const CartDetail = (props) => {
    const theme = useTheme();
    console.log("props cart details", props);
  // const handleIncreament = () => {
  //   setCount(count + 1);
  // }

  // const handleDecreament = () => {
  //   setCount(count - 1);
  // }

  return (<>
      <Typography component="div" variant="h5">
           Your Cart Details
      </Typography>
    <Paper sx={{marginTop:2}}>
    <List sx={{ width: '100%', maxWidth: '100%', bgcolor: 'background.paper' }}>
    
      {
        (props.cartVal && props.cartVal.length > 0) ? props.cartVal.map((product, i) => <>
        <CardList product={product} />
      
      <Divider variant="inset" component="li" /></>
        )  : <>
              {/* <Avatar sx={{ width: 165, height: 165 }} alt="No Cart" src="./assets/img/empty-cart.png" variant="square" /> */}
              <CardMedia
              component="img"
              height="250"
              image="./assets/img/empty-cart.png"
              alt="green iguana"
              sx={{height:165, width:165, objectFit:'contain', marginLeft:'38%'}}
            />
            <Typography variant="h5" align="center">No Product Added To Cart</Typography>
            </>
    }
    </List>
    </Paper>
    </>
  )
}

const mapStateToProps = (state) => {
  return {...state}
}

const mapDispatchToProps = (dispatch) => {
  return{
      addToCart : () => dispatch(addToCart()),
      removeToCart: () => dispatch(removeToCart())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CartDetail)