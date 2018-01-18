// biz logic
var pigLatin = function(english) {
  
}

// party logic
$(document).ready(function() {
  $("#pigLatinForm").submit(function(event) {
    event.preventDefault();

    var english = $("input#english").val();
    var result = pigLatin(english);

    $("#result").text(result);
  });
});
