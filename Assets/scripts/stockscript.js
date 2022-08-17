

// high of day 
// low of day 
// current price 

// symbol
const symbolList = [];


const formDocument = $("#stockForm");
const addMore = $("#addMore");
const addAnotherRow = () => {
    const label = $("<label for='symbolInput'>Symbol: <label>");
    const submitArea = $('<input type="text" id="symbolInput">');
        addMore.before(label);
        addMore.before(submitArea);
        addMore.before("<br>");
}

$("#addMore").on('click', (e) => {
    e.preventDefault();
    addAnotherRow();
});
$("#submit").on('click', (e) => {
    e.preventDefault();
    const allSymbols = document.querySelectorAll("#symbolInput");
    for (let i = 0; i < allSymbols.length; i++) {
        if (allSymbols[i].value != "") {
            symbolList.push(allSymbols[i].value.toUpperCase());
        }
    }
})