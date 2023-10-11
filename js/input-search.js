// Отримуємо поле вводу та форму за їхніми ідентифікаторами
var inputField = document.getElementById("search");
var form = document.getElementById("myForm");

// Додаємо обробник події для події "keydown" на полі вводу
inputField.addEventListener("keydown", function(event) {
    // Перевіряємо, чи натиснута клавіша Enter (код 13)
    if (event.keyCode === 13) {
        // Скасовуємо стандартну поведінку форми (відправку на сервер)
        event.preventDefault();
        
        // Отримуємо значення з input поля
        var inputValue = inputField.value;
        inputValue = inputValue.replace(/ /g, "+");
        var url = `https://www.google.com/search?q=${inputValue}`;
        
        // Відкриваємо нову сторінку зі зміненим URL
        window.open(url, "_self");
    }
});

// Додаємо також обробник події submit для форми, щоб запобігти відправці форми на сервер
form.addEventListener("submit", function(event) {
    event.preventDefault();
});
