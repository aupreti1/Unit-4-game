$(document).ready(function () {
    var char = {
        ana:
        {
            image: "Anastasia",
            value: 0
        },
        dam:
        {
            image: "Dametrie",
            value: 0
        },
        bar:
        {
            image: "Bartok",
            value: 0
        },
        ras:
        {
            image: "Rasputan",
            value: 0
        },
    };

    var targetNum = 0;
    var counter = 0;

    var wins = 0;
    var losses = 0;

    function start() {
        counter = 0;

        targetNum = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
        console.log("This is " + targetNum);
      
        $("#targetnum").html(targetNum);

        char.ana.value = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
        char.dam.value = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
        char.bar.value = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
        char.ras.value = Math.floor(Math.random() * (12 - 1 + 1)) + 1;


        $("#yournum").html(counter);

    };

  
    function adding(char) {
        counter = counter + char.value;
        $("#yournum").html(counter);
        check();
        console.log("Your Score is  " + counter);
    }
  
    function check() {
        if (counter > targetNum) {
            alert("SORRY, YOU LOST!");

            console.log("YOU LOST");
            losses++;
            $("#loss").html(losses);
            start();

        }
        else if (counter == targetNum) {
            alert("CONGRATS, YOU WON!");
            console.log("YOU WIN!");
            wins++;
            $("#wins").html(wins);
            start();
        }
    }

    start()

    $("#Anastasia").on("click", function () {
        adding(char.ana);
    });

    $("#Dametrie").on("click", function () {
        adding(char.dam);
    });
    $("#Bartok").on("click", function () {
        adding(char.bar);
    });
    $("#Rasputan").on("click", function () {
        adding(char.ras);
    });


});