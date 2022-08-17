var coinLabelEl = document.getElementById("coinLabel");
var coinDataEl = document.getElementById("coinData");

// display coin and value in currency selected
var selectedCoin = document.getElementById("changedCoin");
var selectedCurr = document.getElementById("changedValue");

document.getElementById("selectCoin").onchange = listQ;
document.getElementById("selectCurr").onchange = listQ;

function listQ(e) {
  console.log(e.target);
  if (e.target.id == "selectCoin") {
    selectedCoin.textContent = this.value;
  } else {
    selectedCurr.textContent = this.value;
  }
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
