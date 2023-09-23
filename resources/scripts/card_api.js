let maxBlogPost = 20
let urls = {
    "img" : ["https://api.slingacademy.com/v1/sample-data/photos?offset=80&limit="+maxBlogPost, "photos"],
    "name" : ["https://api.slingacademy.com/v1/sample-data/users?limit="+maxBlogPost, "users"],
    "blogpost" : ["https://api.slingacademy.com/v1/sample-data/blog-posts?offset=150&limit="+maxBlogPost, "blogs"],
}
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let cardsArray = []

const getCardInformation = async () => {
    let imgData = await fetchData(urls["img"][0])
    let nameData = await fetchData(urls["name"][0])
    let blogpostData = await fetchData(urls["blogpost"][0])

    for (let i = 0; i < maxBlogPost; i++) {
        cardsArray.push(new Card(
            imgData.photos[i].url,
            new Date(blogpostData.blogs[i].created_at),
            blogpostData.blogs[i].title,
            blogpostData.blogs[i].description,
            blogpostData.blogs[i].category,
            nameData.users[i].first_name + " " + nameData.users[i].last_name
        ))
    }
    setMainCards()
    setFeaturedTopicsCards()
    setFooterCards()
}

function addTextNodeToNode(node, text){
    node.appendChild(document.createTextNode(text))
}

async function fetchData(url){
    const response = await fetch(url)
    return await response.json()
}

getCardInformation()