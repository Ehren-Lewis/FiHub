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

function listQ(e) {
  var storedCoin = localStorage.getItem(storedCoin);
  var storedCurr = localStorage.getItem(storedCurr);

  if (e.target.id == "selectCoin") {
    selectedCoin.textContent = this.value;
    cryptoParams.fsym = this.value;
  } else {
    selectedCurr.textContent = this.value;
    cryptoParams.tsyms = this.value;
  }

  const query = `${Object.keys(cryptoParams)[0]}=${cryptoParams.fsym}&${
    Object.keys(cryptoParams)[1]
  }=${cryptoParams.tsyms}&api_key=${key}`;

  $.ajax({
    url: baseUrl + query,
    method: "GET",
  })
    .then((value) => {
      coinValue.textContent = value[cryptoParams.tsyms];
      console.log(value[cryptoParams.tsyms]);
    })
    .catch((error) => {
      console.log(error);
    });

  currSymbol.textContent = currSymbols[cryptoParams.tsyms];
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
