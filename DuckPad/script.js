function Save() {
  var text = document.getElementById("text").value;
  var blob = new Blob([text], { type: "text/plain" });
  var url = URL.createObjectURL(blob);
  var filename = document.getElementById("filename").value;
  var a = document.createElement("a");
  a.href = url; // silly
  a.download = filename;
  a.click();
}
function ChangeFontSize() {
  var text = document.getElementById("text");
  var font = text.style.fontSize = +text.style.fontSize + 50 + "px";;
}
function duckLink() {
  window.open("https://duckgodigital.com/");
}
function Check() {
  var text = document.getElementById("text").value;
  document.write("<h1 style='font-family:Arial;text-align:center;'>Your text is " + text.length + " characters long.</h1><br>")
  document.write("<h1 style='font-family:Arial;text-align:center;'>If you did not save your text its copied to clipboard.</h1>")
  var text = text;
  navigator.clipboard.writeText(text).then(function() {
    console.log('Async: Copying to clipboard was successful!');
  }, function(err) {
    console.error('Async: Could not copy text: ', err);
  });
  }
function Random() {
  var text = document.getElementById("text");
  var words = ["Duck", "duckgodigital", "great", "is", "a", "website", "Ducking", "duck", "ducking", "funny", "I", "Love", "Duckpad", "crazy", "funfun", "funner", "Braylin", "owner", "of", "@duickery", "go", "subscribe", "to", "him", "on", "youtube", "and", "twitch", "and", "follow", "him", "on", "tiktok","did","a","wise","duck","fly"];
  var randomWords = [];
  for (var i = 0; i < 80; i++) {
    var randomIndex = Math.floor(Math.random() * words.length);
    randomWords.push(words[randomIndex]);
  }
  text.value = randomWords.join(" ");
}
function RandomLong() {
  var text = document.getElementById("text");
  var words = ["Duck", "duckgodigital", "great", "is", "a", "website", "Ducking", "duck", "ducking", "funny", "I", "Love", "Duckpad", "crazy", "funfun", "funner", "Braylin", "owner", "of", "@duickery", "go", "subscribe", "to", "him", "on", "youtube", "and", "twitch", "and", "follow", "him", "on", "tiktok","did","a","wise","duck","fly","duckgodigital.com","minecraft","fortnite", "roblox", "amongus", "among us", "amongus", "amongus", "skibidi Toilet Is Stupid","brainrot","ohio","game","Pro Gamer Tag Hayden Is Cringe", "mom", "dad", "snoop dog", "kendrick lamar", "kanye west", "kanye", "east", "kanye east", "Its Your Besty Ms.Ms Westy!!", "😭","💀", "😂", "😎", "😱", "😳", "😫", "😔", "😕", "😢", "😭", "😤", "😠", "😡", "😩", "🫵😹", "cat laugh at you", "HAHAHAHAHAHAHAHAHAHA", "ha", "haha", "HAHA", "Meme", "sigma", "skibidi toilet will be mine ohio gyatt rizz rizzlers on my mind yeah ", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "ABCDEFGHIJKLMNOPQRSTUVWXYZ", "abcdefg Gummy bears are chasing me One is red one is blue one is trying to steal my shoe now im running for my life cause the red one has a knife!!!","sigmatoilet","sigma","rizz","rizzler","what is blud yapping about?", "Zap", "zigzag", "bounce", "whizbang", "jellybean", "rocketman", "pixel", "foxtrot", "giggle", "twinkle", "zoom", "snazzy", "boomerang", "doodle", "fizz", "whirlwind", "peanut", "gizmo", "banjo", "maverick", "quasar", "tango", "widget", "fizzle", "sprocket", "knickknack", "whimsy", "zap", "boombox", "quibble", "quirky", "nifty", "glitch", "hubbub", "flapjack", "wobble", "zigzag", "bamboozle", "chuckle", "whisk", "quirk", "kazoo", "fizzbuzz", "ripple", "snicker", "quirk" ,"fizzle", "whizzle", "zabuzz", "zombie","blip", "sizzle", "whirl", "jumpy", "gigabyte", "gizmo", "doodlebug", "flibbertigibbet", "snickerdoodle", "doohickey", "thingamajig", "whatchamacallit", "whirligig", "gallivant", "pizzazz", "ballyhoo", "hodgepodge", "jamboree", "knickknack", "curlicue", "bazooka", "zamboni", "boondoggle", "hullabaloo", "skedaddle", "rambunctious", "wackadoodle", "skullduggery", "shenanigans", "kerfuffle", "lollygag", "fandango", "nincompoop", "brouhaha", "flabbergasted", "gobbledygook", "scuttlebutt", "topsy-turvy", "quicksilver", "whippersnapper", "hodgepodge", "jabberwocky", "flummoxed", "serendipity", "higgledy-piggledy", "snollygoster", "collywobbles", "bumbershoot", "fiddle-faddle", "claptrap", "razzmatazz", "thingamabob", "dillydally", "hodgepodge", "bumfuzzle", "bamboozle", "whatchamacallit", "kerfuffle", "skedaddle", "nincompoop", "tallyho", "jibber-jabber", "fandangle", "hullabaloo", "quibble", "frou-frou", "gobbledygook", "skulduggery", "topsy-turvy", "hodgepodge", "fiddlesticks", "gibberish", "jiggery-pokery", "lollapalooza", "mumbo jumbo", "thingamajig", "whoop-de-doo", "abracadabra", "jiggly", "thingamabob"];
  var randomWords = [];
  for (var i = 0; i < 20000; i++) {
    var randomIndex = Math.floor(Math.random() * words.length);
    randomWords.push(words[randomIndex]);
  }
  text.value = randomWords.join(" ");
}
