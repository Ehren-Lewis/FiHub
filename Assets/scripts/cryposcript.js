var coinLabelEl = document.getElementById("coinLabel");
var coinDataEl = document.getElementById("coinData");

// display coin and value in currency selected
var selectedCoin = document.getElementById("changedCoin");
var selectedCurr = document.getElementById("changedValue");

var coinValue = document.getElementById("coinValue");
var currSymbol = document.getElementById("currSymbol");

document.getElementById("selectCoin").onchange = listQ;
document.getElementById("selectCurr").onchange = listQ;

var cryptoParams = {};
var currSymbols = {
  USD: "$",
  EUR: "€",
  JPY: "¥",
  GBP: "£",
};

const key = "eb2ec9b0ef866612fd178ef226dea60481d77c7f2ebfd28b32372ce4fe6441c6";
const recentCoinPull = JSON.parse(localStorage.getItem("recentCoin"));
if (recentCoinPull) {
selectedCoin.textContent = recentCoinPull[0];
selectedCurr.textContent = recentCoinPull[1];
coinValue.textContent = recentCoinPull[2];

}
$(".recentPull").text("Most recent pull: ");
$(".recentPull").css("margin-bottom", "5px");


// Binding the function to get the inputs 
function listQ(e) {

  if (e.target.id == "selectCoin") {
    selectedCoin.textContent = this.value;
    cryptoParams.fsym = this.value;
  } else {
    selectedCurr.textContent = this.value;
    cryptoParams.tsyms = this.value;
  }

  if (selectedCoin.textContent && selectedCurr.textContent) {
    $(".recentPull").text("Current Pull: ");
    // Ajax call based on their choices 
  $.ajax({
    // url: baseUrl + query,
    url:`https://min-api.cryptocompare.com/data/price?fsym=${selectedCoin.textContent}&tsyms=${selectedCurr.textContent}&api_key=${key}`,
    method: "GET",
  })
    .then((value) => {
      coinValue.textContent = `${currSymbols[cryptoParams.tsyms]}${value[cryptoParams.tsyms]}`;
      localStorage.setItem("recentCoin", JSON.stringify([selectedCoin.textContent, selectedCurr.textContent, coinValue.textContent]));
    })
    .catch((error) => {
      console.log(error);
    });
}}


// Ajax call for the top 5 coins 
const topFiveCoins = () => {
  $.ajax({
    url: `https://min-api.cryptocompare.com/data/top/totalvolfull?limit=5&tsym=USD&api_key=${key}`,
    method: "GET",
  }).then((value) => {
    for (let i of value.Data) {
      const row = $("<tr></tr>");
      var rank = $(`<td>${value.Data.indexOf(i) + 1}.</td>`);
      row.append(rank);
      rank.css({ "background-color": "rgb(128, 0, 0, .7)", "color": "white" });
      row.append(`<td>${i.CoinInfo.FullName}</td>`);
      row.append(`<td>${i.DISPLAY.USD.PRICE}</td>`);
      row.append(`<td>${i.DISPLAY.USD.HIGHDAY}</td>`);
      row.append(`<td>${i.DISPLAY.USD.LOWDAY}</td>`);
      row.append(`<td>${i.DISPLAY.USD.CHANGEPCTDAY}%</td>`);
      $("#coinTable").append(row);
    }
  });
};

topFiveCoins();
