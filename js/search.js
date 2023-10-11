var myButton1 = document.getElementById("main-btn1");

myButton1.addEventListener("click", function () {
    var inputValue = document.getElementById("search").value;
    inputValue = inputValue.replace(/ /g, "+");
    var url = `https://www.google.com/search?q=${inputValue}`;
    window.open(url, "_self");
});
