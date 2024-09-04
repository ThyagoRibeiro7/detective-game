const formContainer = document.querySelector('.form_container');
const passContainer = document.querySelector('.pass_container');
const failContainer = document.querySelector('.fail_container');
const searchBtn = document.querySelector('.search_btn');
const resetBtn = document.querySelectorAll('.restart_btn');
const susImages = document.querySelectorAll('.suspects_container img');

// Suspects Array START

let suspects = [

    suspectOne = {
        name: 'Barbara',
        hairColor: 'black hair',
        eyeColor: 'blue eyes',
        gender: 'female',
        suspectNum: 'suspectOne'
    },

    suspectTwo = {
        name: 'John',
        hairColor: 'red hair',
        eyeColor: 'blue eyes',
        gender: 'male',
        suspectNum: 'suspectTwo'
    },

    suspectThree = {
        name: 'Kyle',
        hairColor: 'blonde hair',
        eyeColor: 'blue eyes',
        gender: 'male',
        suspectNum: 'suspectThree'
    },

    suspectFour = {
        name: 'James',
        hairColor: 'black hair',
        eyeColor: 'green eyes',
        gender: 'male',
        suspectNum: 'suspectFour'
    },

    suspectFive = {
        name: 'Rebecca',
        hairColor: 'red hair',
        eyeColor: 'green eyes',
        gender: 'female',
        suspectNum: 'suspectFive'
    }

];

let suspectsRestart = [...suspects];

// Suspects Array END

let filterCount = 0;

function searchSuspects() {
    searchBtn.addEventListener('click', searchBtn => {

        searchBtn.preventDefault();

        filterCount++;

        if (filterCount === 1) {
            testToFilter();
        } else if (filterCount > 1) {
            testToFilter();
        };

        if (suspects.length === 1) {
            victoryDOM();
        };

        let resetInputV = document.querySelector('#suspectInput').value = '';
    });
};

function testToFilter() {
    const inputValue = document.querySelector('#suspectInput').value.toLowerCase();

    suspects.map(suspect => {
        if (suspect.hairColor === inputValue || suspect.eyeColor === inputValue || suspect.gender === inputValue) {
            filterSuspects();
            filterDOM();
        }

        if (suspects.every(suspect => suspect.hairColor !== inputValue && suspect.eyeColor !== inputValue && suspect.gender !== inputValue)) {
            errorDOM();
        };
    });
};

function filterSuspects(suspectsArr = suspects) {
    const inputValue = document.querySelector('#suspectInput').value.toLowerCase();

    let isSuspect = suspectsArr.filter(suspect => {
        return suspect.hairColor === inputValue || suspect.eyeColor === inputValue || suspect.gender === inputValue;
    });

    suspects = isSuspect;

    return suspects;
};

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
    const passContainer = document.querySelector('.pass_container');
    const passText = document.querySelector('.pass_container h2');

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

function restartDOM() {
    resetBtn.forEach(resetBtn => {
        resetBtn.addEventListener('click', () => {
            suspects = suspectsRestart;
            filterCount = 0;
            
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

searchSuspects();
restartDOM();