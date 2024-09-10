$(document).ready(function() {
    // Функція для завантаження сторінок
    function loadPage(page) {
        $.ajax({
            url: 'templates/' + page + '.html',
            method: 'GET',
            success: function(data) {
                $('#content').html(data);
                $(`#content`).on('submit', 'form', function(event) {
                    event.preventDefault();

                    // Обробка даних з форми
                    const formData = $(this).serialize(); // Отримуємо дані форми
                    openPopup();
                    console.log("Дані форми:", formData);

                });
                $(window).on("click", function(event) {
                    closePopup()
                })

            },
            error: function() {
                $('#content').html('<p>Сторінку не знайдено!</p>');
            }
        });
    }

    // Функція для роботи з хешами
    function handleHashChange() {
        // Отримуємо хеш (частину URL після #)
        const page = window.location.hash.substring(1) || 'home';

        // Завантажуємо відповідну сторінку
        loadPage(page);

    }

    // Запускаємо функцію при зміні хешу в URL
    $(window).on('hashchange', handleHashChange);

    // Завантаження початкової сторінки, якщо хеш не задано
    handleHashChange();
});
