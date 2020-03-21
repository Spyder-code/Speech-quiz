// remove the start button when clicked
$('#start').on('click', function(){
    $('#start').remove();
    // ok();
    game.loadQuestion();

})

// click event when you click the answer

$('#form').submit(function(){
    game.check();
})

$(document).on('click','#reset',function(){
    game.reset();
})

// Variable for questions, an array of objects 

var questions = [{
    question: "Who?",
    correctAnswer: "kapal",
    image: "assets/img/kendaraan/kapal.png"
}, {
    question: "Who?",
    correctAnswer: "kereta",
    image: "assets/img/kendaraan/kereta.png"
}, {
    question: "Who?",
    correctAnswer: "mobil",
    image: "assets/img/kendaraan/mobil.png"
},{
    question: "Who?",
    correctAnswer: "pesawat",
    image: "assets/img/kendaraan/pesawat.png"
},{
    question: "Who?",
    correctAnswer: "sepeda",
    image: "assets/img/kendaraan/sepeda.png"
},


];


var game = {
    questions:questions,
    currentQuestion:0, 
    counter:7, 
    correct:0,
    incorrect:0,
    unanswered:0,
    
    countdown: function(){
        game.counter --;
        $('#counter').html(game.counter); 
        if(game.counter<=0){
            console.log("TIME UP!")
            game.timeUp();
        }
    },
    // loadQuestion: function (){
    //     timer = setInterval(game.countdown,1000);
    //     $('#subwrapper').html("<h2> Time to Guess: <span id ='counter'>30</span> Seconds</h2>");
    //     $('#subwrapper').append('<h2>'+questions[game.currentQuestion].question+'</h2>');
    //     for(var i=0;i<questions[game.currentQuestion].answers.length;i++){
    //         $('#subwrapper').append('<button class="answer-button id="button- '+i+'" data-name="'+questions[game.currentQuestion].answers[i]+'">'+questions[game.currentQuestion].answers[i]+'</button>');
    //     }
    // },

    loadQuestion: function (){
        ok();
        $('#cd').remove();
        timer = setInterval(game.countdown,1000);
        $('#time').html("<h2><span id ='counter'>7</span> Seconds</h2>");
        // $('#subwrapper').append('<h1>'+questions[game.currentQuestion].question+'</h1>');
        $('#score').html('<h1>'+game.correct*20+'</h1>');
        $('#images').html('<img src="'+questions[game.currentQuestion].image+'">');
        $('#inp').html('<form id="form"> <input type="text" id="jawab" class="form-control text-center"></form>');
        $('#jawab').focus();
    },
    nextQuestion: function(){
        game.counter = 7;
        $('#counter').html(game.counter);
        game.currentQuestion++;
        game.loadQuestion();

    },
    timeUp: function(){
        clearInterval(timer);
        game.check();
        // game.unanswered++;
        // // $('#subwrapper').html('<h2>Out of time!<h2>');
        // // $('#subwrapper').append('<h3>The correct answer was: '+questions[game.currentQuestion].correctAnswer+'</h3>');
        // if(game.currentQuestion==questions.length-1){
        //     setTimeout(game.results,3*1000);
        // } else{
        //     game.nextQuestion;
        // }

    },
    results: function(){
        clearInterval(timer);
        $('#time').remove();
        $('#images').remove();
        $('#inp').remove();
        $('#prew').remove();
        $('#pref').remove();
        $('#subwrapper').html('<h2>Complete!</h2>')
        $('#subwrapper').append(" Your Score " +game.correct*20+ '<br/>');
        $('#aplause').html('<img src="assets/img/minion.gif">');
        setTimeout(function(){ window.location = "index.html" }, 10000);
    },

    // clicked: function(e){
    //     clearInterval(timer);
    //     if($(e.target).data("name")==questions[game.currentQuestion].correctAnswer){
    //         game.answeredCorrectly();
    // } else {
    //     game.answeredIncorrectly();
    // }

    // },

    check: function(){
        clearInterval(timer);
            var ans = $('#jawab').val().toLowerCase();
            if(ans==questions[game.currentQuestion].correctAnswer){
                game.answeredCorrectly();
        }else if(ans==""){
            game.answeredIncorrectly();
        }else {
            game.answeredIncorrectly();
        }
    },

    answeredCorrectly: function(){
        console.log("right!")
        clearInterval(timer);
        game.correct++;
        if(game.currentQuestion==questions.length-1){
            setTimeout(game.results,1*1000);
        } else{
            setTimeout(game.nextQuestion,1*1000);
        }

    },

    answeredIncorrectly: function(){
        console.log("wrong")
        clearInterval(timer);
        game.incorrect++;
        if(game.currentQuestion==questions.length-1){
            setTimeout(game.results,1*1000);
        } else{
            setTimeout(game.nextQuestion,1*1000);
        }

    },
    reset: function(){
        game.currentQuestion = 0;
        game.counter = 0;
        game.correct = 0;
        game.incorrect = 0;
        game.unanswered = 0;
        game.loadQuestion();

    }

}