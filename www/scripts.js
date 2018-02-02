
function getBitcoinPrice(){
  $.getJSON('https://widgets.coinmarketcap.com/v1/ticker/bitcoin//?ref=widget&convert=USD', function(data) {
       $(".Price").text(data[0]["price_usd"]);
   });
}

  function getEtherumPrice(){
    $.getJSON('https://widgets.coinmarketcap.com/v1/ticker/ethereum//?ref=widget&convert=USD', function(data) {
   $(".Price").text(data[0]["price_usd"]);
    });
  }
function getRipplePrice(){
  $.getJSON('https://widgets.coinmarketcap.com/v1/ticker/ripple//?ref=widget&convert=USD', function(data) {
 $(".Price").text(data[0]["price_usd"]);
  });
}
