


let url = "https://financialmodelingprep.com/api/v3/quote/";
const apikey = "031790bc33587193255896a4a8034319"

var highOfDay = document.querySelector('#high');
var lowOfDay = document.querySelector('#low');
var current = document.querySelector('#current');
var companyName = "";
var requestedQuote = "AAPL"


$.ajax({
    url: url + requestedQuote + "?apikey=" + apikey,
    method: "GET"
})
.then(function (data) {
    console.log(data)

    high.textContent = "High of Day:  " + data[0].dayHigh;
    low.textContent = "Low of Day:  " + data[0].dayLow;
    current.textContent = "Current Price:  " + data[0].price;
    companyName.text = "Company Name:  " + data[0].name;
  });

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


