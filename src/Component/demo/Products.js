import React from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, ButtonGroup } from "@mui/material";
import { Paper} from "@mui/material";
import { render } from "@testing-library/react";
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import {addToCart, removeToCart} from "../Redux/Action";
import { connect } from "react-redux";
import productsArr from './products.json';

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];

class MyProducts extends React.Component{
    constructor(props){
        super(props)
        console.log("my product props", this.props);
    }


    render(){
        return(<><TableContainer component={Paper} sx={{marginTop:4}}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="left">
                            Sr. No.
                        </TableCell>
                        <TableCell align="left">
                            Product Image
                        </TableCell>
                        <TableCell align="left">
                            Product Name
                        </TableCell>
                        <TableCell align="left">
                            Price
                        </TableCell>
                        <TableCell align="left">
                            Quantity
                        </TableCell>
                        <TableCell align="left">
                            Total Price
                        </TableCell>
                        <TableCell align="left">
                            Action
                        </TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell component="th" scope="row">
                            1
                            </TableCell>
                            <TableCell align="left">
                                <img src="./assets/img/apple-iphone-13.jpg" style={{height:100}} />
                            </TableCell>
                            <TableCell align="left">
                                Apple iPhone 13
                            </TableCell>
                            <TableCell align="left">
                                $ 1,100
                            </TableCell>
                            <TableCell align="left">
                                {(this.props.cartVal) ? this.props.cartVal.length : 0}
                            </TableCell>
                            <TableCell align="left">
                                {(this.props.cartVal) ? `$ ${this.props.cartVal.length * 1100} ` : 0 }
                            </TableCell>
                            <TableCell align="left">
                            <ButtonGroup disableElevation variant="contained" color="error">
                                <Button sx={{fontWeight: 800}} onClick={() => (this.props.cartVal.length > 0) ? this.props.removeToCart() : alert("You don\'t have any product to remove!")}><RemoveIcon fontSize="small" /></Button>
                                <Button sx={{fontWeight: 800}} onClick={()=> this.props.addToCart({id:1, image:'./assets/img/apple-iphone-13.jpg', name:'iPhone 11', price:'1100'})}><AddIcon fontSize="small" /></Button>
                            </ButtonGroup>
                            </TableCell>
                        </TableRow>
                        { productsArr.map((product, i) => 
                            <TableRow>
                            <TableCell component="th" scope="row">
                            {++i}
                            </TableCell>
                            <TableCell align="left">
                                <img src={product.image} style={{height:100}} />
                            </TableCell>
                            <TableCell align="left">
                                {product.name}
                            </TableCell>
                            <TableCell align="left">
                                 {product.price}
                            </TableCell>
                            <TableCell align="left">
                                {(this.props.cartVal) ? this.props.cartVal.length : 0}
                            </TableCell>
                            <TableCell align="left">
                                {(this.props.cartVal) ? `$ ${this.props.cartVal.length * product.price} ` : 0 }
                            </TableCell>
                            <TableCell align="left">
                            <ButtonGroup disableElevation variant="contained" color="error">
                                <Button sx={{fontWeight: 800}} onClick={() => (this.props.cartVal.length > 0) ? this.props.removeToCart() : alert("You don\'t have any product to remove!")}><RemoveIcon fontSize="small" /></Button>
                                <Button sx={{fontWeight: 800}} onClick={()=> this.props.addToCart({id:1, image:'./assets/img/apple-iphone-13.jpg', name:'iPhone 11', price:'1100'})}><AddIcon fontSize="small" /></Button>
                            </ButtonGroup>
                            </TableCell>
                        </TableRow>
                        )}
                    </TableBody>
            </Table>
        </TableContainer>
        </>)
    }
}

const mapStateToProps = (state) => {
    return {...state}
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (val)  => dispatch(addToCart(val)),
        removeToCart: () => dispatch(removeToCart())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(MyProducts)