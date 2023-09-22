let topicsSliderID = 0;

const setTopicsBG = async () => {
    const response = await fetch("https://api.slingacademy.com/v1/sample-data/photos?offset=38&limit=5")
    const data = await response.json()

    slideTpoics(data)
    setInterval(slideTpoics, sliderTime*1000, data)
}

function slideTpoics(data){
    document.getElementById("topics-image-slider").style.backgroundImage = "url(" + data.photos[topicsSliderID].url + ")"
    document.getElementById("topics-slider-index").innerHTML = (topicsSliderID+1)+"/5"
    topicsSliderID++
    if (topicsSliderID === 5) topicsSliderID = 0
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

setTopicsBG()