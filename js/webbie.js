//GENERAL
//"numbers" category of data/science/policy/climate - building decarbonization widget, uncertainty in climate models, DES systems, wealth inequality, climate tech funding, heat pumps, power markets, energy sector player sentiments/interactions, generative design
//compatibility with ipad!
//for bold fonts, just underline, or switch do a different?
//make urls not have .html at the ends
//move noMobile classes to default
//book reports
//write more!
//link to github with PBDW map and data widgets in future
//Google search and traffic analytics with console
//keep rereading and editing content and linking between contents
//get to audience with networking and/or Twitter/LinkedIn
//SEO - alt text for images
//suggestions on all pages, error cha-ua-form-factor on soundtrack
//clean up styling and structure to use best consistent coding practices - turn images and others into objects, optimize code, add functions, get rid of inline style, rename classes and ids, computer lang for apostrophes, ''"", reduce file size, etc
//compatibility for depreceated browsers - test - if (css.supports ...) {...} - more advanced as time goes on
//cookies and js analytics?
//copyrights?
//READ.me?
//signature only on home page?
//get rid of home choice in drop down as left corner does same thing?

//HOMEPAGE
//ghost black lines over hand
//new welcome message including numbers?
//event on click of ball? rotate360? save until develop stacked animations?
//should translate= be the same on all paths?
//only one path? line of ball morphing into skyline?
//ball with light in direction of cursor and shadow opposite? swirly lines/bounce? static rotation? box shadows w white?

//IMAGES
//appear explanation of piece on hover - grey out image with words on top
//add grinchy, photoshop black in geo city, add/edit any others
//make images load with pursposeful delay like Anna's site
//filter options for all, paint, digital, pen, other (change?) - "all" button on left automatically pressed, others get rid of non-category - how to make consistent with design lang?
//Embed with transparent first layer to prevent download?

//WORDS
//make font larger when full page is activated
//add essays from school?
//allow option to select random writing piece?
//perfect sizing? and perfect border/padding on hover?
//need arrows? how to disappear/reappear correctly?
//arrow at top when zoomed to return to words page?

//ABOUT
//update professional photo
//add explanation of numbers once added
//block empty form entries
//why photo not justifying with space-between?
//support via donation?
//link to places of work? Say names/explanations?
//artists statement about harmony? - consistent with portfolio/LinkedIn
//handle form data via google forms/tutorial for now, do backend (Python, flask, more detailed AJAX handling) once understand security implications - add recaptcha verification?

//NUMBERS
//compatible for mobile - list vertical rather than horizontal
//dropdown within pagedrop?

//FOR SOUNDTRACK
//hyperlink sources within page
//widget to upload a dataset and have it sampled according to these choices
//edit full thesis and upload document
//switch all over to new youtube with better titles - or upload from non-Youtube site
//line animation like dropdown on collapsibles?

//FOR HEATPUMPS

//FOR CLIMATE MODEL UNCERTAINTY
//beautiful anyway
//compare margins of error with other fields, illustrate effect (or lack of) on broader trends


//check for mobile for compatibility changes
let check = false;
if(/Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) check = true;

if (check === true) console.log('mobile');
if (check === false) console.log('noMobile');

//dropdown menu on hover, lines flip up 90
const topBar = document.querySelector('#topBar');
const dropDownBtn = document.querySelector('.topBarLine');
const pageDrop = Array.from(document.getElementsByClassName('pageDrop'));
const pageDropNum = Array.from(document.getElementsByClassName('pageDropNum'));

if (check === true) {
    dropDownBtn.remove();
    pageDrop.forEach(page => {
        page.classList.remove('hide');
        page.classList.add('show');
        page.classList.add('mobile');
    })
    pageDropNum.forEach(page => {
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
    pageDropNum.forEach(page => {
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
    pageDropNum.forEach(page => {
        page.classList.remove('show');
    })

    dropDownBtn.classList.remove('isHover');
})
}


//ball animation
const ball = document.querySelector('.ball');
const middleMain = document.querySelector('.middleMain');
const welcomeBlurb = document.querySelector('.welcomeBlurb')

if (ball && check === true) ball.style.height = '60vh';

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

let post1 = document.querySelector('.post1');
let scrollSwipe = document.createElement('h1');
scrollSwipe.style.textAlign = 'center';
scrollSwipe.classList.add('p1');
if (check === true) scrollSwipe.textContent = 'Swipe →';
else scrollSwipe.textContent = 'Scroll →';
post1.appendChild(scrollSwipe);
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

if (check === true && collapseButtons.length>0) {
    collapseButtons.forEach(butt => {
        butt.classList.add('mobile');
        butt.addEventListener('touchstart', (event) => {
            let target = event.target;
            setTimeout(function() {
              if (!target.classList.contains('active')) {
                target.click();
              }
            }, 200); 
            event.preventDefault();
          })
    })}

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
      }
    
    if (check === true) {
        sonicButtons.forEach(butt => {
            butt.classList.add('mobile');
        })
    }}


//heat pump interactive hovers
let hoverObjs = Array.from(document.getElementsByClassName('hoverObj'));
let hoverWords = Array.from(document.getElementsByClassName('hoverWord'));

if (hoverObjs.length > 0) {
    hoverObjs.forEach(obj => {
        obj.classList.add('hide');
    })
    hoverWords.forEach(word => {
        word.addEventListener('mouseover', function(event) {
          const target = event.target;
          let shown = hoverObjs.indexOf(target)
          shown.classList.remove('hide');  
        })
    })
}

  
  
  
  
  
  
