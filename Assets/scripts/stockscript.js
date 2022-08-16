let url = "https://financialmodelingprep.com/api/v3/quote/";
const apikey = "031790bc33587193255896a4a8034319"

var highOfDay = document.querySelector('#high');
var lowOfDay = document.querySelector('#low');
var current = document.querySelector('#current');

requestedQuote = "QQQ";




$.ajax({
    url: url + requestedQuote + "?apikey=" + apikey,
    method: "GET"
})
.then(function (data) {
    console.log(data)

    high.textContent = "High of Day:  " + data[0].dayHigh;
    low.textContent = "Low of Day:  " + data[0].dayLow;
    current.textContent = "Current Price:  " + data[0].price;
  });

// .then( (value) => {
//     console.log(value[5]);
//     // const lon = value[0].lon;
//     // const lat = value[0].lat;
//     // return [lat, lon];
// })

// .fail( (error) => {
//     console.log(error);
// })