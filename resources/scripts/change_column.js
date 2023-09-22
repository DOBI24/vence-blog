let currentColumn = 3

function changeCardGridColumn(item){
    const id = parseInt(item.id.split("-")[0])
    if (item.checked && (currentColumn !== id)){
        console.log(id)
        currentColumn = id
        document.getElementById("cards-container").style.gridTemplateColumns = "repeat(" + currentColumn + ", 1fr)"
    }
}