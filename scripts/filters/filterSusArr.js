import { suspects } from "../variables.js";
import { filterDOM, errorDOM } from "../filters/filterSusDOM.js";

function testToFilter() {
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
    let isSuspect = suspectsArr.filter(suspect => {
        return suspect.hairColor === inputValue || suspect.eyeColor === inputValue || suspect.gender === inputValue;
    });

    suspects = isSuspect;

    return suspects;
};

export { testToFilter, filterSuspects };