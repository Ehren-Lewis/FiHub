var coinLabelEl = document.getElementById("coinLabel");
var coinDataEl = document.getElementById("coinData");
































































































// const label for autcoins = Coins: 

// Input element 
const autoCoins = $("#autoCoins");
const key = "eb2ec9b0ef866612fd178ef226dea60481d77c7f2ebfd28b32372ce4fe6441c6";
const baseUrl = "https://min-api.cryptocompare.com/data/price?";

let tests = {
  "fsym":"BTC",
  "tsyms":"USD"
  }


  const query = `${Object.keys(tests)[0]}=${tests.fsym}&${Object.keys(tests)[1]}=CAD&api_key=${key}`;

  $.ajax({
    url: baseUrl + query,
    method: "GET"
  }).then( (value) => {
    console.log(value)
  }).catch( (error) => {
    console.log(error);
  });

  const apiCoinKeys =  [
    "BTC",
    "ETH",
    "YFI",
    "BUSD",
    "DOGE",
    "SHIB",
    "SOL",
    "USDT",
    "BNB",
    "XRP"
  ];
  
$( () => {
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
    "XRP"
  ];

  $("#autoCoins").autocomplete({
    source: availableTags});
})

  // const base = "https://min-api.cryptocompare.com/data/all/coinlist";

  ( () => {
    $("#coinSelect").checkboxradio();
  });

const currencyList = [
  "USD",
  "EUR",
  "JPY",
  "CAD"
]

// checkox 1-4

// <fieldset> 
// for (let i = 0; i < currencyList.length; i++) {
  
// }