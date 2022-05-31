import React from "react";

import { useRoutes } from "react-router-dom";
import Main from "./Component/Main";
import ListDetails from "./Component/ListDetails";

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
            element:'<h3>Test page loading here...</h3>'
        }
    ]);
}