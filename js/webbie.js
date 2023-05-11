//set background as a photo of paint swooshes?
//"numbers" category of data/science/policy/climate - sonifications videos and grahics, building decarbonization widget, wealth inequality
//allow option to select random writing piece
//BALL engraved on ball - needs to be a solid border - Illustrator and export as svg
//compatibility for ios/depreceated browsers? if (css.supports ...) {...}
//change color of dropdown options - get rid of transparency
//appear dropdown options to side rather than down
//github access change to SSH?
//box shadows?
//READ.me?
//bundle all js files into one? Wrap sometimes unnecessary functions in if statements?

//dropdown menu on hover - two lines flip up 90deg, three options come in from right of page
const topBar = document.querySelector('#topBar');
const dropDownBtn = document.querySelector('#dropDownBtn');
const pageDrop = Array.from(document.getElementsByClassName('pageDrop'));

dropDownBtn.addEventListener('mouseover', () => {
    pageDrop.forEach(page => {
        page.classList.add('show');

        page.addEventListener('mouseover', () => {
            page.classList.add('show');
        })
    })
})

topBar.addEventListener('mouseleave', () => {
    pageDrop.forEach(page => {
        page.classList.remove('show');
    })
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