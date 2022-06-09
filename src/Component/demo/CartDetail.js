import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import {Typography, Paper, List, ListItem, ListItemAvatar, ListItemText, Divider, Avatar, ListItemIcon, CardMedia} from "@mui/material";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import CircleIcon from '@mui/icons-material/Circle';
import { connect } from 'react-redux';
import {addToCart, removeToCart} from "../Redux/Action"

const CartDetail = (props) => {
    const theme = useTheme();
    console.log("props cart details", props);
  return (<>
      <Typography component="div" variant="h5">
           Your Cart Details
      </Typography>
    <Paper sx={{marginTop:2}}>
    <List sx={{ width: '100%', maxWidth: '100%', bgcolor: 'background.paper' }}>
    
      {
        (props.cartVal && props.cartVal.length > 0) ? props.cartVal.map((product) => 
        <>
      <ListItem alignItems="flex-start">
        <ListItemAvatar sx={{minWidth:'191px'}}>
          <Avatar sx={{ width: 165, height: 165, objectFit:'scale-down'}} alt="Remy Sharp" src={product.image} variant="square" />
        </ListItemAvatar>
        <ListItemText
          primary={
            <Typography variant="h5">{product.name}</Typography>
          }
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {<List>
                { 
                product.specification.map((s) => 
                <ListItem disablePadding>
                  <CircleIcon sx={{ fontSize: 9, paddingRight:'15px' }} />
                  <ListItemText primary={s} />
                </ListItem>)
                }
              </List>}
            </React.Fragment>
          }
        />
        <ListItemText primary={<Typography variant="h5" align="right">₹{product.price}</Typography>} />
      </ListItem>
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