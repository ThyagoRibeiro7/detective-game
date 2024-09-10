
import { susImages, formContainer, passContainer, passText, failContainer, resetBtn, suspects , suspectsRestart , filterCount } from "../variables.js";

function filterDOM() {
    susImages.forEach(susImage => {
        let susNumber = susImage.getAttribute('alt');

        if (suspects.some(suspect => suspect.suspectNum === susNumber)) {
            susImage.classList.add('show');
        } else {
            susImage.classList.remove('show');
            susImage.classList.add('hide');
        };
    });
};
function victoryDOM() {
    formContainer.style.display = 'none';
    passContainer.style.display = 'flex';

    if (suspects[0].gender === 'female') {
        passText.textContent = `Congratulations, you found the killer. Her name is ${suspects[0].name}.`;
    };

    if (suspects[0].gender === 'male') {
        passText.textContent = `Congratulations, you found the killer. His name is ${suspects[0].name}.`;
    };
};

function errorDOM() {
    failContainer.style.display = 'flex';
    formContainer.style.display = 'none';
    passContainer.style.display = 'none';
};

function resetDOM() {
    resetBtn.forEach(resetBtn => {
        resetBtn.addEventListener('click', () => {
            filterCount = 0;
            suspects = suspectsRestart;
    
            formContainer.style.display = 'flex';
            passContainer.style.display = 'none';
            failContainer.style.display = 'none';
    
            susImages.forEach(susImage => {
                susImage.classList.remove('hide');
                susImage.classList.remove('show');
            });
        });
    });
};

resetDOM();

export { filterDOM, victoryDOM, errorDOM };