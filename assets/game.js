var win = 0;


var losses = 0;


var winningNum = Math.floor(Math.random() * 60) + 30;

$("#win-points").text(winningNum);

var counter = 0;
$("#img-score").text(counter);
var imageValue;
var randomNumber;


var pictures = ["assets/images/crys.png",
    "assets/images/crystal-icon-1.jpg",
    "assets/images/crystal-icon-2.png",
    "assets/images/crystal-icon-7.jpg"]



var startGame = function () {
    
    for (var j = 0; j < pictures.length; j++) {

        $(".image").empty();
        var image = $("<img>");
     
        image.addClass("image");
        
        image.attr("src", pictures[j]);
       
        var randomNumber = Math.floor(Math.random() * 12) + 1;
        
        image.attr({
            "data-number": randomNumber
        })
        console.log(randomNumber);
        
        $("#crystal-wrapper").append(image);

    }

}
var resetImage = function () {
    $(".image").each(function () {
        randomNumber = Math.floor(Math.random() * 12) + 1;
        $(this).attr({
            "data-number": randomNumber
        });
        console.log(randomNumber);
    })
}


var reset = function () {
    counter = 0;
    winningNum = Math.floor(Math.random() * 60) + 30;
    $("#win-points").text(winningNum);
    resetImage();
}
startGame();
$(".image").on("click", function () {
    imageValue = parseInt($(this).attr("data-number"));
    console.log(imageValue);
    counter = imageValue + counter;
    console.log(counter);
    $("#img-score").text(counter);


    if (winningNum < counter) {
        losses++;
        counter = 0;
        console.log("lost " + losses);
        reset();
        console.log("reset");;
    }

    if (counter === winningNum) {
        win++;
        console.log("wins " + win);
        alert("Good Job you won!!")
        reset();
        console.log("reset");;
    }
    $("#wins").text(win);
    $("#lose").text(losses);
})