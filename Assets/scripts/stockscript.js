

var highOfDay = document.querySelector('#high');
var lowOfDay = document.querySelector('#low');
var currentGlobal = document.querySelector('#current');
var upper;
const table = document.querySelector("#infoDisplay");

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
const beforeUrl = "https://financialmodelingprep.com/api/v3/quote/";

$("#submit").on('click', (e) => {
    e.preventDefault();
    const allSymbols = document.querySelectorAll(".pQuery");

    for (let i = 0; i < allSymbols.length; i++) {
        
        $.ajax({
            url : `${beforeUrl}${allSymbols[i].textContent.toUpperCase()}?apikey=${key}`,
            method: "GET"
        }).then ( (value) => {
            let name = value[0].name;
            let high = value[0].dayHigh;
            let low = value[0].dayLow;
            let current = value[0].price;

            let template = `
                    <tr>
                        <td>${upper}</td>
                        <td>${name}</td>
                        <td>${high}</td>
                        <td>${low}</td>
                        <td>${current}</td>                
                    </tr>`;
            table.innerHTML += template;
            
            // table.append(template)
            
        

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
    const allSymbols = document.querySelector("#symbolInput");
    upper = allSymbols.value.toUpperCase();
    newTable();
});

let currentlyDisplayed = [] 

function newTable() {

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
      
})}