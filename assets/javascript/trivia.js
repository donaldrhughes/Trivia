$(document).ready(function () {


    //Global Vars
    //======================
    var sec = 30;
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
        option0: "Daniel Larimer",
        option1: "Marc Andreessen",
        option2: "Satoshi Nakamoto",
        option3: "Vitalik Buterin",
        ans: "Vitalik Buterin"
    },
    {
        question: "What is crypto mining used for?",
        option0: "Verifying Transactions",
        option1: "Trading",
        option2: "Hiding Transactions",
        option3: "Speculation",
        ans: "Verifying Transactions"
    },
    {
        question: "What is a blockchain?",
        option0: "An Encryption Algorythm",
        option1: "A Precious Metal",
        option2: "A Hardware Device",
        option3: "A Public Ledger",
        ans: "A Public Ledger"
    },
    {
        question: "Which crypto coin is privacy focused?",
        option0: "Bitcoin",
        option1: "Monero",
        option2: "Litecoin",
        option3: "Etherium",
        ans: "Monero"
    },
    {
        question: "Which blockchain allows for ERC-20 coins?",
        option0: "Bitcoin Cash",
        option1: "Etherium",
        option2: "XRP",
        option3: "Monero",
        ans: "Etherium"
    },
    {
        question: "Which blockchain is primarity centralized?",
        option0: "XRP",
        option1: "Etherium",
        option2: "Bitcoin",
        option3: "0x",
        ans: "XRP"
    },
    {
        question: "What was Mt. Gox?",
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
        var options = [];
        options.push(card.option0, card.option1, card.option2, card.option3);



        options.forEach(function (elem, i) {
            optDiv = $("<button>");
            optDiv.text(options[i]);
            optDiv.addClass("opt btn btn-outline-dark ");
            $("#opt" + i).append(optDiv);
            $("#opt" + i).on("click", function (i) {
                guess = i.target.innerHTML;
                if (guess == card.ans) {
                    $("#timer").empty();
                    $("#timer").html("You are Correct!")
                    clearInterval(time);
                    clearInterval(time2);
                    // var index = options.indexOf(guess);
                    // options.splice(index);
                    time2 = setInterval(next, 1000 * 3);
                }
                else {
                    $("#timer").empty();
                    $("#timer").text("Sorry that's Incorrect!")
                    clearInterval(time);
                    clearInterval(time2);
                    time2 = setInterval(next, 1000 * 3);
                }
                
            })
   
        });
    }
    function next() {
       
        reset();
       
    }

    function startGame() {
        reset();
        timer();
        $("#reset").click(reset);
        choice();
        showElem();
        $("#start").hide();
        $("#top").hide();
        
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
        $("#timer").text("Time Remaining:" + timeDec);
        if (timeAllow == 0) {
            // $("#timer").empty();
            hideElem();
            $("#timer").append("Time Limit Expired!");
            clearInterval(time);
            clearInterval(time2);
            time2 = setInterval(next, 1000 * 3);
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
        hideElem();
        timeAllow = sec; 
        $("#start").show();
        card = cards[Math.floor(Math.random() * cards.length)];
        $("#top").show();

    };

    //Main
    //=====================

    $("#start").click(startGame);


});
$("#reset").hide();
$("#top").text("Blockchain Trivia");