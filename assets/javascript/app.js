var time = 60;
var intervalId;
var score;
var wins = 0;
var losses = 0;
var startTime = document.getElementById("#time-left");
// var guess = document.getElementById("#guess");
// var guess1 = document.getElementById("#answer-1");

// var begin = function () {
//     $("#wins").hide();
//         $("#losses").hide();

$("#start").on("click", function () {
    intervalID = setInterval(function () {
        if (time < 1) {
            clearInterval(intervalId);
            // time = 30
            document.getElementById("#finished").text("'You miss 100% of the shots you don't take. - Wayne Gretzky' - Michael Scott");

        }
        else {
            $("#time-left").text(time);
            time--;
        }

    }, 1000)
});


var questions = [
    ["1. What is Jim's last name?", "Halpert", ["Halpert", "Smith", "Beasley", "Scott"]],

    ["2. This day at the office is Stanley's favorite day of the year?", "Pretzel Day", ["Pretzel Day", "Christmas", "Cupcake Day", "Chipotle Day"]],

    ["3. Which character shares the same name as a famous former Philadelphia Phillie?", "Ryan Howard", ["Steve Carlton", "Carlos Ruiz", "Mike Schmidt", "Ryan Howard"]],

    ["4. Where did Pam and Jim get married?", "Niagara Falls", ["Scranton", "NYC", "Niagara Falls", "The Catskills"]],

    ["5. Who was the boss at Dunder Mifflin prior to Michael Scott?", "Ed Truck", ["Todd Packer", "Ed Truck", "Creed Bratton", "Robert California"]]

]

// var questions = [
//     ["1. What is Jim's last name?"]
// ];




questions.forEach((element, i) => {
    var questionChoice = element[0]
    console.log(questionChoice)
    $("#questions").append("<ol>" + questionChoice + "</ol>")
    element[2].forEach(x => {
        $("#questions").append("<ol class = 'choice' correct-answer='" + element[1] + "'>" + x + "</ol>")
    });

});



$(document).on("click", ".choice", function () {
    var selectedAnswer = $(this).text();
    var correctAnswer = $(this).attr("correct-answer")
    console.log(selectedAnswer);
    console.log(correctAnswer);


    // $("#done").click(function(){
    //     $("#wins").show();
    //     $("#losses").show();


    if (selectedAnswer === correctAnswer) {
        wins++;
        $("#wins").text("Wins: " + wins);
    }
    else {
        losses++;
        $("#losses").text("Losses: " + losses)
    };
});

// $("#questions").append(questions)
// $("#guess").on("click", function(){
//     if (guess === "Halpert"){
//         wins++;
//      $("#wins").text(wins);
//     }
//     else {
//         losses++;
//        $("#losses").text(losses)
//         }

// });

