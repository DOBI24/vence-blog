var r = document.querySelector(':root');
var rs = getComputedStyle(r);
function navHoverAction(item, isSelected){
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