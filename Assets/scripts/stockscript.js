

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
    const allSymbols = document.querySelectorAll("#symbolInput");
    for (let i = 0; i < allSymbols.length; i++) {
        if (allSymbols[i].value != "") {
            symbolList.push(allSymbols[i].value.toUpperCase());
        }
    }
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
