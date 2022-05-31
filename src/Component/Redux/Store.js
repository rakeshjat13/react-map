import { createStore } from "redux";
import rotateReducer from "./Reducer";


function configRotateStore (state = {start:false}){
    return createStore(rotateReducer, state)
}

export default configRotateStore