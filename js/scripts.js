// biz logic
var vowels = ["a", "e", "i", "o", "u"]
var pigLatin = function(english) {
  if (english.length === 1 && vowels.includes(english)) {
    return english + "ay";
  } else {
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
