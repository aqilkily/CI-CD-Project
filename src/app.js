var character = document.getElementById("character");
var obstacle = document.getElementById("obstacle");
function jump() {
    if(character.classList != "animate") {
         character.classList.add("animate");
    }
    setTimeout(function(){
        character.classList.remove("animate");
    },400)
}

var checkLose = setInterval(function(){
    var characterTop = 
    parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var obsctacleLeft = 
    parseInt(window.getComputedStyle(obstacle).getPropertyValue("left"));
    if(obsctacleLeft<20 && obsctacleLeft> 0 && characterTop>=130) {
        obstacle.style.animation = "none";
        obstacle.style.display = "none";
        alert("Better Luck Next Time!");
    }
}, 10);