{

    const calculateResult = () => {
        const zlotyElement = document.querySelector(".js-money");
        const zloty = zlotyElement.value;
        const exchangeElement = document.querySelector(".js-exchange");
        const exchange = exchangeElement.value;
        const USDRate = 3.33
        const EuroRate = 4.5
        switch (exchange) {
            case "USD":
                return zloty / USDRate;

                break;
            case "EUR":
                return zloty / EuroRate;

                break
        };

    }

    const addText = (result) => {

        const euroElement = document.querySelector(".js-strong");
        euroElement.innerText = result.toFixed(2);
        const addParagraph = document.querySelector(".js-addParagraph")
        addParagraph.innerText = result > 100 ? "Kup sobie cos fajnego" : "Pozyczyc Ci sianko?"
    }

    const onFormSubmit = (event) => {
        event.preventDefault();
        calculateResult();
        const result = calculateResult();
        addText(result);

    };

    const init = () => {

        const formElement = document.querySelector(".js-form");
        formElement.addEventListener("submit", onFormSubmit);

    }

    init();
};;