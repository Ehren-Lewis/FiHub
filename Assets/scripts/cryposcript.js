var coinLabelEl = document.getElementById("coinLabel");
var coinDataEl = document.getElementById("coinData");

const key = "eb2ec9b0ef866612fd178ef226dea60481d77c7f2ebfd28b32372ce4fe6441c6";

const baseUrl = "https://min-api.cryptocompare.com/data/price?";


const tests = {
  "fsym":"BTC",
  "tsyms":"USD"
  }


  const query = `${Object.keys(tests)[0]}=${tests.fsym}&${Object.keys(tests)[1]}=${tests.tsyms}&api_key=${key}`;
  console.log(query);

  $.ajax({
    url: baseUrl + query,
    method: "GET"
  }).then( (value) => {
    console.log(value)
  });
