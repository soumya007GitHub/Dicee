function fun(){
    var num1 = Math.random();
var num2 = Math.random();
num1 = Math.floor((num1 * 6) + 1);
num2 = Math.floor((num2 * 6) + 1);
var link1 = "images/dice"+num1+".png";
var link2 = "images/dice"+num2+".png";
document.querySelector("#img1").setAttribute("src", link1);
document.querySelector("#img2").setAttribute("src", link2);
if(num1>num2){
    document.getElementById("player-name").innerHTML = "Player 1 Wins.";
}
else if(num1 === num2){
    document.getElementById("player-name").innerHTML = "It's a Draw.";
}
else{
    document.getElementById("player-name").innerHTML = "Player 2 Wins";
}
}
fun();