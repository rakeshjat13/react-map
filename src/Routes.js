import React, { PureComponent } from "react";
import { useRoutes } from "react-router-dom";
import Main from "./Component/Main";
import ListDetails from "./Component/ListDetails";
import App from "./App";
import MyProducts from "./Component/demo/Products";
import Demo from "./Component/demo/Demo";
import Cart from "./Component/demo/Cart";
import PComponent from "./Component/Test/PComponent";
import ReduxDemo from "./Component/Test/ReduxDemo";
import MemoDemo from "./Component/Test/MemoDemo";
import PFun from "./Component/Test/PFun";
import ChatComponent from "./Component/ChatComponent/Main"

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
            element:<App />,
            children:[
                {
                    path:"",
                    element: <ReduxDemo />
                },
                {
                    path:"pure",
                    element: <PComponent />
                },
                {
                    path:"memo",
                    element: <MemoDemo />
                },
                {
                    path:"purefun",
                    element: <PFun />
                }
            ]
        },
        {
            path:'demo',
            element: <Demo />
        },
        {
            path:'cart',
            element: <Cart />
        },
        {
            path:'chat',
            element : <ChatComponent />
        }
    ]);
}