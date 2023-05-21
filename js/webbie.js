//"numbers" category of data/science/policy/climate - sonifications videos and grahics, building decarbonization widget, wealth inequality
//book reports?
//allow option to select random writing piece?
//ball with light in direction of cursor and shadow opposite? swirly lines/bounce?
//dood on ball, animation of skyline/mountains surrounding - Illustrator and export as svg
//compatibility for ios/depreceated browsers - test - if (css.supports ...) {...}
//github access change to SSH?
//can you make svgs in accordance to vh/vw?
//box shadows? but inverse?
//READ.me?
//bundle all js files into one - wrap sometimes unnecessary functions in if statements

//appear explanation of piece on hover - grey out image with words on top
//filter options for all, paint, digital, pen, other (change?) - "all" button on left automatically pressed, others get rid of non-category - how to make consistent with design lang?
//perfect the scrolling behavior with padding on very top
//add grinchy, photoshop black in geo city, any others to add?
//make images load with pursposeful delay like Anna's site
//sign images/embed with transparent first layer?

//also info about venmo and collab and commission
//add explanation of numbers once added
//why photo not justifying with space-between?
//support via donation?
//link to places of work? State names?

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


//ball animation - statically rotating?
//event on click of ball?
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


//word page post expand to full screen when clicked
//perfect sizing? and perfect border/padding on hover
//different formatting for poems than writings? 1pt
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
            //arrow at top left to return?
            post.requestFullscreen();
        })
    })
}


//about page thought entry
const form = document.querySelector('#thoughtEntry');
const formData = new Array;

if (form) {
form.addEventListener('submit', (event) => {
    event.preventDefault;
    if (form.elements["visitorThoughts"].value.trim() != "") {
        form.submit();
        formData.push(form.elements["visitorThoughts"].value);
    }
})}