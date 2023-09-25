
let topicsSliderID = 0;
let bgTopicsID = true
let t_animationIndex = 0

const setTopicsBG = async () => {
    const response = await fetch("https://api.slingacademy.com/v1/sample-data/photos?offset=38&limit=5")
    return await response.json()
}

function slideTopics(data){
    document.getElementById("topics-slider-index").innerHTML = (topicsSliderID+1)+"/5"
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

    switch (t_animationIndex) {
        case 0:
            document.getElementById("topics-bg-"+1).style.backgroundImage = "url(" + data.photos[topicsSliderID].url + ")"
            topicsSliderID++
            document.getElementById("topics-bg-"+2).style.backgroundImage = "url(" + data.photos[topicsSliderID].url + ")"
            t_animationIndex++
            break
        case 1:
            topicsSliderID++
            if (topicsSliderID === 5) topicsSliderID = 0

            document.getElementById("topics-bg-"+(bgTopicsID ? 1 : 2)).animate(
                {
                    transform: "translateX(100%)"
                },
                {
                    duration: 1000,
                    iterations: 1,
                    easing: "ease-in-out"
                }
            )
            document.getElementById("topics-bg-"+(bgTopicsID ? 2 : 1)).animate(
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
                document.getElementById("topics-bg-"+(bgTopicsID ? 1 : 2)).style.transform = "translateX(-100%)"
                document.getElementById("topics-bg-"+(bgTopicsID ? 2 : 1)).style.transform = "translateX(0)"
                document.getElementById("topics-bg-"+(bgTopicsID ? 1 : 2)).style.backgroundImage = "url(" + data.photos[topicsSliderID].url + ")"
                bgTopicsID = !bgTopicsID
            }, 1000)
            break
    }
}

setTopicsBG().then(r => {
    slideTopics(r)
    setInterval(slideTopics, sliderTime*1000, r)
})