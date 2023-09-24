let maxBlogPost = 20
let urls = {
    "img" : "https://api.slingacademy.com/v1/sample-data/photos?offset=80&limit="+maxBlogPost,
    "name" : "https://api.slingacademy.com/v1/sample-data/users?limit="+maxBlogPost,
    "blogpost" : "https://api.slingacademy.com/v1/sample-data/blog-posts?offset=150&limit="+maxBlogPost,
}
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let cardsArray = []

const getCardInformation = async () => {
    const imgData = await fetchData(urls["img"])
    const nameData = await fetchData(urls["name"])
    const blogpostData = await fetchData(urls["blogpost"])

    return {"imgData" : imgData, "nameData" : nameData, "blogpostData" : blogpostData}
}

function createCardObjects(data){
    console.log(data)
    for (let i = 0; i < maxBlogPost; i++) {
        cardsArray.push(new Card(
            data["imgData"].photos[i].url,
            new Date(data["blogpostData"].blogs[i].created_at),
            data["blogpostData"].blogs[i].title,
            data["blogpostData"].blogs[i].description,
            data["blogpostData"].blogs[i].category,
            data["nameData"].users[i].first_name + " " + data["nameData"].users[i].last_name
        ))
    }
}

function addTextNodeToNode(node, text){
    node.appendChild(document.createTextNode(text))
}

async function fetchData(url){
    const response = await fetch(url)
    return await response.json()
}

getCardInformation().then(r => {
    createCardObjects(r)
    setMainCards()
    setFeaturedTopicsCards()
    setFooterCards()
})