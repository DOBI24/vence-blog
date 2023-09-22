let maxBlogPost = 12
let urls = {
    "img" : ["https://api.slingacademy.com/v1/sample-data/photos?offset=80&limit="+maxBlogPost, "photos"],
    "name" : ["https://api.slingacademy.com/v1/sample-data/users?limit="+maxBlogPost, "users"],
    "blogpost" : ["https://api.slingacademy.com/v1/sample-data/blog-posts?offset=150&limit="+maxBlogPost, "blogs"],
}
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const getCardInformation = async () => {
    let datas = new Map()
    for (let key in urls) {
        let data = await fetchData(urls[key][0])
        datas.set(key, data[urls[key][1]])
    }
    const container = document.getElementById("cards-container")
    for (let i = 0; i < maxBlogPost; i++) {
        const cardFrameNode = document.createElement("div")
        const titleNode = document.createElement("div")
        const imgFrame = document.createElement("div")
        const descriptionNode = document.createElement("div")
        const userNode = document.createElement("div")
        const categoryNode = document.createElement("div")
        const dateNode = document.createElement("time")
        const date = new Date(datas.get("blogpost")[i].created_at)

        addTextNodeToNode(titleNode, datas.get("blogpost")[i].title)
        addTextNodeToNode(descriptionNode, datas.get("blogpost")[i].description)
        addTextNodeToNode(userNode, "By: " + datas.get("name")[i].first_name + " " + datas.get("name")[i].last_name)
        addTextNodeToNode(categoryNode, datas.get("blogpost")[i].category)
        addTextNodeToNode(dateNode, ("0"+date.getDate()).slice(-2)+"."+months[date.getMonth()].substring(0,3)+"."+date.getFullYear())

        cardFrameNode.setAttribute("class", "card-frame")
        titleNode.setAttribute("class", "card-title")
        imgFrame.setAttribute("class", "card-img")
        descriptionNode.setAttribute("class", "card-description")
        userNode.setAttribute("class", "card-user")
        categoryNode.setAttribute("class", "card-category")
        dateNode.setAttribute("class", "card-date")

        imgFrame.appendChild(categoryNode)
        imgFrame.style.backgroundImage = "url("+ datas.get("img")[i].url +")"

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