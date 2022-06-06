import React from "react";
import { useRoutes } from "react-router-dom";
import Main from "./Component/Main";
import ListDetails from "./Component/ListDetails";
import App from "./App";
import MyProducts from "./Component/demo/Products";
import Demo from "./Component/demo/Demo";


export default function Routes(){
    return useRoutes([
        {
            path:'',
            element: <Main />
        },
        {
            path:'detail',
            element: <ListDetails />
        },
        {
            path:'test',
            element:<App />
        },
        {
            path:'demo',
            element: <Demo />
        }
    ]);
}