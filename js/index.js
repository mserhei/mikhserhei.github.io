// SLOW WEBSITE APPEARANCE

const wrapper = document.querySelector('.wrapper');

setTimeout(() => {
    wrapper.classList.add(`visible`);
}, 1000);

// BUTTON TO TOP / BACK TO THE BEGINNING

const buttonToTop = document.querySelector(`.button_to_top`);

buttonToTop.addEventListener(`click`, () => {
    window.scrollTo(0,0);
})

// BUTTON TO TOP / VISIBLE IN SOME POSITION

document.addEventListener(`scroll`, () => {
    if (window.pageYOffset > document.documentElement.clientHeight) {
        buttonToTop.classList.add(`visible`);
    } else {
        buttonToTop.classList.remove(`visible`);
    }
})

// SCROLL TO SOME BLOCK

const toContacts = document.querySelector(`#a_contacts`);
const blockContacts = document.querySelector(`#block_contacts`);
toContacts.addEventListener(`click`, () => {
    blockContacts.scrollIntoView(top);
})

const toSkills = document.querySelector(`#a_skills`);
const blockSkills = document.querySelector(`#block_skills`);
toSkills.addEventListener(`click`, () => {
    blockSkills.scrollIntoView(top);
})

const toLanguages = document.querySelector(`#a_languages`);
const blockLanguages = document.querySelector(`#block_languages`);
toLanguages.addEventListener(`click`, () => {
    blockLanguages.scrollIntoView(top);
})

const toCareer = document.querySelector(`#a_career`);
const blockCareer = document.querySelector(`#block_career`);
toCareer.addEventListener(`click`, () => {
    blockCareer.scrollIntoView(top);
})

const toEducation = document.querySelector(`#a_education`);
const blockEducation = document.querySelector(`#block_education`);
toEducation.addEventListener(`click`, () => {
    blockEducation.scrollIntoView(top);
})

const toHobbies = document.querySelector(`#a_hobbies`);
const blockHobbies = document.querySelector(`#block_hobbies`);
toHobbies.addEventListener(`click`, () => {
    blockHobbies.scrollIntoView(top);
})

