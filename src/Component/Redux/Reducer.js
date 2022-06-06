export default (state, action) => {
    switch (action.type) {
        case 'Rotate':
            console.log("reducer", action, state)
            return {...state, start:action.start}
            break;
        case 'PausedRotate': 
            console.log("test action", action);
            return {...state, start:action.start}
            break;
        case 'add_to_cart':
            console.log("add_to_cart action", action,'---> state ', state)
            return {...state, cartVal:[...state.cartVal, action.cartVal]}
            break;
        case 'remove_to_cart': 
            console.log("remove_to_cart action", action,'---> state ', state)
            state.cartVal.pop();
            return {...state, cartVal:[...state.cartVal]} 
            break;
        default:
            console.log("default state is", state);
            return state
            break;
    }
}