// panel-script.js
var url = "https://hn-test.firebaseio.com/articles/e5b10c82600b51732af584583a7f57c4a7c01bff.json";

self.port.on("show", function () {
  var request = new XMLHttpRequest();
  request.open("GET", url, true);
  request.onload = function () {
    var element = document.getElementById("forecast_summary");
    // formatting
    var pretty = JSON.stringify(JSON.parse(request.responseText), null, '  ');
    element.textContent = pretty;
  };
  request.send();
});
