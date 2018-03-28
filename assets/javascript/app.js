window.onload = function () {


    var intervalId
    var timer = 10;
    var questionArray = [
{
    question: "What is my gender?",
    choices: ["Male", "Female", "Gay", "Lesbian", "Bi-sexual"],
    correct: "Female"
}, {
    question: "What is my marriage status?",
    choices: ["Single", "Married", "Cohabit"],
    correct: "Single"

}, {
    question: "What's kind of man do I like?",
    choices: ["Humorous", "Responsible", "Brave", "Muscular"],
    correct: "Humorous"||"Responsible"||"Brave"
}, {
    question: "How many brothers I have?",
    choices: ["One", "Two", "Three", "Four"],
    correct: "Two"

}, {
    question: "How many sisters I have?",
    choices: ["One", "Two", "Three", "Four"],
    correct: "One"

}, {
    question: "What's kind of hobbies do I have?",
    choices: ["Sports", "Cook", "Movies", "Paint"],
    correct: "Movies"||"Paint"
}, {
    question: "Do I like shopping?",
    choices: ["Very much", "Don't like", "When it is on sale", "Once a month"],
    correct: "When it is on sale"||"Once a month"

}, {
    question: "What do you think who I am?",
    choices: ["Determined", "Dramatic", "Hopeful", "Kind"],
    correct: "Determined"||"Hopeful"||"Kind" 
}];



    //Start  button starts game
    //clearing the content works.  Do not touch it. 
    $("#startGame").on("click", function () {
        $("#startGame").replaceWith();
        startTimer();
        decrement();
        firstQuestion();
        //renderButtons();
    })

    //this is your timer.  It is working.  Do not touch it. 
    function startTimer() {
        intervalId = setInterval(decrement, 1000);
    }

    function decrement() {
        timer--;
        $("#countdown").html("<span>" + timer + "<span>");

        if (timer === 0) {
            stopTimer();
        }
    }

    function stopTimer() {
        clearInterval(intervalId);
        nextQuestion();

    }

    function firstQuestion() {
        var randomQuestion = questionArray[Math.floor(Math.random() * questionArray.length)];
        $("#question-display").html(JSON.stringify(randomQuestion.question));
        renderButtons(randomQuestion);
    }

    function renderButtons(randomQuestion) {
        //Cleared button div of any newly created buttons
        $("#answer-display").empty();
        $("#answer-display").data("answer", randomQuestion.correctAnswer);
        //dynamically generates buttons for each answer
        for (var i = 0; i < randomQuestion.answers.length; i++) {
            var a = $("<button>");
            //adds class to the button
            a.addClass("btn-answer");
            //adds a data attribute
            a.data("name", randomQuestion.answers[i]);
            //labels button
            a.text(randomQuestion.answers[i]);
            //adds button to the button view div
            $("#answer-display").append(a);
        }

    }

    $("#answer-display").on("click", function(){
        console.log("clicked");


        });   
    };
    $("#answer-display").on("click", ".btn-answer", function(){
        //get answer from clicked element
        var answer = $(this).data("answer");
        //get correct answer from parent element
        var correctAnswer = $("#answer-display").data("answer");
        // correct logic
        if (answer == correctAnswer) {
            console.log("correct!!!");
        }else {
            console.log("wrong!!!");
        }
 }); 
