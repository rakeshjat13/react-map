import React from "react";
import {AppBar, Container,Toolbar,Typography,Box,Menu, MenuItem ,Tooltip,IconButton,Button, Avatar, Badge, Grid     } from "@mui/material"
import AdbIcon from '@mui/icons-material/Adb';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { addToCart, removeToCart } from "../Redux/Action";
import { connect } from "react-redux";
import {Link} from "react-router-dom"
import Header from "./Header";
import CartDetail from "./CartDetail";
import CartPrice from "./CartPrice";
import Footer from "./Footer";



const pages = ['Products', 'Pricing', 'Blog'];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Cart = (props) => {
    console.log("props cart", props);
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

  return (
    <>
      <Header />
      <Container sx={{marginTop:'45px', marginBottom:'40px'}}>
      <Grid container spacing={2}>
        <Grid item xs={props.cartVal.length > 0 ? 8 : 12}>
          <CartDetail />
        </Grid>
        {
          (props.cartVal.length > 0) ?
          <Grid item xs={4}>
            <CartPrice />
          </Grid> : null
        }
      </Grid>
      </Container>
      <Footer />
    </>
  );
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
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
