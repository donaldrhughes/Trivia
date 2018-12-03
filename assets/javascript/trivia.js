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
        option0: "Verify Transactions",
        option1: "Trading",
        option2: "Hiding Transactions",
        option3: "Speculation",
        ans: "Verifying Transactions"
    },
    {
        question: "What is a blockchain?",
        option0: "An Algorythm",
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
        question: "Which blockchain is primarily centralized?",
        option0: "XRP",
        option1: "Etherium",
        option2: "Bitcoin",
        option3: "ZRX",
        ans: "XRP"
    },
    {
        question: "What is the smallest denomination of a bitcoin called?",
        option0: "Satoshi",
        option1: "Megabit",
        option2: "Kilobit",
        option3: "Terabit",
        ans: "Satoshi"
    },
    {
        question: "Which of the following is NOT a crypto exchange?",
        option0: "Gemini",
        option1: "Coinbase",
        option2: "Binance",
        option3: "Nano",
        ans: "Nano"
    },
    {
        question: "What was Mt. Gox?",
        option0: "A place in Japan",
        option1: "A Digital Wallet",
        option2: "A Cyber Hangout",
        option3: "An Exchange",
        ans: "An Exchange"
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
            optDiv.addClass("opt btn btn-outline-secondary text-justify");
            $("#opt" + i).append(optDiv);
            $(optDiv).on("click", function (i) {
                guess = i.target.innerHTML;

                var j = $.inArray(guess, options);
                if (j != -1) {
                    options.splice(j, 1);
                }

                
                console.log(options);
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
        $("#continue").show();
        $("#continue").click(startGame);
    }

    function startGame() {
        reset();
        timer();
        $("#reset").click(reset2);
        choice();
        showElem();
        $("#start").hide();
        $("#top").hide();
        $("#continue").hide();

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
        card = cards[Math.floor(Math.random() * cards.length)];


    };
    function reset2() {
        guess = "";
        $("#continue").show();
        clearInterval(time2);
        clearInterval(time);
        hideElem();
        timeAllow = sec;
        card = cards[Math.floor(Math.random() * cards.length)];
        $("#continue").click(startGame);

    };

    //Main
    //=====================

    $("#start").click(startGame);


});
$("#reset").hide();
$("#top").text("Blockchain Trivia");
$("#continue").hide();