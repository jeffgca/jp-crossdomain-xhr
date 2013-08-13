// main.js
var data = require("sdk/self").data;

var panel = require("sdk/panel").Panel({
  height: 250,
  contentURL: data.url("panel.html"),
  contentScriptFile: data.url("panel-script.js")
});

panel.on("show", function(){
  panel.port.emit("show");
});

require("sdk/widget").Widget({
  id: "test-widget",
  label: "Test-Widget",
  contentURL: "http://www.mozilla.org/favicon.ico",
  panel: panel
});
