function politics (question1, question2, question3, question4, question5) {
  return question1 + question2 + question3 + question4 + question5;
}

$(document).ready(function() {
  $("form#politicalForm").submit(function(event) {
    event.preventDefault();

const question1 = parseInt($("input:radio[name=climate]:checked").val());
const question2 = parseInt($("input:radio[name=gun]:checked").val());
const question3 = parseInt($("input:radio[name=abortion]:checked").val());
const question4 = parseInt($("input:radio[name=homeless]:checked").val());
const question5 = parseInt($("input:radio[name=loan]:checked").val());

const result = politics(question1, question2, question3, question4, question5);


if (result >= 5 && result <= 7) {
  $(".result").text("Conservative");
} else if (result >= 8 && result <= 12) {
  $(".result").text("Moderate");
} else if (result >12) {
  $(".result").text("Liberal");
} else {
  alert("Please fill out all the quiz questions!");
}

$(".resultsDiv").show();

  });
});
