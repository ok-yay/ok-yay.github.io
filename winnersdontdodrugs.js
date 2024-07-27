// this is the unobfuscated source code. you are quite smart to find your way here.

function submission() {
    if (document.getElementById("inputmiddle").value == "2946183") {
        correct();
    } else if (document.getElementById("inputmiddle").value == "9612865"){
        cheater();
    } else {
        incorrect();
    }
}
function incorrect() {
    document.getElementById("incorrect").play();
    document.getElementById("correct").currentTime = 0;
    document.getElementById("pain").innerHTML = "incorrect";
}
function correct() {
    document.getElementById("pain").innerHTML = "correct";
    document.getElementById("correct").play();
    document.getElementById("correct").currentTime = 0;
    document.getElementById("WhenYouAreCorrectYouWillGetYourPrize").innerHTML = "UP, DOWN-LEFT, RIGHT";
}
function cheater() {
    const elements = document.getElementsByTagName("*")
    for (var i=0; i<elements.length; i++) {
        if (elements[i].className!="worryNot") {
            elements[i].remove();
        } else {
            console.log("cool");
        }
    }
    document.getElementById("middle1").remove();
    document.getElementById("worryNot").style.display = 'inline';
    document.getElementById("worryNot").play();
}