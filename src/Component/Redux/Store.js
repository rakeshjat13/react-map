import { createStore } from "redux";
import rotateReducer from "./Reducer";


function configRotateStore (state = {start:false, cartVal: []}){
    return createStore(rotateReducer, state)
}

export default configRotateStore