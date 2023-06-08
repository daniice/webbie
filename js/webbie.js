//LAUNCH!!!

//GENERAL
//"numbers" category of data/science/policy/climate - sonifications videos and grahics, building decarbonization widget, wealth inequality, Indian energy sector sentiments
//book reports?
//READ.me?
//all js files bundled as one - wrap sometimes unnecessary functions in if statements - until need to collect data
//compatibility for ios/depreceated browsers - test - if (css.supports ...) {...}
//github access change to SSH?

//HOMEPAGE
//ghost black lines over hand
//should translate= be the same on all paths?
//only one path?
//line of ball morphing into skyline
//event on click of ball? rotate360?
//ball with light in direction of cursor and shadow opposite? swirly lines/bounce? static rotation? box shadows w white?

//IMAGES
//appear explanation of piece on hover - grey out image with words on top
//filter options for all, paint, digital, pen, other (change?) - "all" button on left automatically pressed, others get rid of non-category - how to make consistent with design lang?
//perfect the scrolling behavior with padding on very top
//add grinchy, photoshop black in geo city, any others to add?
//make images load with pursposeful delay like Anna's site
//sign images/embed with transparent first layer?

//WORDS
//allow option to select random writing piece?
//perfect sizing? and perfect border/padding on hover
//add explanation blurb at front
//perfect arrows disappear - how to work with scroll interaction?, arrow at top to return to words page?

//ABOUT
//add explanation of numbers once added
//why photo not justifying with space-between?
//support via donation?
//link to places of work? Say names/explanations?
//handle form data via google forms for now - AJAX form handling?, do backend (Python, flask) once understand security implications - add recaptcha verification?

//dropdown menu on hover, lines flip up 90
const topBar = document.querySelector('#topBar');
const dropDownBtn = document.querySelector('.topBarLine');
const pageDrop = Array.from(document.getElementsByClassName('pageDrop'));

dropDownBtn.addEventListener('mouseover', () => {
    pageDrop.forEach(page => {
        page.classList.add('show');

        page.addEventListener('mouseover', () => {
            page.classList.add('show');
        })
    })

    dropDownBtn.classList.add('isHover');
})

topBar.addEventListener('mouseleave', () => {
    pageDrop.forEach(page => {
        page.classList.remove('show');
    })
    dropDownBtn.classList.remove('isHover');
})


//ball animation
const ball = document.querySelector('.ball');
const middleMain = document.querySelector('.middleMain');
const welcomeBlurb = document.querySelector('.welcomeBlurb')

if (ball) {
middleMain.addEventListener('mouseover', () => {
    ball.classList.add('isHover');
    welcomeBlurb.classList.add('show');
  });

middleMain.addEventListener('mouseleave', () => {
    ball.classList.toggle('isHover');
    welcomeBlurb.classList.remove('show');
})
}


//word page post expand to full screen when clicked, scroll further when arrow is clicked
const posts = Array.from(document.querySelectorAll('.post'));

if (posts.length>0) {
    posts.forEach(post => {
        post.addEventListener('mouseover', () => {
            post.classList.add('isHover');
        })

        post.addEventListener('mouseleave', () => {
            post.classList.toggle('isHover');
        })

        post.addEventListener('click', () => {
            post.requestFullscreen();
        })
    })
}

const sideArrowRight = document.querySelector('#sideArrowRight');
const sideArrowLeft = document.querySelector('#sideArrowLeft');
const postContainer = document.querySelector('.postContainer');

if (sideArrowRight) {
    sideArrowLeft.classList.add('hide');
    sideArrowRight.addEventListener('click', () => {
        const scrollPercent = 100 * (postContainer.scrollLeft + 300) / (postContainer.scrollWidth-postContainer.clientWidth);
        postContainer.scrollBy({
            top: 0,
            left: 300,
            behavior : "smooth"
        })
        sideArrowLeft.classList.remove('hide');
        if (scrollPercent > 70) sideArrowRight.classList.add('hide');
        })
}

if (sideArrowLeft) {
        sideArrowLeft.addEventListener('click', () => {
            if (sideArrowRight.classList.contains('hide')) sideArrowRight.classList.remove('hide');
            const scrollPercent = 100 * (postContainer.scrollLeft) / (postContainer.scrollWidth-postContainer.clientWidth);
            console.log(scrollPercent);
            if (scrollPercent < 35) sideArrowLeft.classList.add('hide');
            postContainer.scrollBy({
                top: 0,
                left: -300,
                behavior : "smooth"
            })
        })
}


//about page thought entry
const form = document.querySelector('#thoughtEntry');
if (form) (
    form.addEventListener('submit', () => {
        console.log(submitted);
        location.reload();
    })
)