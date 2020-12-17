(function(window){
  var helloSpeaker = {};
  helloSpeaker.speakWord = "Hello";
  var speakWord = "Hello";
  helloSpeaker.speak = function speak(names) {
    console.log(speakWord + " " + name);
  }
  window.helloSpeaker = helloSpeaker;
  })(window)
