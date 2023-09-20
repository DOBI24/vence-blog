let urls = {
    "img" : ["https://api.slingacademy.com/v1/sample-data/photos?offset=80&limit=9", "photos"],
    "name" : ["https://api.slingacademy.com/v1/sample-data/users?limit=9", "users"],
    "blogpost" : ["https://api.slingacademy.com/v1/sample-data/blog-posts?limit=9", "blogs"],
}

const getCardInformation = async () => {
    let datas = new Map()
    for (let key in urls) {
        let data = await fetchData(urls[key][0])
        datas.set(key, data[urls[key][1]])
    }
    console.log(datas)
    //
    const container = document.getElementById("cards-container")
    for (let i = 0; i < 9; i++) {
        const cardFrameNode = document.createElement("div")
        const titleNode = document.createElement("div")
        const imgFrame = document.createElement("div")
        const descriptionNode = document.createElement("div")
        const userNode = document.createElement("div")
        const categoryNode = document.createElement("div")
        const dateNode = document.createElement("time")

        addTextNodeToNode(titleNode, datas.get("blogpost")[i].title)
        addTextNodeToNode(descriptionNode, datas.get("blogpost")[i].description)
        addTextNodeToNode(userNode, "By: " + datas.get("name")[i].first_name + " " + datas.get("name")[i].last_name)
        addTextNodeToNode(categoryNode, datas.get("blogpost")[i].category)
        addTextNodeToNode(dateNode, datas.get("blogpost")[i].created_at)
        // datas.get("img")[i].url

        cardFrameNode.setAttribute("class", "card-frame")
        titleNode.setAttribute("class", "card-title")
        imgFrame.setAttribute("class", "card-img")
        descriptionNode.setAttribute("class", "card-description")
        userNode.setAttribute("class", "card-user")
        categoryNode.setAttribute("class", "card-category")
        dateNode.setAttribute("class", "card-date")

        imgFrame.appendChild(categoryNode)

        cardFrameNode.appendChild(imgFrame)
        cardFrameNode.appendChild(dateNode)
        cardFrameNode.appendChild(titleNode)
        cardFrameNode.appendChild(descriptionNode)
        cardFrameNode.appendChild(userNode)
        container.appendChild(cardFrameNode)
    }
}

function addTextNodeToNode(node, text){
    node.appendChild(document.createTextNode(text))
}

async function fetchData(url){
    const response = await fetch(url)
    return await response.json()
}

getCardInformation()