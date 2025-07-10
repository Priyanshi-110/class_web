function closure(){
    const searchBox= document.getElementById("searchHere");
    let timeoutId;
    searchBox.addEventListener("input",(event)=>{
    // console.log(event.target.value);
    clearTimeout(timeoutId)
    timeoutId=setTimeout(()=>{
        console.log(event.target.value)
    },1000)
}) 
}
closure();