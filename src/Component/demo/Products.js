import React from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, ButtonGroup } from "@mui/material";
import { Paper} from "@mui/material";
import TableHeadCustom from "../table/TableHeadCustom";
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import {addToCart, removeToCart} from "../Redux/Action";
import { connect } from "react-redux";
import productsArr from './products.json';
import Skeleton from '@mui/material/Skeleton';


class MyProducts extends React.Component{
    constructor(props){
        super(props)
        console.log("my product props", this.props);
    }


    render(){
        return(<>
        <TableContainer component={Paper} sx={{marginTop:4}}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHeadCustom column={["Sr. No.", "Product Image", "Product Name", "Price (₹)", "Quantity", "Total Price", "Action"]}/>
                    <TableBody>
                        { productsArr.map((product, i) => 
                        (product) ?
                            <TableRow key={i}>
                            <TableCell component="th" scope="row">
                            {++i}
                            </TableCell>
                            <TableCell align="left">
                                {
                                    (product.image) ? (<img src={product.image} style={{height:100}} />) :
                                    (<Skeleton  variant="rectangular" width={145} height={118} />)
                                }
                            </TableCell>
                            <TableCell align="left">
                                {product.name}
                            </TableCell>
                            <TableCell align="left">
                                 {product.price}
                            </TableCell>
                            <TableCell align="left">
                                {(this.props.cartVal) ? this.props.cartVal.filter((val) => val == product.id ).length : 0}
                            </TableCell>
                            <TableCell align="left">
                                {(this.props.cartVal) ? `${ this.props.cartVal.filter((val) => val == product.id ).length * product.price} ` : 0 }
                            </TableCell>
                            <TableCell align="left">
                            <ButtonGroup disableElevation variant="contained" sx={{backgroundColor:'#673ab7'}}>
                                <Button sx={{fontWeight: 800}} onClick={() => (this.props.cartVal.length > 0) ? this.props.removeToCart(product.id) : alert("You don\'t have any product to remove!")}><RemoveIcon fontSize="small" /></Button>
                                {/* <Button sx={{fontWeight: 800}} onClick={()=> this.props.addToCart({id:1, image:'./assets/img/apple-iphone-13.jpg', name:'iPhone 11', price:'1100'})}><AddIcon fontSize="small" /></Button> */}
                                <Button sx={{fontWeight: 800}} onClick={()=> this.props.addToCart(product.id)}><AddIcon fontSize="small" /></Button>
                            </ButtonGroup>
                            </TableCell>
                        </TableRow>
                        : <Skeleton  variant="rectangular" width={145} height={118} />
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
        removeToCart: (id) => dispatch(removeToCart(id))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(MyProducts)