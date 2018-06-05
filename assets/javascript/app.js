// https://www.w3schools.com/jsref/prop_radio_form.asp
// https://www.formget.com/create-form-using-jquery/

var topic = ["sport", "store", "color", "beverage", "hour of the day", "country"];
var sport = ["skateboarding", "roller blading", "rugby", "snowboarding"];
var store = ["Express","Uniqlo","H&M","Forenver 21"];
var color = ["alice blue","blue violet","sunflower yellow","midnight blue"];
var beverage = ["coconut milk","coconut water","aloe juice","birch beer"];
var hour = ["10:27am","12:00am","4:20pm","4:20am"];
var country = ["Romania","Russia","Italy","Philippines"];

    var h3 = $("<h3>")
             $('#h3').text("KP Trivia");
    
    var clock = $('<div>Time Remaining: </div>')
    var time = "00:00"
    $('#nav').append(clock);
    $(clock).append(time);

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