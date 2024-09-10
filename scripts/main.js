import { suspects, searchBtn, filterCount } from "./variables.js";
import { testToFilter } from "./filters/filterSusArr.js";
import { victoryDOM } from "./filters/filterSusDOM.js";

searchBtn.addEventListener('click', searchBtn => {

    searchBtn.preventDefault();

    filterCount++

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