// SCROLL TO SOME BLOCK

const toSkills = document.querySelector(`#skills-link`);
const sectionSkills = document.querySelector(`#skills`);
toSkills.addEventListener(`click`, () => {
  sectionSkills.scrollIntoView(top);
});

const toLangs = document.querySelector(`#langs-link`);
const sectionLangs = document.querySelector(`#langs`);
toLangs.addEventListener(`click`, () => {
  sectionLangs.scrollIntoView(top);
});

const toCareer = document.querySelector(`#career-link`);
const sectionCareer = document.querySelector(`#career`);
toCareer.addEventListener(`click`, () => {
  sectionCareer.scrollIntoView(top);
});

const toEduc = document.querySelector(`#educ-link`);
const sectionEduc = document.querySelector(`#educ`);
toEduc.addEventListener(`click`, () => {
  sectionEduc.scrollIntoView(top);
});

const toHobbies = document.querySelector(`#hobbies-link`);
const sectionHobbies = document.querySelector(`#hobbies`);
toHobbies.addEventListener(`click`, () => {
  sectionHobbies.scrollIntoView(top);
});
