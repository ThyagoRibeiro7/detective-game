const suspectsContainer = document.querySelector('.suspects_container');
const arrowBtns = document.querySelectorAll('.arrow');
const firstImgWidth = document.querySelector('.suspects_container img').offsetWidth;

/*

scrollLeft: the scroll position of the element;
offsetWidth: the visible element width;
scrollWidth: the total element width.

*/

arrowBtns.forEach(arrowBtn => {
    arrowBtn.addEventListener('click', () => {
        suspectsContainer.scrollLeft += arrowBtn.id === 'left' ? -firstImgWidth : firstImgWidth;
        console.log(suspectsContainer.scrollLeft);
        
        showAndHideArrows();
    });
});

function showAndHideArrows() {
    if (suspectsContainer.scrollLeft === 0) {
        arrowBtns[0].style.display = 'none';
    }
    else {
        arrowBtns[0].style.display = 'flex';
    }

    if (suspectsContainer.scrollLeft + suspectsContainer.offsetWidth === suspectsContainer.scrollWidth) {
        arrowBtns[1].style.display = 'none';

    } else {
        arrowBtns[1].style.display = 'flex';
    }
};