import React from "react";
import {
 Breadcrumbs as MUIBreadcrumbs,
 Link,
 Typography
} from "@material-ui/core";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import {toCapitalize} from "../../core/common"; 

const Breadcrumbs = (props) => {

 const {id} = useParams();
//  console.log("ID",id);
 // const { history, location } = props;
 // const history = Navigate();
 const { pathname } = useLocation();
 console.log("path", pathname)
 const pathnames = (pathname) ? pathname.split("/").filter((el) => el) : '/'
//  console.log('useParams',useParams()); //test
//  console.log('useNavigate',useNavigate()); //test
 // const location = useLocation();
 console.log("location", pathnames);
 const navigate = useNavigate();
 const handleClick = (e) => {
//  console.log('test', e.target.dataset.path)
 navigate(e.target.dataset.path);
 }
 return (
    <MUIBreadcrumbs aria-label="breadcrumb">
        {/* <Link
        style={{ cursor: "pointer" }}
        color="primary"
        onClick={handleClick}
        key='/'
        data-path='/'
        >
        Home
        </Link>
        {pathnames ? */}
        { pathnames.map((pathname, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
            // To make sure the last breadcrumb is not a link
            const isLast = index === pathnames.length - 1;
            // console.log("*******");
            // console.log(pathname);
            // console.log(routeTo);
            // console.log("*******");
            return isLast ? (
            <Typography key={index}>{toCapitalize(pathname)}</Typography>
            ) : (
            <Link key={index} data-path={routeTo} onClick={handleClick}>
            {toCapitalize(pathname)}
            </Link>
            );
        }) }
        {/* : 'Dashboard' } */}
    </MUIBreadcrumbs>
 );
};

export default Breadcrumbs;