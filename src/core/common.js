export function scrollToDiv(ref){
    const ele = document.getElementById(ref)
    // console.log("reffff", {ele});
    ele.scrollIntoView({ behavior: 'smooth', block: 'center' });

    // window.scrollTo(0, ele.offsetTop)   
}

export function getTimeFromDate(timestamp) {
    var date = new Date(timestamp * 1000);
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
  
    var time = new Date();
    return time.setHours(hours, minutes, seconds);
}

export function toCapitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1)
}