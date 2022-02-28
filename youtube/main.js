const moreButton = document.querySelector('.info button.more');
const title = document.querySelector('.info span.title');
console.log(moreButton);
console.log(title);
moreButton.addEventListener('click', () => {
    moreButton.classList.toggle('clicked');
    title.classList.toggle('clamp');

})