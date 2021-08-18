let about_btn = document.getElementById('about-btn')
let desc2 = document.querySelector('#description2')
let body = document.getElementsByTagName('BODY')[0]

const arr_of_triangs = [document.getElementById('triangle1'), document.getElementById('triangle2'),document.getElementById('triangle3'),
 document.getElementById('triangle4')]

const arr_of_squares = [document.getElementById('square1'), document.getElementById('square2'),document.getElementById('square3'),
document.getElementById('square4')]


const abt_me_link_click = document.getElementById('aboutme')
const dark_mode_lnk = document.getElementById('dark-mode')
const light_mode_lnk = document.getElementById('light-mode')

let top_bar = document.getElementById('container')
let footer = document.getElementById('footer')
let social_lnk_container = document.querySelector('#social-links')

let light_mode = true
let dark_mode = false

let skills_cont = document.getElementById('skills-container')


// function for scrolling <smoothly>  after clicking about me...

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }



async function sleeper_scroll(){

    for(let i = 0; i <= 190; i += 7){

        await sleep(25)
        window.scrollBy(0, i);
    
    }
}


light_mode_lnk.addEventListener("click", function(){

    body.style.backgroundColor = "white"
    body.style.color = "black"
    top_bar.style.outline = "3px solid black"
    
    light_mode = true
    dark_mode = false
    console.log(dark_mode, light_mode)


    for(let i = 0; i <= arr_of_squares.length; i++) {

        arr_of_squares[i].style.backgroundColor = "white"
        arr_of_squares[i].style.outlineColor = "black"

        arr_of_triangs[i].style.borderTop = "50px solid black"
    }

})




dark_mode_lnk.addEventListener("click", function() {

    body.style.backgroundColor = "black"
    body.style.color = "white"
    footer.style.outline = "5px solid white"
    top_bar.style.outline = "3px solid white"

    dark_mode = true
    light_mode = false
    console.log(dark_mode, light_mode)


    for(let i = 0; i <= arr_of_squares.length; i++) {

        arr_of_squares[i].style.backgroundColor = "black"
        arr_of_squares[i].style.outlineColor = "white"

        arr_of_triangs[i].style.borderTop = "50px solid white"
    }

})



social_lnk_container.addEventListener("mouseover", function(){

    social_lnk_container.style.outline = "5px solid white"
    social_lnk_container.style.transition = "all 500ms ease-in-out"

})


abt_me_link_click.addEventListener("click", function(){

    sleeper_scroll()

})

about_btn.addEventListener("click", function(){
    sleeper_scroll()

})



const logos = [document.getElementById("insta"), document.getElementById("twitter"), document.getElementById('github')]


function click_listener2(logo1, logo2, logo3){

    logo1.addEventListener("click", function(){

        window.open('https://www.instagram.com/__shiaab/', '_blank');
    })

    logo2.addEventListener("click", function(){

        window.open('https://twitter.com/Dev_st123', '_blank')
    })

    logo3.addEventListener("click", function(){

        window.open('https://github.com/fish-afk', '_blank')
    })


}

click_listener2(logos[0], logos[1], logos[2])


const logos0 = [document.getElementById('pythonpic'),document.getElementById('weblangpic'),document.getElementById('vbpic')]


function click_listener(pic1, pic2, pic3){

    pic1.addEventListener("click", function(){


        window.open('https://www.python.org/', '_blank');
    })

    pic2.addEventListener("click", function(){


        window.open('https://blog.hubspot.com/marketing/web-design-html-css-javascript', '_blank');
    })

    pic3.addEventListener("click", function(){


        window.open('https://docs.microsoft.com/en-us/dotnet/visual-basic/', '_blank');
    })


}

click_listener(logos0[0], logos0[1], logos0[2])














