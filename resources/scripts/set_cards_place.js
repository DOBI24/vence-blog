function setMainCards(){
    setCards(
        "cards-container",
        0,
        maxBlogPost-7,
        "card-frame",
        "card-title",
        "card-description",
        "card-date",
        "card-img",
        true,
        true)
}

function setFeaturedTopicsCards(){
    setCards(
        "topics-cards-card",
        maxBlogPost-7,
        maxBlogPost-4,
        "topics-card",
        "topics-card-title",
        "topics-card-description card-date",
        "topics-card-date card-date",
        "topics-card-image",
        false,
        false,
        true)
}

function setFooterCards(){
    setCards(
        "footer-card-container",
        maxBlogPost-4,
        maxBlogPost,
        "card-frame",
        "card-title footer-card-title",
        "card-description",
        "card-date",
        "card-img footer-card-img",
        false,
        true)
}

function setCards(
    containerID,
    fromIndex,
    toIndex,
    cardFrameNodeClass,
    titleNodeClass,
    descriptionNodeClass,
    dateNodeClass,
    imgFrameClass,
    usernode = false,
    categorynode = false,
    detailsnode = false
    ){
    const container = document.getElementById(containerID)
    for (let i = fromIndex; i < toIndex; i++) {
        const cardFrameNode = document.createElement("div")
        const titleNode = document.createElement("div")
        const descriptionNode = document.createElement("div")
        const dateNode = document.createElement("time")
        const imgFrame = document.createElement("div")
        let detailsNode = null
        let userNode = null
        let categoryNode = null

        if (usernode){
            userNode = document.createElement("div")
            addTextNodeToNode(userNode, "By: " + cardsArray[i].username)
            console.log("card-user " + (typeof usernode == "string" ? usernode : ""))
            userNode.setAttribute("class", "card-user " + (typeof usernode == "string" ? usernode : ""))
        }
        if (categorynode){
            categoryNode = document.createElement("div")
            addTextNodeToNode(categoryNode, cardsArray[i].category)
            categoryNode.setAttribute("class", "card-category " + (typeof categorynode == "string" ? categorynode : ""))
        }

        addTextNodeToNode(titleNode, cardsArray[i].title)
        addTextNodeToNode(descriptionNode, cardsArray[i].description)
        addTextNodeToNode(dateNode, ("0"+cardsArray[i].date.getDate()).slice(-2)+"."+months[cardsArray[i].date.getMonth()].substring(0,3)+"."+cardsArray[i].date.getFullYear())
        imgFrame.style.backgroundImage = "url("+ cardsArray[i].img +")"

        cardFrameNode.setAttribute("class", cardFrameNodeClass)
        titleNode.setAttribute("class", titleNodeClass)
        descriptionNode.setAttribute("class", descriptionNodeClass)
        dateNode.setAttribute("class", dateNodeClass)
        imgFrame.setAttribute("class", imgFrameClass)

        if (categorynode) imgFrame.appendChild(categoryNode)

        cardFrameNode.appendChild(imgFrame)
        if (detailsnode){
            detailsNode = document.createElement("div")
            detailsNode.appendChild(dateNode)
            detailsNode.appendChild(titleNode)
            detailsNode.appendChild(descriptionNode)
            cardFrameNode.appendChild(detailsNode)
        }
        else{
            cardFrameNode.appendChild(dateNode)
            cardFrameNode.appendChild(titleNode)
            cardFrameNode.appendChild(descriptionNode)
        }

        if (usernode) cardFrameNode.appendChild(userNode)
        container.appendChild(cardFrameNode)
    }
}