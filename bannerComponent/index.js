const nextButton = document.getElementsByClassName('nextButton')[0]
const prevButton = document.getElementsByClassName('prevButton')[0] 
let imgConcat = document.getElementsByClassName('imgConcat')[0]

let currentPage = 1;
imgConcat.style.transform = `translate(-${currentPage * 1200}px,0)`
imgConcat.style.transition = `transform 0.4s`

let interv = setInterval(()=>{
    handleNextButtonClick()
},1000)

const handleNextButtonClick = () => {
    currentPage += 1
    imgConcat.style.transition = `transform 0.4s`
    imgConcat.style.transform = `translate(-${currentPage * 1200}px,0)`
    if(currentPage > 6){
        setTimeout(()=>{
            imgConcat.style.transition = `transform 0s`
            currentPage = 1
            imgConcat.style.transform = `translate(-${currentPage * 1200}px,0)`
        },400)
    }
}
const handlePrevButtonClick = () => {
    currentPage -= 1
    imgConcat.style.transition = `transform 0.4s`
    imgConcat.style.transform = `translate(-${currentPage * 1200}px,0)`
    if(currentPage < 1){
        setTimeout(()=>{
            imgConcat.style.transition = `transform 0s`
            currentPage = 6
            imgConcat.style.transform = `translate(-${currentPage * 1200}px,0)`
        },400)
    }
}

nextButton.addEventListener('click',handleNextButtonClick)
prevButton.addEventListener('click',handlePrevButtonClick)
imgConcat.addEventListener('mouseenter',()=>{clearInterval(interv)})
imgConcat.addEventListener('mouseleave',()=>{
    interv = setInterval(()=>{
        handleNextButtonClick()
    },1000)
})
nextButton.addEventListener('mouseenter',()=>{clearInterval(interv)})
nextButton.addEventListener('mouseleave',()=>{
    interv = setInterval(()=>{
        handleNextButtonClick()
    },1000)
})
prevButton.addEventListener('mouseenter',()=>{clearInterval(interv)})
prevButton.addEventListener('mouseleave',()=>{
    interv = setInterval(()=>{
        handleNextButtonClick()
    },1000)
})