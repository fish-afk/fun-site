let about_btn = document.getElementById('about-btn')
let desc = document.querySelector('#description')
let body = document.getElementsByTagName('BODY')[0]

let arr_of_triangs = [document.getElementById('triangle1'), document.getElementById('triangle2'),document.getElementById('triangle3'),
document.getElementById('triangle4')]


let arr_of_squares = [document.getElementById('square1'), document.getElementById('square2'),document.getElementById('square3'),
document.getElementById('square4')]


let abt_me_link_click = document.getElementById('aboutme')
let dark_mode_lnk = document.getElementById('dark-mode')
let light_mode_lnk = document.getElementById('light-mode')

let top_box = document.getElementById('container')


// function for scrolling <smoothly>  after clicking about me...

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }



async function sleeper_scroll(){

    for(let i = 0; i <= 201; i += 7){

        await sleep(25)
        window.scrollBy(0, i);
    
    }
}

light_mode_lnk.addEventListener("click", function(){

    body.style.backgroundColor = "white"
    body.style.color = "black"


    for(let i = 0; i <= arr_of_squares.length; i++) {

        arr_of_squares[i].style.backgroundColor = "white"
        arr_of_squares[i].style.outlineColor = "black"

        arr_of_triangs[i].style.borderTop = "50px solid black"
    }

})


dark_mode_lnk.addEventListener("click", function() {

    body.style.backgroundColor = "black"
    body.style.color = "white"


    for(let i = 0; i <= arr_of_squares.length; i++) {

        arr_of_squares[i].style.backgroundColor = "black"
        arr_of_squares[i].style.outlineColor = "white"

        arr_of_triangs[i].style.borderTop = "50px solid white"
    }

})

abt_me_link_click.addEventListener("click", function(){

    sleeper_scroll()

})

about_btn.addEventListener("click", function(){
    sleeper_scroll()

})


