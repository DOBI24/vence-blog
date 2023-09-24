let topicsSliderID = 0;
let bgTopicsID = true

const setTopicsBG = async () => {
    const response = await fetch("https://api.slingacademy.com/v1/sample-data/photos?offset=38&limit=5")
    return await response.json()
}

function slideTopics(data){
    document.getElementById("topics-bg-"+(bgTopicsID ? 1 : 2)).style.display = "block"
    document.getElementById("topics-bg-"+(bgTopicsID ? 2 : 1)).style.display = "none"

    document.getElementById("topics-bg-"+(bgTopicsID ? 1 : 2)).style.backgroundImage = "url(" + data.photos[topicsSliderID].url + ")"
    document.getElementById("topics-slider-index").innerHTML = (topicsSliderID+1)+"/5"

    topicsSliderID++
    if (topicsSliderID === 5) topicsSliderID = 0
    bgTopicsID = !bgTopicsID

    document.getElementById("topics-bg-"+(bgTopicsID ? 1 : 2)).style.backgroundImage = "url(" + data.photos[topicsSliderID].url + ")"

    document.getElementById("topics-slider-line").animate(
        [
            { width: '0'},
            { width: '100%'}
        ],
        {
            duration: sliderTime*1000,
            iterations: 1
        }
    )
}

setTopicsBG().then(r => {
    slideTopics(r)
    setInterval(slideTopics, sliderTime*1000, r)
})