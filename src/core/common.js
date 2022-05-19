export function scrollToDiv(ref){
    const ele = document.getElementById(ref)
    console.log("reffff", {ele});
    ele.scrollIntoView({ behavior: 'smooth', block: 'center' });

    // window.scrollTo(0, ele.offsetTop)   
}