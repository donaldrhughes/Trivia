$(document).ready(function () {


    //Global Vars
    //======================
    var sec = 5;
    var guess;
    var timeAllow = sec;
    var time;
    var time2;
    var cards = [{
        question: "Who wrote the Bitcoin Whitepaper?",
        option0: "Jed McCaleb",
        option1: "The Government",
        option2: "Satoshi Nakamoto",
        option3: "Vitalik Buterin",
        ans: "Satoshi Nakamoto"
    },
    {
        question: "Who co-founded Etherium?",
        option0: "Vitalik Buterin",
        option1: "Marc Andreessen",
        option2: "Satoshi Nakamoto",
        option3: "Daniel Larimer",
        ans: "Vitalik Buterin"
    },
    {
        question: "What was Mt Gox?",
        option0: "A place in Italy",
        option1: "A Cryptocurrency Wallet",
        option2: "A Cyber Hangout",
        option3: "A Cryptocurrency Exchange",
        ans: "A Cryptocurrency Exchange"
    }];



    //Functions
    //=====================


    function choice() {
        
        var guesses = [];
        var card = cards[Math.floor(Math.random() * cards.length)];
        $("#question").text(card.question);
        console.log(card);
        console.log(card.ans);
        var options = [];
        options.push(card.option0, card.option1, card.option2, card.option3);
        console.log(options);



        options.forEach(function (elem, i) {
            optDiv = $("<div>");
            optDiv.text(options[i]);
            $("#opt" + i).append(optDiv);
            $("#opt" + i).on("click", function (i) {
                guess = i.target.innerHTML;
                console.log(guess);
                if (guess == card.ans) {
                    console.log("correct");
                    clearInterval(time);
                    clearInterval(time2);
                    // var index = options.indexOf(guess);
                    // options.splice(index);
                    time2 = setInterval(next, 1000 * 3);
                    console.log(time2);
                    
                    console.log(options);
                }
                else {
                    console.log("wrong");
                    clearInterval(time);
                    clearInterval(time2);
                    time2 = setInterval(next, 1000 * 3);
                }
                
            })
   
        });
    }
    function next() {
       
        reset();
        
        console.log("cleared");
       
    }

    function startGame() {
        reset();
        timer();
        $("#reset").click(reset);
        console.log(cards);
        choice();
        showElem();
        $("#start").hide();
        
    };

    function showElem() {
        $("#reset").show();
        $("#question").show();
        $("#timer").show();
        $("#opt0").show();
        $("#opt1").show();
        $("#opt2").show();
        $("#opt3").show();

    };

    function hideElem() {
        $("#question").empty();
        $("#opt0").empty();
        $("#opt1").empty();
        $("#opt2").empty();
        $("#opt3").empty();
        $("#reset").hide();
        $("#timer").empty();
    };

    function timeLimit() {
        var timeDec = --timeAllow;
        $("#timer").text("Time Remaining:" + timeDec)
        if (timeAllow == 0) {
            $("#timer").empty();
            $("#timer").append("Time Limit Expired!");
            clearInterval(time);
        }

    };

    //timer function
    function timer() {
        $("#timer").text("Time Remaining:" + timeAllow);
        time = setInterval(timeLimit, 1000);

    };

    //reset function
    function reset() {
        guess = "";
        clearInterval(time2);
        clearInterval(time);
        // clearInterval(time2);
        
        hideElem();
        timeAllow = sec; 
        $("#start").show();
        card = cards[Math.floor(Math.random() * cards.length)];
        

    };

    //Main
    //=====================

    $("#start").click(startGame);


});
$("#reset").hide();