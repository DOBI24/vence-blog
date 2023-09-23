let open = false
var rs = getComputedStyle(document.querySelector(':root'));

function showMobileNavbar(){
    open = !open
    document.getElementById("mobile-grid-items").style.right = (open ? 0 : "-300%")
}