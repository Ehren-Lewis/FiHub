var coinLabelEl = document.getElementById("coinLabel");
var coinDataEl = document.getElementById("coinData");

fetch("https://api.github.com/orgs/twitter/public_members")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log("Twitter Public Members: Raw data \n----------");
    console.log(data);
  });
