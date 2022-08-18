






































































// high of day 
// low of day 
// current price 

// symbol
const symbolList = [];
let querySymbol = "";

const addMoreButton = $("#addMore");


const addAnotherRow = () => {
    const label = $("<label for='symbolInput'>Symbol: <label>");
    const submitArea = $('<input type="text" id="symbolInput">');
        addMoreButton.before(label);
        addMoreButton.before(submitArea);
        addMoreButton.before("<br>");
}

const key = "031790bc33587193255896a4a8034319";

const beforeUrl = `https://financialmodelingprep.com/api/v3/quote/`;

// const table = $("<table class='table'></table>");
const resultRow = $("<div class='row'></div>");



const createTableResult = () => {


    // will be ran each fetch 
    // name obj.name
    // current obj.price
    // high obj.dayHigh
    // low obj.dayLow
}




$("#submit").on('click', (e) => {
    e.preventDefault();
    const allSymbols = document.querySelectorAll(".pQuery");

    for (let i = 0; i < allSymbols.length; i++) {
        symbolList.push(allSymbols[i].textContent.toUpperCase());
        $.ajax({
            url : `${beforeUrl}${allSymbols[i].textContent.toUpperCase()}?apikey=${key}`,
            method: "GET"
        }).then ( (value) => {
            console.log(value);
        
        }).catch( (error) => {
            console.log(error);
        });
    }});


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




