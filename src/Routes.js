import React from "react";
import { Provider } from "react-redux";
import { useRoutes } from "react-router-dom";
import Main from "./Component/Main";
import ListDetails from "./Component/ListDetails";
import App from "./App";
import configRotateStore from "./Component/Redux/Store";

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
            element:<Provider store={configRotateStore()}><App /></Provider>
        }
    ]);
}