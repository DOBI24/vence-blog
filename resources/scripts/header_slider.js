let sliderTime = 10 //sec
let headerSliderID = 0
let bgHeaderID = true
let h_animationIndex = 0

const setHeaderBG = async () => {
    const response = await fetch("https://api.slingacademy.com/v1/sample-data/photos?offset=64&limit=5")
    return await response.json()
}

function slideHeader(data){
    document.getElementById("header-slider-index").innerHTML = (headerSliderID+1)+"/5"
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

    switch (h_animationIndex) {
        case 0:
            document.getElementById("header-bg-"+1).style.backgroundImage = "url(" + data.photos[headerSliderID].url + ")"
            headerSliderID++
            document.getElementById("header-bg-"+2).style.backgroundImage = "url(" + data.photos[headerSliderID].url + ")"
            h_animationIndex++
            break
        case 1:
            headerSliderID++
            if (headerSliderID === 5) headerSliderID = 0

            document.getElementById("header-bg-"+(bgHeaderID ? 1 : 2)).animate(
                {
                    transform: "translateX(100%)"
                },
                {
                    duration: 1000,
                    iterations: 1,
                    easing: "ease-in-out"
                }
            )
            document.getElementById("header-bg-"+(bgHeaderID ? 2 : 1)).animate(
                {
                    transform: "translateX(0)"
                },
                {
                    duration: 1000,
                    iterations: 1,
                    easing: "ease-in-out",
                }
            )
            setTimeout(function(){
                document.getElementById("header-bg-"+(bgHeaderID ? 1 : 2)).style.transform = "translateX(-100%)"
                document.getElementById("header-bg-"+(bgHeaderID ? 2 : 1)).style.transform = "translateX(0)"
                document.getElementById("header-bg-"+(bgHeaderID ? 1 : 2)).style.backgroundImage = "url(" + data.photos[headerSliderID].url + ")"
                bgHeaderID = !bgHeaderID
            }, 1000)
            break
    }
}

setHeaderBG().then(r => {
    slideHeader(r)
    setInterval(slideHeader, sliderTime*1000, r)
})