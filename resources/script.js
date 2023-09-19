const fetchData = async (url) => {
    const response = await fetch(url)
    const data = await response.json()
    document.getElementById("header").style.backgroundImage =  "url("+ data.photo.url +")"
}

fetchData('https://api.slingacademy.com/v1/sample-data/photos/35')

var r = document.querySelector(':root');
var rs = getComputedStyle(r);
function hoverAction(item, isSelected){
    if (isSelected)
    {
        item.style.opacity = "1"
        item.style.borderBottom = "3px solid "+rs.getPropertyValue('--brown')
        item.style.borderBottomRightRadius = "0.5px"
        return
    }
    item.style.opacity = "0.5"
    item.style.border = "none"
    item.style.color = rs.getPropertyValue('--white_hard')
}