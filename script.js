let zlotyElement = document.querySelector(".js-money");
let exchangeElement = document.querySelector(".js-exchange");
let formElement = document.querySelector(".js-form");
let euroElement = document.querySelector(".js-strong");
let addParagraph = document.querySelector(".js-addParagraph")

formElement.addEventListener("submit", (event) => {
    event.preventDefault();
    let zloty = zlotyElement.value;
    let exchange = exchangeElement.value;
    let euro = zloty / exchange;

    euroElement.innerText = euro.toFixed(2);
    addParagraph.innerText = (euro > 100) ? "Kup sobie cos fajnego" : "Pozyczyc Ci sianko?"
});