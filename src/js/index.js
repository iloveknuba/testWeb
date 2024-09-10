// Отримуємо елементи
const form = document.getElementById('contact-form');
const popup = document.getElementById('popup');
const closeBtn = document.querySelector('.close-btn');
const email = document.getElementById('email');
console.log(form, popup, closeBtn, email);

// Функція для відкриття popup
function openPopup() {
    popup.style.display = 'flex'; // Відображаємо popup
}

// Функція для закриття popup
function closePopup() {
    popup.style.display = 'none'; // Приховуємо popup
}

// Додаємо слухач подій для відправки форми
form.addEventListener('submit', function(event) {
    if (email.value){
        console.log('submited');
        event.preventDefault(); // Запобігаємо відправці форми
        openPopup();
    } // Викликаємо функцію відкриття popup
});

// Закриваємо popup при натисканні на кнопку "Закрити"
closeBtn.addEventListener('click', closePopup);

// Закриваємо popup при натисканні за межі popup
window.addEventListener('click', function(event) {
    if (event.target == popup) {
        closePopup();
    }
});
