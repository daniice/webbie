//set background as a photo of paint swooshes
//what to call third category of data/science/policy/climate
//BALL engraved on ball - needs to be a solid border - Illustrator and export as svg
//compatibility for ios?
//github access change to SSH?
//box shadow for animations?
//READ.me?
//bundle all js files into one? Wrap sometimes unnecessary functions in if statements?

//dropdown menu on hover - three lines icon in img folder - disappears when not hovering 
const dropDownBtn = document.querySelector('#dropDownBtn');
const dropDown = document.querySelector('#dropDown');

dropDownBtn.addEventListener('mouseover', () => {
    dropDown.classList.add('show');
})

dropDown.addEventListener('mouseover', () => {
    dropDown.classList.add('show');
})

dropDownBtn.addEventListener('mouseleave', () => {
    dropDown.classList.toggle('show');
})

dropDown.addEventListener('mouseleave', () => {
    dropDown.classList.toggle('show');
})

//ball animation
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