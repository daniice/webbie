//set background as a photo of paint swooshes?
//"numbers" category of data/science/policy/climate - sonifications videos and grahics, building decarbonization widget, wealth inequality
//allow option to select random writing piece
//ball with light in direction of cursor and shadow opposite - Illustrator and export as svg
//swirly lines/bounce?
//"BALL" on ball or in corner?
//compatibility for ios/depreceated browsers - test - if (css.supports ...) {...}
//github access change to SSH?
//can you make svgs in accordance to vh/vw?
//dropdown menu comes in from right of page?
//box shadows?
//READ.me?
//bundle all js files into one? Wrap sometimes unnecessary functions in if statements?

//have each word post take up 1/3 if screen bigger than a certain size, otherwise condense - min-width - responsive to viewport size?
//scroll to the left to access further posts - how to make it clickable too?

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
const ball = document.querySelector('.ball');

if (ball) {
ball.addEventListener('mouseover', () => {
    ball.classList.add('isHover');
  });

ball.addEventListener('mouseleave', () => {
    ball.classList.toggle('isHover');
})

ball.addEventListener('click', () => {
    ball.classList.remove('isHover');
    ball.classList.add('onClick');
  })
}

//word page post expand to full screen when clicked
const posts = Array.from(document.querySelectorAll('.post'));

if (posts.length>0) {
    posts.forEach(post => {
        post.addEventListener('mouseover', () => {
            //border wider, round at corners also?
        })

        post.addEventListener('click', () => {
            //fixed location taking up full viewport - incl top/bottom bars? - arrow at top left to return
        })
    })
}