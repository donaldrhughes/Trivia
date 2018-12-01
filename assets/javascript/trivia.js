$(document).ready(function () {


    //Global Vars
    //======================

    var timeAllow = 5;
    var time;
    var time2;
    var cards = [{
        question: "Who wrote the Bitcoin Whitepaper?",
        option1: "The Government",
        option2: "Satoshi Nakamoto",
        option3: "Vitalik Buterin",
        option0: "Jed McCaleb",
        ans: "Satoshi Nakamoto"
    },
    {
        question: "Who co-founded Etherium?",
        option1: "Marc Andreessen",
        option2: "Satoshi Nakamoto",
        option3: "Daniel Larimer",
        option0: "Vitalik Buterin",
        ans: "Vitalik Buterin"
    },
    {
        question: "What was Mt Gox?",
        option1: "A Cryptocurrency Wallet",
        option2: "A Cyber Hangout",
        option3: "A Cryptocurrency Exchange",
        option0: "A place in Italy",
        ans: "A Cryptocurrency Exchange"
    }];



    //Functions
    //=====================
    

    function choice() {
        var card = cards[Math.floor(Math.random() * cards.length)];
        $("#question").text(card.question);
        console.log(card);
        console.log(card.ans);
        for(var i=0; i<=3; i++){
            $("#opt" + i).text(card["option" + i]);
            var guess = card["option" + i];
            
            $("#opt" + i).on("click", function(){
                
                console.log(guess);
                if(guess == card.ans){
                    alert("correct");
                    time2 = setInterval(next, 1000 * 3);
                }
                else{
                    alert("wrong");
                    time2 = setInterval(next, 1000 * 3);
                }
            })
        }
    };
    function next(){
        alert("next");
    }

    function startGame() {
        timer();
        console.log(cards);
        choice();
        showElem();
        $("#start").hide();
        $("#reset").click(reset);
    };

function showElem(){
    $("#reset").show();
    $("#question").show();
    $("#timer").show();
    $("#opt0").show();
    $("#opt1").show();
    $("#opt2").show();
    $("#opt3").show();
    
};

function hideElem(){
    $("#question").hide();
    $("#opt0").hide();
    $("#opt1").hide();
    $("#opt2").hide();
    $("#opt3").hide();
    $("#reset").hide();
    $("#timer").hide();
};

    function timeLimit() {
        var timeDec = --timeAllow;
        $("#timer").text("Time Remaining:"+ timeDec)
        if(timeAllow == 0){
            $("#timer").empty();
            $("#timer").append("Time Limit Expired!");
            clearInterval(time);
        }
        
    };
    
    //timer function
function timer(){
    $("#timer").text("Time Remaining:" + timeAllow);
    time = setInterval(timeLimit, 1000);
   
};

    //reset button main function
    function reset(){
        hideElem();
        $("#start").show();
        card = cards[Math.floor(Math.random() * cards.length)];
        clearInterval(timer);

    };

    //Main
    //=====================
    
    $("#start").click(startGame);
    

});
$("#reset").hide();