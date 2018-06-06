// https://www.w3schools.com/jsref/prop_radio_form.asp
// https://www.formget.com/create-form-using-jquery/

window.onload = function() {
    $(document).on("click", stopwatch.start);
    // $("#stop").on("click", stopwatch.stop);
    // $("#reset").on("click", stopwatch.reset);
  };

var topic = ["sport", "store", "color", "beverage", "hour of the day", "country"];
var sport = ["skateboarding", "roller blading", "rugby", "snowboarding"];
var store = ["Express","Uniqlo","H&M","Forenver 21"];
var color = ["alice blue","blue violet","sunflower yellow","midnight blue"];
var beverage = ["coconut milk","coconut water","aloe juice","birch beer"];
var hour = ["10:27am","12:00am","4:20pm","4:20am"];
var country = ["Romania","Russia","Italy","Philippines"];

    var h3 = $("<h3>")
             $('#h3').text("KP Trivia");
    
    var clock = $('#display');
 
//  Variable that will hold our setInterval that runs the stopwatch
var intervalId;

//prevents the clock from being sped up unnecessarily
var clockRunning = false;

// Our stopwatch object
var stopwatch = {

  time: 0,
  lap: 1,

  reset: function() {

    stopwatch.time = 0;
    stopwatch.lap = 1;

    // DONE: Change the "display" div to "00:00."
    $("#display").text("0:00");

    // DONE: Empty the "laps" div.
    $("#laps").text("");
  },

  start: function() {

    // DONE: Use setInterval to start the count here and set the clock to running.
    if (!clockRunning) {
        intervalId = setInterval(stopwatch.count, 1800);
        clockRunning = true;
    }
  },

  stop: function() {

    // DONE: Use clearInterval to stop the count here and set the clock to not be running.
    clearInterval(intervalId);
    clockRunning = false;
  },

  count: function() {

    // DONE: increment time by 1, remember we cant use "this" here.
    stopwatch.time--;

    // DONE: Get the current time, pass that into the stopwatch.timeConverter function,
    //       and save the result in a variable.
    var converted = stopwatch.timeConverter(stopwatch.time);
    console.log(converted);

    // DONE: Use the variable we just created to show the converted time in the "display" div.
    $("#display").text(converted);
  },

  timeConverter: function(t) {

    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);

    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    if (minutes === 0) {
      minutes = "00";
    }
    if (minutes < 0) {
        minutes = minutes;
      }
    else if (minutes < 10) {
      minutes = "0" + minutes;
    }
    return minutes + ":" + seconds;
  }
};

$(document).ready(function() {    

    var score = 0;
    
    var sub = $("<p>").text("Hey you! How well do you think you know me?");
    var makeForm = $("<form>", {action: '#', method: '#'});
    var form = $("#form").addClass("textarea");
        $('#popQuestion').append(form);

    var topics = [];
    // var sports = [];
    // var stores = [];
    
    $("#form").append(h3, sub, makeForm);
    
    function createForm () {
        var question = q;
        
        for (var i = 0; i < topic.length; i++) {
            var label = $("<div/>");
            var topics = topic[i]
            var q = ("Koltyn's favorite " + topics + " is...")

            $("#form").append(label); // working
            (label).append(q);
            console.log(q);
            radio = ('"radio"')
            answer = ('"answer"')
            id = ('"q'+i+'"')

            var input = $("<input type="+radio+"id="+id+"name="+id+"></input><label class="+answer+"for="+id+">"+id+"</label>");

            $("#form").append(input);
            // $(input).append(option);
            
                // $("#form").append(input, input2, input3, input4);

       
            }
    }
    createForm();


    });


    $(function () {
        var i = 0;
        var allQuestions = [{
            question: "What is Kolt's fav sport?",
            choices: sport,
            correctAnswer: sport[3]
        }, {
            question: "What is 21x 21?",
            choices: store,
            correctAnswer: store[1]
        }, {
            question: "Which number is prime?",
            choices: color,
            correctAnswer: color[0]
        }, {
            question: "Which number is prime?",
            choices: beverage,
            correctAnswer: beverage[1]
        }, {
            question: "Which number is prime?",
            choices: hour,
            correctAnswer: hour[3]
        }, {
            question: "What is 65/5",
            choices: country,
            correctAnswer: country[2]
        }];
        
        function populateQuestion() {
            $("#area").text(allQuestions[i].question); //add question
            var $area = $('#area'),
                j = 0;
            //add radio and answer choices
            for (j; j < allQuestions.length; j++) {
        
                (function (idx) {
                    var html = '<div class="answerRow"><input class="answerRadio" type="radio" name="question' + idx + '" value="' + allQuestions[idx].correctAnswer + '"/><label class="answerRadioLabel"  for="question' + idx + '">test: '+allQuestions[idx].choices[j]+'   </label>';
                    $area.append(html);
                })(j);
            }
        }
        
        populateQuestion();
        
        
        });