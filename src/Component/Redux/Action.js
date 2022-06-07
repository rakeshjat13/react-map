// export const rotateStart = {
//     type:'Rotate',
//     start: true
// }

// export const rotateStop = {
//     type: 'Rotote',
//     start: false
// }

export const rotateAction = (start) => {
    return { type: 'Rotate', start}
}


export const changeBtnStyle = () => {
    console.log("action call changeBtnstyle");
    return { type:'PausedRotate', 
            start: false
    }
}

export const addToCart = (data) => {
    console.log("add to cart", data);
    return {
        type: 'add_to_cart',
        cartVal:data
    }
}

export const removeToCart = (id) => {
    console.log("call removet cart action");
    return {
        type: 'remove_to_cart',
        productId:id
    }   
}