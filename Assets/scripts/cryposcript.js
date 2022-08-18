var coinLabelEl = document.getElementById("coinLabel");
var coinDataEl = document.getElementById("coinData");

// display coin and value in currency selected
var selectedCoin = document.getElementById("changedCoin");
var selectedCurr = document.getElementById("changedValue");

var coinValue = document.getElementById("coinValue");
var currSymbol = document.getElementById("currSymbol");

document.getElementById("selectCoin").onchange = listQ;
document.getElementById("selectCurr").onchange = listQ;

var test1 = {};
var currSymbols = {
  USD: "$",
  EUR: "€",
  JPY: "¥",
  GBP: "£",
};

function listQ(e) {
  var storedCoin = localStorage.getItem(storedCoin);
  var storedCurr = localStorage.getItem(storedCurr);

  if (e.target.id == "selectCoin") {
    selectedCoin.textContent = this.value;
    test1.fsym = this.value;
  } else {
    selectedCurr.textContent = this.value;
    test1.tsyms = this.value;
  }

  const query = `${Object.keys(test1)[0]}=${test1.fsym}&${
    Object.keys(test1)[1]
  }=${test1.tsyms}&api_key=${key}`;

  $.ajax({
    url: baseUrl + query,
    method: "GET",
  })
    .then((value) => {
      // console.log(baseUrl);
      // console.log(query);
      // console.log(value);
      //console.log(value[test1.tsyms]);
      coinValue.textContent = value[test1.tsyms];
      console.log(value[test1.tsyms]);
    })
    .catch((error) => {
      console.log(error);
    });

  currSymbol.textContent = currSymbols[test1.tsyms];
  // coinValue.textContent = "just any number";
}

// const label for autcoins = Coins:

// Input element
const autoCoins = $("#autoCoins");
const key = "eb2ec9b0ef866612fd178ef226dea60481d77c7f2ebfd28b32372ce4fe6441c6";
const baseUrl = "https://min-api.cryptocompare.com/data/price?";

let tests = {
  fsym: "BTC",
  tsyms: "USD",
};

const query = `${Object.keys(tests)[0]}=${tests.fsym}&${
  Object.keys(tests)[1]
}=${tests.tsyms}&api_key=${key}`;

$.ajax({
  url: baseUrl + query,
  method: "GET",
})
  .then((value) => {
    console.log(value);
    console.log(baseUrl + query);
  })
  .catch((error) => {
    console.log(error);
  });

const apiCoinKeys = [
  "BTC",
  "ETH",
  "YFI",
  "BUSD",
  "DOGE",
  "SHIB",
  "SOL",
  "USDT",
  "BNB",
  "XRP",
];

$(() => {
  var availableTags = [
    "Bitcoin",
    "Ethereum",
    "Yearn.Finance",
    "BUSD",
    "Dogecoin",
    "Shiba Inu",
    "Solana",
    "Tether",
    "Binance Coin",
    "XRP",
  ];

  $("#autoCoins").autocomplete({
    source: availableTags,
  });
});

const base = "https://min-api.cryptocompare.com/data/all/coinlist";
