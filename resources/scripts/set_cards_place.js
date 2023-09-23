function setMainCards(){
    const container = document.getElementById("cards-container")
    for (let i = 0; i < maxBlogPost-7; i++) {
        const cardFrameNode = document.createElement("div")
        const titleNode = document.createElement("div")
        const imgFrame = document.createElement("div")
        const descriptionNode = document.createElement("div")
        const userNode = document.createElement("div")
        const categoryNode = document.createElement("div")
        const dateNode = document.createElement("time")

        addTextNodeToNode(titleNode, cardsArray[i].title)
        addTextNodeToNode(descriptionNode, cardsArray[i].description)
        addTextNodeToNode(userNode, "By: " + cardsArray[i].username)
        addTextNodeToNode(categoryNode, cardsArray[i].category)
        addTextNodeToNode(dateNode, ("0"+cardsArray[i].date.getDate()).slice(-2)+"."+months[cardsArray[i].date.getMonth()].substring(0,3)+"."+cardsArray[i].date.getFullYear())

        cardFrameNode.setAttribute("class", "card-frame")
        titleNode.setAttribute("class", "card-title")
        imgFrame.setAttribute("class", "card-img")
        descriptionNode.setAttribute("class", "card-description")
        userNode.setAttribute("class", "card-user")
        categoryNode.setAttribute("class", "card-category")
        dateNode.setAttribute("class", "card-date")

        imgFrame.appendChild(categoryNode)
        imgFrame.style.backgroundImage = "url("+ cardsArray[i].img +")"

        cardFrameNode.appendChild(imgFrame)
        cardFrameNode.appendChild(dateNode)
        cardFrameNode.appendChild(titleNode)
        cardFrameNode.appendChild(descriptionNode)
        cardFrameNode.appendChild(userNode)
        container.appendChild(cardFrameNode)
    }
}

function setFeaturedTopicsCards(){
    const container = document.getElementById("topics-cards-card")
    for (let i = maxBlogPost-7; i < maxBlogPost-4; i++) {
        const cardFrameNode = document.createElement("div")
        const detailsNode = document.createElement("div")
        const titleNode = document.createElement("div")
        const imgFrame = document.createElement("div")
        const descriptionNode = document.createElement("div")
        const dateNode = document.createElement("time")

        addTextNodeToNode(titleNode, cardsArray[i].title)
        addTextNodeToNode(descriptionNode, cardsArray[i].description)
        addTextNodeToNode(dateNode, ("0"+cardsArray[i].date.getDate()).slice(-2)+"."+months[cardsArray[i].date.getMonth()].substring(0,3)+"."+cardsArray[i].date.getFullYear())

        cardFrameNode.setAttribute("class", "topics-card")
        titleNode.setAttribute("class", "topics-card-title")
        imgFrame.setAttribute("class", "topics-card-image")
        descriptionNode.setAttribute("class", "topics-card-description card-date")
        dateNode.setAttribute("class", "topics-card-date card-date")

        imgFrame.style.backgroundImage = "url("+ cardsArray[i].img +")"

        detailsNode.appendChild(dateNode)
        detailsNode.appendChild(titleNode)
        detailsNode.appendChild(descriptionNode)
        cardFrameNode.appendChild(imgFrame)
        cardFrameNode.appendChild(detailsNode)
        container.appendChild(cardFrameNode)
    }
}

function setFooterCards(){
    const container = document.getElementById("footer-card-container")
    for (let i = maxBlogPost-4; i < maxBlogPost; i++) {
        const cardFrameNode = document.createElement("div")
        const titleNode = document.createElement("div")
        const imgFrame = document.createElement("div")
        const descriptionNode = document.createElement("div")
        const categoryNode = document.createElement("div")
        const dateNode = document.createElement("time")

        addTextNodeToNode(titleNode, cardsArray[i].title)
        addTextNodeToNode(descriptionNode, cardsArray[i].description)
        addTextNodeToNode(categoryNode, cardsArray[i].category)
        addTextNodeToNode(dateNode, ("0" + cardsArray[i].date.getDate()).slice(-2) + "." + months[cardsArray[i].date.getMonth()].substring(0, 3) + "." + cardsArray[i].date.getFullYear())

        cardFrameNode.setAttribute("class", "card-frame")
        titleNode.setAttribute("class", "card-title footer-card-title")
        imgFrame.setAttribute("class", "card-img footer-card-img")
        descriptionNode.setAttribute("class", "card-description")
        categoryNode.setAttribute("class", "card-category")
        dateNode.setAttribute("class", "card-date")

        imgFrame.appendChild(categoryNode)
        imgFrame.style.backgroundImage = "url(" + cardsArray[i].img + ")"

        cardFrameNode.appendChild(imgFrame)
        cardFrameNode.appendChild(dateNode)
        cardFrameNode.appendChild(titleNode)
        cardFrameNode.appendChild(descriptionNode)
        container.appendChild(cardFrameNode)
    }
}