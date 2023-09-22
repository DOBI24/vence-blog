const setHeaderBG = async (url) => {
    const response = await fetch(url)
    const data = await response.json()
    document.getElementById("header").style.backgroundImage =  "url("+ data.photo.url +")"
}

setHeaderBG('https://api.slingacademy.com/v1/sample-data/photos/35')