// biz logic
var vowels = ["a", "e", "i", "o", "u"]

var vowelCheck = function(english) {
  for (var index = 0; index <= english.length ; index += 1) {
    if (vowels.includes(english[index])) {
      return true;
    }
  }
  console.log(index);
  return false;
};

var leadingConsonants = function(english) {
  for (var index = 0; !vowels.includes(english[index]); index += 1) {
  }
  if (english[index] === "u" && english[index - 1] === "q") {
    var firstLetters = english.slice(0, index + 1);
    var middleLetters = english.slice(index + 1);
  } else {
    var firstLetters = english.slice(0, index);
    var middleLetters = english.slice(index);
  }
  return middleLetters + firstLetters + "ay";
};

var pigLatinWord = function(english) {
  var vowelResult = vowelCheck(english);

  if (!english.match(/^[a-zA-Z ]+$/)) {
    return ("Please enter text only");
  } else if (vowelResult === false) {
      return ("That's not a word.  Please enter a real word or phrase.");
  } else if (english.length === 1) {
    return english + "ay";
  } else if (vowels.includes(english.charAt(0))) {
    return english + "way";
  } else if (!vowels.includes(english[0])) {
    return leadingConsonants(english);
  } else {
    return ("Can't compute yet");
  }
};

var pigLatin = function(english) {
  var words = english.split(" ");
  var pigLatinSentence = ("");
  var translatedWord = ("");
  words.forEach(function(word){
    translatedWord = pigLatinWord(word) + " ";
    pigLatinSentence += translatedWord;
  });
  return pigLatinSentence;
};

// party logic
$(document).ready(function() {
  $("#pigLatinForm").submit(function(event) {
    event.preventDefault();

    var english = $("input#english").val();
    var result = pigLatin(english);

    $("#result").text(result);
    $("#pigLatinForm").trigger("reset");
  });
});
