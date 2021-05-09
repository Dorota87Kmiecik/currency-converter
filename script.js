{
    const init = () => {

        const formElement = document.querySelector(".js-form");
        formElement.addEventListener("submit", calculate);

    }

    const calculate = (event) => {
        event.preventDefault();
        const zlotyElement = document.querySelector(".js-money");
        const zloty = zlotyElement.value;
        const exchangeElement = document.querySelector(".js-exchange");
        const exchange = exchangeElement.value;
        const euro = zloty / exchange;
        const euroElement = document.querySelector(".js-strong");
        const addParagraph = document.querySelector(".js-addParagraph")
        euroElement.innerText = euro.toFixed(2);
        addParagraph.innerText = (euro > 100) ? "Kup sobie cos fajnego" : "Pozyczyc Ci sianko?"
    };

    init();
};