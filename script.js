// console.log("script runningg...");
document.querySelector('.cross').computedStyleMap.display='none';
document.querySelector('.hamburger').addEventListener("click",()=>{
    document.querySelector('.sidebar').classList.toggle('sidebargo');

    if(document.querySelector('.sidebar').classList.contains('sidebargo')){
        document.querySelector('.ham').computedStyleMap.display='inline'
        document.querySelector('.cross').computedStyleMap.display='none'
    }
    else{
        document.querySelector('.cross').computedStyleMap.display='none'
        document.querySelector('.ham').computedStyleMap.display='inline'
    }
})