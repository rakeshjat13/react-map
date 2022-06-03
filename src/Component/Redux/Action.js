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
    return { type:'changeBtnStyle', 
            padding: '15px'
        }
}