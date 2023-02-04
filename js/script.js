console.log("Cześć!");

let section__buttonEducation = document.querySelector(".js-section__buttonEducation");
let section__buttonEducationName = document.querySelector(".js-section__buttonEducationName");
let section__buttonCourses = document.querySelector(".js-section__buttonCourses");
let section__buttonCoursesName = document.querySelector(".js-section__buttonCoursesName")
let section__buttonSkils = document.querySelector(".js-section__buttonSkils");
let section__buttonSkilsName = document.querySelector(".js-section__buttonSkilsName");
let section__buttonInterested = document.querySelector(".js-section__buttonInterested");
let section__buttonInterestedName = document.querySelector(".js-section__buttonInterestedName");
let section__education = document.querySelector(".section__education");
let section__courses = document.querySelector(".section__courses");
let section__skils = document.querySelector(".section__skils");
let section__interested = document.querySelector(".section__interested");

section__buttonEducation.addEventListener("click", () => {
    section__education.classList.toggle("section__hidden");
    section__courses.classList.add("section__hidden");
    section__skils.classList.add("section__hidden");
    section__interested.classList.add("section__hidden");
    section__buttonEducationName.innerText = section__education.classList.contains("section__hidden") ? "Education" : "Ukryj";
    section__buttonCoursesName.innerText = section__courses.classList.contains("section__hidden") ? "Courses" : "Ukryj";
    section__buttonSkilsName.innerText = section__skils.classList.contains("section__hidden") ? "Skils" : "Ukryj";
    section__buttonInterestedName.innerText = section__interested.classList.contains("section__hidden") ? "Interested" : "Ukryj";
});

section__buttonCourses.addEventListener("click", () => {
    section__education.classList.add("section__hidden");
    section__courses.classList.toggle("section__hidden");
    section__skils.classList.add("section__hidden");
    section__interested.classList.add("section__hidden");
    section__buttonEducationName.innerText = section__education.classList.contains("section__hidden") ? "Education" : "Ukryj";
    section__buttonCoursesName.innerText = section__courses.classList.contains("section__hidden") ? "Courses" : "Ukryj";
    section__buttonSkilsName.innerText = section__skils.classList.contains("section__hidden") ? "Skils" : "Ukryj";
    section__buttonInterestedName.innerText = section__interested.classList.contains("section__hidden") ? "Interested" : "Ukryj";
});

section__buttonSkils.addEventListener("click", () => {
    section__education.classList.add("section__hidden");
    section__courses.classList.add("section__hidden");
    section__skils.classList.toggle("section__hidden");
    section__interested.classList.add("section__hidden");
    section__buttonEducationName.innerText = section__education.classList.contains("section__hidden") ? "Education" : "Ukryj";
    section__buttonCoursesName.innerText = section__courses.classList.contains("section__hidden") ? "Courses" : "Ukryj";
    section__buttonSkilsName.innerText = section__skils.classList.contains("section__hidden") ? "Skils" : "Ukryj";
    section__buttonInterestedName.innerText = section__interested.classList.contains("section__hidden") ? "Interested" : "Ukryj";
});

section__buttonInterested.addEventListener("click", () => {
    section__education.classList.add("section__hidden");
    section__courses.classList.add("section__hidden");
    section__skils.classList.add("section__hidden");
    section__interested.classList.toggle("section__hidden");
    section__buttonEducationName.innerText = section__education.classList.contains("section__hidden") ? "Education" : "Ukryj";
    section__buttonCoursesName.innerText = section__courses.classList.contains("section__hidden") ? "Courses" : "Ukryj";
    section__buttonSkilsName.innerText = section__skils.classList.contains("section__hidden") ? "Skils" : "Ukryj";
    section__buttonInterestedName.innerText = section__interested.classList.contains("section__hidden") ? "Interested" : "Ukryj";
});    