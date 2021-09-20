var cursor = document.querySelector('.cursor');
var cursor2 = document.querySelector('.cursor2');
document.addEventListener("mousemove",function(e){
    cursor.style.cssText = cursor2.style.css = "left: " + e.clientX 
    + "px; top: " + e.clientY + "px; "
});