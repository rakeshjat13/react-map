import { createStore } from "redux";
import rotateReducer from "./Reducer";


function configRotateStore (state = {start:false, btnStyle:''}){
    return createStore(rotateReducer, state)
}

export default configRotateStore