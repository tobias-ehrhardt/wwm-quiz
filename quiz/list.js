(function(){
document.querySelectorAll(".toggle-list").forEach((toggle) => {
    toggle.addEventListener('click', openStretch);
});

function openStretch(event) {
    console.log(event.target.nextSibling);
if(event.target.classList.contains("active")){
    event.target.nextSibling.style.maxHeight = "0";  
    
} else {
    event.target.nextSibling.style.maxHeight = event.target.nextSibling.scrollHeight;
}
event.target.classList.toggle("active");
     
    
}
})();