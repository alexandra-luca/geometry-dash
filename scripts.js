let player = document.getElementById("jump");
document.addEventListener("keydown", myFunction);

function myFunction(e) {
  let x = e.code;
  if (x == "Space") {
    player.classList.add("animation");
    setTimeout(function() {player.classList.remove("animation");}, 2000);
  }
}

// incrementeaza scorul cu 1 la fiecare secunda
let score = -1;
function incrementScore() {
  score += 1;
  document.getElementById("score").innerHTML = score;
}
setInterval(incrementScore, 1000);

// genereaza obstacole random + reseteaza scorul la coliziune
let obstacle_pos = -120;
let obstacle_bottom = 20;
function updateObstacle() {
  let obstacle = document.getElementById("obstacle");

  obstacle_pos += 5;
  if (obstacle_pos > screen.width) {
    obstacle_pos = -120;
    obstacle_bottom = 20 + Math.floor(Math.random()*400);
  }
  
  let obstacle_rect = obstacle.getBoundingClientRect();
  let player_rect = player.getBoundingClientRect();
  
  if (!(obstacle_rect.left > player_rect.right
    || obstacle_rect.right < player_rect.left
    || obstacle_rect.top > player_rect.bottom 
    || obstacle_rect.bottom < player_rect.top)) {
      score = -1;
    }
  
  obstacle.setAttribute("style", `right: ${obstacle_pos}px; bottom: ${obstacle_bottom}px`);
}
setInterval(updateObstacle, 10);
