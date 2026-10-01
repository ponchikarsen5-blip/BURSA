const button = document.getElementById("magicButton");
const popup = document.getElementById("popup");
const closePopup = document.getElementById("closePopup");
const music = document.getElementById("music");


// Натискання на головну кнопку
button.addEventListener("click", () => {

    // Показуємо повідомлення
    popup.classList.add("active");

    // Запускаємо музику
    music.currentTime = 0;
    music.play();

});


// Закрити повідомлення
closePopup.addEventListener("click", () => {

    popup.classList.remove("active");

});


// Закриття при натисканні поза вікном
popup.addEventListener("click", (event) => {

    if (event.target === popup) {
        popup.classList.remove("active");
    }

});