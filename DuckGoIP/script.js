function generateIP() {
  var ip = Math.floor(Math.random() * 255);
  var ip2 = Math.floor(Math.random() * 255);
  var ip3 = Math.floor(Math.random() * 255);
  var ip4 = Math.floor(Math.random() * 255);
  var wholeIP = ip + "." + ip2 + "." + ip3 + "." + ip4;
  document.getElementById("ip").innerHTML = wholeIP;
}
function Goofy() {
  var ip = Math.floor(Math.random() * 255546553435534600);
  var ip2 = Math.floor(Math.random() * 566);
  var ip3 = Math.floor(Math.random() * 564463455343554566);
  var ip4 = Math.floor(Math.random() * 546465435345534466);
  var wholeIP = ip + "." + ip2 + "." + ip3 + "." + ip4;
  document.getElementById("ip").innerHTML = wholeIP;
}
