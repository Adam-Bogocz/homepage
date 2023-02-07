const welcome = () => {
    console.log("Cześć!");
}

welcome();

{
    const educationButtonElement = document.querySelector(".js-educationButton");
    const coursesButtonElement = document.querySelector(".js-coursesButton");
    const skilsButtonElement = document.querySelector(".js-skilsButton");
    const interestedButtonElement = document.querySelector(".js-interestedButton");
    const education = document.querySelector(".article--education");
    const courses = document.querySelector(".article--courses");
    const skils = document.querySelector(".article--skils");
    const interested = document.querySelector(".article--interested");


    function toggleArticleHidden(buttonName) {
        buttonName.classList.toggle("article--hidden");
    }

    function addArticleHidden(buttonName) {
        buttonName.classList.add("article--hidden");
    }

    function changeButtonName() {
        const educationButtonName = document.querySelector(".js-educationButtonName");
        const coursesButtonName = document.querySelector(".js-coursesButtonName")
        const skilsButtonName = document.querySelector(".js-skilsButtonName");
        const interestedButtonName = document.querySelector(".js-interestedButtonName");
        educationButtonName.innerText = education.classList.contains("article--hidden") ? "Education" : "Ukryj";
        coursesButtonName.innerText = courses.classList.contains("article--hidden") ? "Courses" : "Ukryj";
        skilsButtonName.innerText = skils.classList.contains("article--hidden") ? "Skils" : "Ukryj";
        interestedButtonName.innerText = interested.classList.contains("article--hidden") ? "Interested" : "Ukryj";
    }

    function clickButton(buttonName) {
        // toggleArticleHidden(buttonName);
        buttonName === education ? toggleArticleHidden(buttonName) : addArticleHidden(education);
        buttonName === courses ? toggleArticleHidden(buttonName) : addArticleHidden(courses);
        buttonName === skils ? toggleArticleHidden(buttonName) : addArticleHidden(skils);
        buttonName === interested ? toggleArticleHidden(buttonName) : addArticleHidden(interested);
        changeButtonName();
    };

    educationButtonElement.addEventListener("click", () => {
        clickButton(education);
    });

    coursesButtonElement.addEventListener("click", () => {
        clickButton(courses);
    });

    skilsButtonElement.addEventListener("click", () => {
        clickButton(skils);
    });

    interestedButtonElement.addEventListener("click", () => {
        clickButton(interested);
    });
}