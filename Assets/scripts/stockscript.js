

var upper;
const table = document.querySelector("#infoDisplay");

// symbol
const symbolList = [];
let querySymbol = "";
const addMoreButton = $("#addMore");

const key = "031790bc33587193255896a4a8034319";
const beforeUrl = "https://financialmodelingprep.com/api/v3/quote/";

const queryHolder = $(".queryHolder");

// Binding the function to the button 
$("#addMore").on('click', (e) => {
    e.preventDefault();
    const allSymbols = document.querySelector("#symbolInput");
    upper = allSymbols.value.toUpperCase();
    newTable();
});

let currentlyDisplayed = [] 

// Ajax call based on the inputted inputted value
function newTable() {
$("#symbolInput").val("");
    $.ajax({
        url : `${beforeUrl}${upper}?apikey=${key}`,
        method: "GET"
    }).then ( (value) => {

        let name = value[0].name;
        let high = value[0].dayHigh;
        let low = value[0].dayLow;
        let current = value[0].price;
        let change = value[0].changesPercentage;

       if (currentlyDisplayed.includes(name)) {
        return;
       } else { 
        currentlyDisplayed.push(name)
       }

        let template = `
                <tr>
                    <td>${upper}</td>
                    <td>${name}</td>
                    <td>${high}</td>
                    <td>${low}</td>
                    <td>${current}</td> 
                    <td>${change.toFixed(2)}</td>               
                </tr>`;
        table.innerHTML += template;
      
}).catch( (error) => {
    $(".modal").modal("show");
})
}

$(".close").on('click', () => {$(".modal").modal("hide")});