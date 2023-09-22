let headerSliderID = 0
let sliderTime = 10 //sec

const setHeaderBG = async () => {
    const response = await fetch("https://api.slingacademy.com/v1/sample-data/photos?offset=31&limit=5")
    const data = await response.json()

    slideHeader(data)
    document.getElementById("header-slider-line").animate(
        [
            { width: '0'},
            { width: '100%'}
        ],
        {
            duration: sliderTime*1000,
            iterations: Infinity
        }
    )
}

function slideHeader(data){
    document.getElementById("header").style.backgroundImage = "url(" + data.photos[headerSliderID].url + ")"
    document.getElementById("header-slider-index").innerHTML = (headerSliderID+1)+"/5"
    headerSliderID++
    if (headerSliderID === 5) headerSliderID = 0

    setTimeout(slideHeader, sliderTime*1000, data);
}

setHeaderBG()