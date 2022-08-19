



let url = "https://financialmodelingprep.com/api/v3/quote/";
const apikey = "031790bc33587193255896a4a8034319"

var highOfDay = document.querySelector('#high');
var lowOfDay = document.querySelector('#low');
var currentGlobal = document.querySelector('#current');
var upper;
const table = document.querySelector("#infoDisplay");


// var requestedQuote = "ABC"

// $.ajax({
//     url: url + requestedQuote + "?apikey=" + apikey,
//     method: "GET"
// })
// .then(function (data) {
//     console.log(data)
//     companyName.text = "Company Name:  " + data[0].name;
//     high.textContent = "High of Day:  " + data[0].dayHigh;
//     low.textContent = "Low of Day:  " + data[0].dayLow;
//     current.textContent = "Current Price:  " + data[0].price;

//   });


// high of day 
// low of day 
// current price 
// low of day 
// current price 

// symbol
const symbolList = [];
let querySymbol = "";

const addMoreButton = $("#addMore");


// const addAnotherRow = () => {
//     const label = $("<label for='symbolInput'>Symbol: <label>");
//     const submitArea = $('<input type="text" id="symbolInput">');
//         addMoreButton.before(label);
//         addMoreButton.before(submitArea);
//         addMoreButton.before("<br>");
// }

const key = "031790bc33587193255896a4a8034319";

const beforeUrl = "https://financialmodelingprep.com/api/v3/quote/";


// const createTableResult = () => {
    
// }




// $("#submit").on('click', (e) => {
//     e.preventDefault();
//     const allSymbols = document.querySelectorAll(".pQuery");

//     for (let i = 0; i < allSymbols.length; i++) {
        
//         $.ajax({
//             url : `${beforeUrl}${allSymbols[i].textContent.toUpperCase()}?apikey=${key}`,
//             method: "GET"
//         }).then ( (value) => {
//             let name = value[0].name;
//             let high = value[0].dayHigh;
//             let low = value[0].dayLow;
//             let current = value[0].price;

//             let template = `
//                     <tr>
//                         <td>${upper}</td>
//                         <td>${name}</td>
//                         <td>${high}</td>
//                         <td>${low}</td>
//                         <td>${current}</td>                
//                     </tr>`;
//             table.innerHTML += template;
            
//                     // table.append(template)
            
            
//             console.log(value);
//             // requestedQuote.coName[i] = value[0].name;
//             // requestedQuote.high[i] = value[0].dayHigh;
//             // requestedQuote.low[i] = value[0].dayLow;
//             // requestedQuote.current[i] = value[0].price;
//             // console.log(requestedQuote[i].coName)

//         }).catch( (error) => {
//             console.log(error);
//         });
//     }});


// const queryHolder = $(".queryHolder");

// const pushQuery = (value) => {
//     if (!value) {
//         return;
//     }
//     const newVal = $("<p></p>");
//     newVal.text(value);
//     newVal.addClass("pQuery col-2");
//     queryHolder.append(newVal);
//     console.log(newVal.value);
// }


$("#addMore").on('click', (e) => {
    e.preventDefault();
    const allSymbols = document.querySelector("#symbolInput");
    console.log(allSymbols.value);
    upper = allSymbols.value.toUpperCase();
    allSymbols.value = '';
    console.log(upper);
    
    
    
    newTable(upper);
});

function newTable(upper) {
    
    $.ajax({
        url : `${beforeUrl}${upper}?apikey=${key}`,
        method: "GET"
    }).then ( (value) => {
        if (!value.length) {
            alert("danger will robinson");
        }
    else { 
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
    }      
})}

