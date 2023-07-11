//GENERAL
//get rid of home choice in drop down as left corner does same thing
//give extra space to "numbers" or base space off of length of word
//circle (with D?) at top left for pages within pages (sonification)
//suggestions on all pages, error cha-ua-form-factor on soundtrack
//make pages (esp images) load quicker
//make urls not have .html at the ends
//"numbers" category of data/science/policy/climate - sonifications videos and grahics, building decarbonization widget, wealth inequality, Indian energy sector sentiments, climate tech funding
//book reports?
//write more!
//compatibility for depreceated browsers - test - if (css.supports ...) {...} - more advanced as time goes on
//js for analytics?
//are noMobile classes necessary or should they move to a default?
//copyrights?
//READ.me?
//github access change to SSH?
//clean up styling and structure to use best consistent coding practices - get rid of inline style, rename classes and ids, computer lang for apostrophes, ''"", etc

//HOMEPAGE
//signature on home page below animation
//change amount that animation scales upon hover
//ghost black lines over hand
//event on click of ball? rotate360? save until can develop stacked animations?
//should translate= be the same on all paths?
//only one path? line of ball morphing into skyline?
//ball with light in direction of cursor and shadow opposite? swirly lines/bounce? static rotation? box shadows w white?

//IMAGES
//appear explanation of piece on hover - grey out image with words on top
//add grinchy, photoshop black in geo city, any others
//make images load with pursposeful delay like Anna's site
//filter options for all, paint, digital, pen, other (change?) - "all" button on left automatically pressed, others get rid of non-category - how to make consistent with design lang?
//perfect the scrolling behavior with padding on very top?
//sign images/embed with transparent first layer?

//WORDS
//"swipe" not working on phone?
//add essays from school?
//allow option to select random writing piece?
//perfect sizing? and perfect border/padding on hover?
//need arrows? how to disappear/reappear correctly?, arrow at top when zoomed to return to words page?

//ABOUT
//add explanation of numbers once added
//artists statement expand upon - harmony? change/make consistent with portfolio?
//why photo not justifying with space-between?
//support via donation?
//link to places of work? Say names/explanations?
//handle form data via google forms/tutorial for now, do backend (Python, flask, more detailed AJAX handling) once understand security implications - add recaptcha verification?
//don't handle empty forms?

//NUMBERS
//what layout - how to create square sizing if square - how to change for mobile
//link within entire container
//dropdowns within pagedrop
//FOR SOUNDTRACK
//make compatible with mobile
//data and code sources autoscroll into view all the time - potentially others too
//widget to upload a dataset and have it sampled according to these choices
//change full thesis uploaded to include new edits
//switch all over to new youtube with better titles - or upload from non-Youtube site
//line animation like dropdown on collapsibles?
//make iframes look like they're not youtube vids?
//collapsed collapsibles stick to the bottom so that a reader can see all options?


//check for mobile for compatibility changes
let check = false;
if(/Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) check = true;

if (check === true) console.log('mobile');
if (check === false) console.log('noMobile');


//dropdown menu on hover, lines flip up 90
const topBar = document.querySelector('#topBar');
const dropDownBtn = document.querySelector('.topBarLine');
const pageDrop = Array.from(document.getElementsByClassName('pageDrop'));

if (check === true) {
    dropDownBtn.remove();
    pageDrop.forEach(page => {
        page.classList.remove('hide');
        page.classList.add('show');
        page.classList.add('mobile');
    })
}

else {
dropDownBtn.addEventListener('mouseover', () => {
    pageDrop.forEach(page => {
        page.classList.add('noMobile');
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
}


//ball animation
const ball = document.querySelector('.ball');
const middleMain = document.querySelector('.middleMain');
const welcomeBlurb = document.querySelector('.welcomeBlurb')

if (check === false) {
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
}


//image page scroll set to none when mobile
const gallery = document.querySelector('.gallery');

if (check === true) {
    if (gallery) gallery.classList.add('mobile')
}

else if (gallery) gallery.classList.add('noMobile');


//word page post expand to full screen when clicked, scroll further when arrow is clicked
const posts = Array.from(document.querySelectorAll('.post'));

if (posts.length>0) {
    posts.forEach(post => {
        if (check === false) {
            post.addEventListener('mouseover', () => {
            post.classList.add('isHover');
        })

        post.addEventListener('mouseleave', () => {
            post.classList.toggle('isHover');
        })
    }

        post.addEventListener('click', () => {
            post.requestFullscreen();
        })
    })
}

let post1 = document.querySelector('.post1');
if (check === true) post1.setHTML('Swipe →');

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


//about page check for mobile 
let aboutMeImg = document.querySelector('.aboutMeImg');
if (check === true && aboutMeImg) aboutMeImg.classList.add('mobile');
else if (aboutMeImg) aboutMeImg.classList.add('noMobile');

let aboutText = document.querySelector('.aboutText');
if (check === true && aboutText) aboutText.classList.add('mobile');
else if (aboutMeImg) aboutText.classList.add('noMobile');

let thoughts = document.querySelector('.thoughts');
if (check === true && thoughts) thoughts.classList.add('mobile');
else if (aboutMeImg) thoughts.classList.add('noMobile');


//sonification collapsibles and elements of sonic experience tabs
let collapseButtons = Array.from(document.getElementsByClassName('collapseButton'));
if (collapseButtons.length > 0) {
    collapseButtons.forEach(butt => {
    butt.addEventListener('click', () => {
        let text = butt.nextElementSibling;
        text.classList.toggle('active');
        if (text.classList.contains('active')) {
            text.style.maxHeight = text.scrollHeight + 'px';
        } else {
            text.style.maxHeight = 0;
        }
})})}

let sonicButtons = Array.from(document.getElementsByClassName('sonicButton'));
let sonicTabTexts = Array.from(document.getElementsByClassName('sonicTabText'));
if (sonicButtons.length > 0) {
        sonicButtons[0].classList.add("clicked");
        sonicTabTexts[0].classList.add("show");
        for (let i = 0; i < sonicButtons.length; i++) {
        sonicButtons[i].addEventListener("click", () => {
          for (let j = 0; j < sonicTabTexts.length; j++) {
            sonicTabTexts[j].classList.remove("show");
          }
          sonicTabTexts[i].classList.add("show");
          for (let k = 0; k < sonicButtons.length; k++) {
            sonicButtons[k].classList.remove("clicked");
          }
          sonicButtons[i].classList.add("clicked");
        });
      }}

if (check === true && sonicButtons.length>0) {
    collapseButtons.forEach(classList.add('mobile'))
}
  
  
  
  
  
  
