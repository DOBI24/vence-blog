let headerSliderID = 0
let sliderTime = 3 //sec
let bgID = true

const setHeaderBG = async () => {
    const response = await fetch("https://api.slingacademy.com/v1/sample-data/photos?offset=110&limit=5")
    const data = await response.json()

    slideHeader(data)
    setInterval(slideHeader, sliderTime*1000, data)
}

function slideHeader(data){
    document.getElementById("header-bg-"+(bgID ? 1 : 2)).style.display = "block"
    document.getElementById("header-bg-"+(bgID ? 2 : 1)).style.display = "none"

    document.getElementById("header-bg-"+(bgID ? 1 : 2)).style.backgroundImage = "url(" + data.photos[headerSliderID].url + ")"
    document.getElementById("header-slider-index").innerHTML = (headerSliderID+1)+"/5"

    headerSliderID++
    if (headerSliderID === 5) headerSliderID = 0
    bgID = !bgID

    document.getElementById("header-bg-"+(bgID ? 1 : 2)).style.backgroundImage = "url(" + data.photos[headerSliderID].url + ")"

    document.getElementById("header-slider-line").animate(
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

setHeaderBG()