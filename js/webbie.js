//LAUNCH!!!

//GENERAL
//compatibility for mobile/depreceated browsers - test - if (css.supports ...) {...}
//"numbers" category of data/science/policy/climate - sonifications videos and grahics, building decarbonization widget, wealth inequality, Indian energy sector sentiments
//book reports?
//write more!
//js for analytics?
//copyrights?
//READ.me?
//most js functions bundled in one file - wrap sometimes unnecessary functions in if statements - until need to collect data
//github access change to SSH?

//HOMEPAGE
//ghost black lines over hand
//should translate= be the same on all paths?
//only one path? line of ball morphing into skyline?
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
//need arrows?
//allow option to select random writing piece?
//perfect sizing? and perfect border/padding on hover
//add explanation blurb at front?
//perfect arrows disappear - how to work with scroll interaction?, arrow at top to return to words page?

//ABOUT
//add explanation of numbers once added
//why photo not justifying with space-between?
//support via donation?
//link to places of work? Say names/explanations?
//handle form data via google forms/tutorial for now, do backend (Python, flask, more detailed AJAX handling) once understand security implications - add recaptcha verification?


//check for mobile for compatibility changes
window.mobileCheck = function() {
    let check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
    return check;
  }


//dropdown menu on hover, lines flip up 90
const topBar = document.querySelector('#topBar');
const dropDownBtn = document.querySelector('.topBarLine');
const pageDrop = Array.from(document.getElementsByClassName('pageDrop'));

if (window.mobileCheck === true) {
    pageDrop.forEach(page => {
        page.classList.add('show');
        page.classList.add('mobile');
    })
}

else {
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
}


//ball animation
const ball = document.querySelector('.ball');
const middleMain = document.querySelector('.middleMain');
const welcomeBlurb = document.querySelector('.welcomeBlurb')

if (window.mobileCheck === false) {
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
if (window.mobileCheck === true) {
    const gallery = document.querySelector('.gallery');
    if (gallery) gallery.classList.add('mobile')
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