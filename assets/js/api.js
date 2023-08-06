$(document).ready(function () {

    fetch("https://the-trivia-api.com/api/questions")
        .then(response => {
            return response.json();
        })
        .then(data => {
            displayQuestions(data);
        })
        .catch(e => {
            console.log(e);
        })

    function displayQuestions(data) {
        let random = Math.ceil(Math.random() * 3) -1;
        let counter = 0;
        $("#questions").text(data[0].question);
        $(`#answer-${random}`).text(data[0].correctAnswer);
        $(`#answer-${random}`).addClass("true");
        let incorrectAnswers = data[0].incorrectAnswers.map(answers => {
            if (counter == random) {
                counter += 1;
            }
            $(`#answer-${counter}`).text(answers);
            counter += 1;
        });
    };

    $("#answer-0").on("click", function(){
        if($("#answer-0").hasClass(true)){
            $("#answer-0").addClass("correct");
            displayQuestions(data[1]);
        }else{
            $("#answer-0").addClass("incorrect");
        }
    });
    $("#answer-1").on("click", function(){
        if($("#answer-1").hasClass(true)){
            $("#answer-1").addClass("correct");
            displayQuestions(data[1]);
        }else{
            $("#answer-1").addClass("incorrect");
        }
    });
    $("#answer-2").on("click", function(){
        if($("#answer-2").hasClass(true)){
            $("#answer-2").addClass("correct");
            displayQuestions(data[1]);
        }else{
            $("#answer-2").addClass("incorrect");
        }
    });
    $("#answer-3").on("click", function(){
        if($("#answer-3").hasClass(true)){
            $("#answer-3").addClass("correct");
            displayQuestions(data[1]);
        }else{
            $("#answer-3").addClass("incorrect");
        }
    });
    
});