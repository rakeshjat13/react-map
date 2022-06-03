export default (state, action) => {
    switch (action.type) {
        case 'Rotate':
            console.log("reducer", action, state)
            return {...state, start:action.start}
            break;
        case 'changeBtnStyle': 
            console.log("test action", action);
            return {...state, btnStyle:action.padding}
        break;
        default:
            console.log("default state is", state);
            return state
            break;
    }
}