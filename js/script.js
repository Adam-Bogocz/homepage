console.log("Cześć!");

let educationButtonElement = document.querySelector(".js-educationButton");
let educationButtonName = document.querySelector(".js-educationButtonName");
let coursesButtonElement = document.querySelector(".js-coursesButton");
let coursesButtonName = document.querySelector(".js-coursesButtonName")
let skilsButtonElement = document.querySelector(".js-skilsButton");
let skilsButtonName = document.querySelector(".js-skilsButtonName");
let interestedButtonElement = document.querySelector(".js-interestedButton");
let interestedButtonName = document.querySelector(".js-interestedButtonName");
let education = document.querySelector(".article--education");
let courses = document.querySelector(".article--courses");
let skils = document.querySelector(".article--skils");
let interested = document.querySelector(".article--interested");

educationButtonElement.addEventListener("click", () => {
    education.classList.toggle("article--hidden");
    courses.classList.add("article--hidden");
    skils.classList.add("article--hidden");
    interested.classList.add("article--hidden");
    educationButtonName.innerText = education.classList.contains("article--hidden") ? "Education" : "Ukryj";
    coursesButtonName.innerText = courses.classList.contains("article--hidden") ? "Courses" : "Ukryj";
    skilsButtonName.innerText = skils.classList.contains("article--hidden") ? "Skils" : "Ukryj";
    interestedButtonName.innerText = interested.classList.contains("article--hidden") ? "Interested" : "Ukryj";
});

coursesButtonElement.addEventListener("click", () => {
    education.classList.add("article--hidden");
    courses.classList.toggle("article--hidden");
    skils.classList.add("article--hidden");
    interested.classList.add("article--hidden");
    educationButtonName.innerText = education.classList.contains("article--hidden") ? "Education" : "Ukryj";
    coursesButtonName.innerText = courses.classList.contains("article--hidden") ? "Courses" : "Ukryj";
    skilsButtonName.innerText = skils.classList.contains("article--hidden") ? "Skils" : "Ukryj";
    interestedButtonName.innerText = interested.classList.contains("article--hidden") ? "Interested" : "Ukryj";
});

skilsButtonElement.addEventListener("click", () => {
    education.classList.add("article--hidden");
    courses.classList.add("article--hidden");
    skils.classList.toggle("article--hidden");
    interested.classList.add("article--hidden");
    educationButtonName.innerText = education.classList.contains("article--hidden") ? "Education" : "Ukryj";
    coursesButtonName.innerText = courses.classList.contains("article--hidden") ? "Courses" : "Ukryj";
    skilsButtonName.innerText = skils.classList.contains("article--hidden") ? "Skils" : "Ukryj";
    interestedButtonName.innerText = interested.classList.contains("article--hidden") ? "Interested" : "Ukryj";
});

interestedButtonElement.addEventListener("click", () => {
    education.classList.add("article--hidden");
    courses.classList.add("article--hidden");
    skils.classList.add("article--hidden");
    interested.classList.toggle("article--hidden");
    educationButtonName.innerText = education.classList.contains("article--hidden") ? "Education" : "Ukryj";
    coursesButtonName.innerText = courses.classList.contains("article--hidden") ? "Courses" : "Ukryj";
    skilsButtonName.innerText = skils.classList.contains("article--hidden") ? "Skils" : "Ukryj";
    interestedButtonName.innerText = interested.classList.contains("article--hidden") ? "Interested" : "Ukryj";
});    