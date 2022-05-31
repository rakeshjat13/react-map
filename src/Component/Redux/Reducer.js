export default (state, action) => {
    switch (action.type) {
        case 'Rotate':
            return {start:action.start}
            break;
    
        default:
            return state
            break;
    }
}