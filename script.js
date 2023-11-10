console.log("im so hungryyyy");

var fruit = "dulce apple fritter is kinda mid";
console.log(fruit);

var year = 2023;
console.log(year);

window.onload = function(){

$(".rock").click(openDialog);
$(".dialog").click(closeDialog);

$(".car").hover(carTransform, carReturn);

}

function openDialog(){
    $(".dialog").css("display", "block");
}

function closeDialog(){
    $(".dialog").css("display", "none");
}

function carTransform(){
    $(".car").attr("src", "imagery/bee.png");
    $(".car").css("width", "300px");
    $(".car").css("top", "600px");
    $(".car").css("left", "100px");
}

function carReturn(){
    $(".car").attr("src", "imagery/car.png");
    $(".car").css("width", "300px");
    $(".car").css("top", "600px");
    $(".car").css("left", "100px");
}
$(".title").css("color", "red");

// $("p").css("color","green"); //
//$(".title").css("color","green");//

function changeColor(){
    $(".green-box").css("height", "500px");
    $(".green-box").css("width", "500px");
    $(".green-box").css("left", "500px");
    $(".green-box").css("background", "red");
}
// calls the function//
// changeColor();

// $(".green-box").click(changeColor);




   
