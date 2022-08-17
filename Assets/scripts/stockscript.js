

// high of day 
// low of day 
// current price 

// symbol
const symbolList = [];


const addMoreButton = $("#addMore");


const addAnotherRow = () => {
    const label = $("<label for='symbolInput'>Symbol: <label>");
    const submitArea = $('<input type="text" id="symbolInput">');
        addMoreButton.before(label);
        addMoreButton.before(submitArea);
        addMoreButton.before("<br>");
}



$("#submit").on('click', (e) => {
    e.preventDefault();
    const allSymbols = document.querySelectorAll(".pQuery");

    for (let i = 0; i < allSymbols.length; i++) {
        symbolList.push(allSymbols[i].textContent.toUpperCase());
    }
    console.log(symbolList);
})

const queryHolder = $(".queryHolder");

const pushQuery = (value) => {
    if (!value) {
        return;

    }
    const newVal = $("<p></p>");
    newVal.text(value);
    newVal.addClass("pQuery col-2");
    queryHolder.append(newVal);

}


$("#addMore").on('click', (e) => {
    e.preventDefault();
    // addAnotherRow();
    const allSymbols = document.querySelector("#symbolInput");
    pushQuery(allSymbols.value);
});
