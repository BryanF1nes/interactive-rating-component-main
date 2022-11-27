const submitBtn = document.getElementById('submit');
const ratingPage = document.querySelector('.main-container');
const thanksPage = document.querySelector('.thank-you-container')

const ratingNumbers = document.querySelectorAll('.item');
const rating = document.getElementById('rating');

submitBtn.addEventListener('click', () => {
    ratingPage.classList.add('hide');
    thanksPage.classList.remove('hide');
    thanksPage.classList.add('flex');
});

ratingNumbers.forEach((rate) => {
    rate.addEventListener('click', () => {
        rate.classList.add("clicked");
        rating.innerHTML = rate.innerHTML;
    })
});