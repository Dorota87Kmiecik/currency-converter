{

    const calculate = () => {
        const zlotyElement = document.querySelector(".js-money");
        const zloty = zlotyElement.value;
        const exchangeElement = document.querySelector(".js-exchange");
        const exchange = exchangeElement.value;
        const euro = zloty / exchange;
        addText(euro)
    }

    const addText = (euro) => {

        const euroElement = document.querySelector(".js-strong");
        euroElement.innerText = euro.toFixed(2);
        const addParagraph = document.querySelector(".js-addParagraph")
        addParagraph.innerText = euro > 100 ? "Kup sobie cos fajnego" : "Pozyczyc Ci sianko?"
    }

    const onFormSubmit = (event) => {
        event.preventDefault();
        calculate()
    };

    const init = () => {

        const formElement = document.querySelector(".js-form");
        formElement.addEventListener("submit", onFormSubmit);

    }

    init();
};