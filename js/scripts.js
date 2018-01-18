// biz logic
var vowels = ["a", "e", "i", "o", "u"]

var leadingConsonants = function(english) {
  for (var index = 0; !vowels.includes(english[index]); index += 1) {
  }
  var firstLetters = english.slice(0, index);
  var middleLetters = english.slice(index);
  return middleLetters + firstLetters + "ay";
}

var pigLatin = function(english) {
  if (!english.match(/^[a-zA-Z]+$/)) {
    alert("Please enter text only")
  } else if (english.length === 1 && vowels.includes(english)) {
    return english + "ay";
  } else if (vowels.includes(english.charAt(0))) {
    return english + "way";
  } else if (!vowels.includes(english[0])) {
    return leadingConsonants(english);
  }
  else {
    return ("Can't compute yet");
  }
};

// party logic
$(document).ready(function() {
  $("#pigLatinForm").submit(function(event) {
    event.preventDefault();

    var english = $("input#english").val();
    var result = pigLatin(english);

    $("#result").text(result);
  });
});
