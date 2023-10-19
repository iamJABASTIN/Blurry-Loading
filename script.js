const bg = document.querySelector('.bg')

const loadingText = document.querySelector('.loading-text')

let load = 0

let int = setInterval(blurring, 30)

function blurring(){
    load++

    if(load > 99){
        clearInterval(int)
    }
    
    loadingText.innerText = `${load}%`
    loadingText.style.opacity = scale(load, 0, 100, 1, 0)
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px )`

}

//Stack overflow function 

const scale = ( num, inMin, inMax, outMin, outMax) => {
    return ((num-inMin) * (outMax - outMin)) / (inMax - inMin) +outMin
}