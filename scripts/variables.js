const formContainer = document.querySelector('.form_container');
const passContainer = document.querySelector('.pass_container');
const failContainer = document.querySelector('.fail_container');
const searchBtn = document.querySelector('.search_btn');
const resetBtn = document.querySelectorAll('.restart_btn');
const susImages = document.querySelectorAll('.suspects_container img');
const passText = document.querySelector('.pass_container h2');
const inputValue = document.querySelector('#suspectInput').value.toLowerCase();

let suspectOne = {
    name: 'Barbara',
    hairColor: 'black hair',
    eyeColor: 'blue eyes',
    gender: 'female',
    suspectNum: 'suspectOne'
};

let suspectTwo = {
    name: 'John',
    hairColor: 'red hair',
    eyeColor: 'blue eyes',
    gender: 'male',
    suspectNum: 'suspectTwo'
};

let suspectThree = {
    name: 'Kyle',
    hairColor: 'blonde hair',
    eyeColor: 'blue eyes',
    gender: 'male',
    suspectNum: 'suspectThree'
};

let suspectFour = {
    name: 'James',
    hairColor: 'black hair',
    eyeColor: 'green eyes',
    gender: 'male',
    suspectNum: 'suspectFour'
};

let suspectFive = {
    name: 'Rebecca',
    hairColor: 'red hair',
    eyeColor: 'green eyes',
    gender: 'female',
    suspectNum: 'suspectFive'
};

let suspects = [suspectOne, suspectTwo, suspectThree, suspectFour, suspectFive];

let suspectsRestart = [...suspects];

let filterCount = 0;

export { formContainer, passContainer, failContainer, searchBtn, resetBtn, susImages, passText, inputValue, suspects, suspectsRestart, filterCount };