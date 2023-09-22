let currentBlogPostCount = 2
function moreCardButtonClick(){
    if ((currentBlogPostCount*3) < maxBlogPost){
        currentBlogPostCount++
        document.getElementById("cards-container").style.gridTemplateRows = "repeat(" + currentBlogPostCount + ", 1fr)"
    }
    if (currentBlogPostCount*3 === maxBlogPost)
        document.getElementById("more-cards").style.display = "none"
}