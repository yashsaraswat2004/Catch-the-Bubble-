let timer = 30;
let score = 0;
let hitrn = 0;
function makeBubble() {
  var clutter = "";

  for (var i = 1; i <= 114; i++) {
    let rand = Math.floor(Math.random() * 10);
    clutter += `<div class = "bubble">${rand}</div>`;
  }

  document.querySelector(".pbtm").innerHTML = clutter;
}
function runTimer() {
  let timerun = setInterval(function () {
    if (timer > 0) timer--;
    else {
      clearInterval(timerun);
      document.querySelector(".pbtm").innerHTML = `<h1>Game Over <br><br>
      Your Score is : ${score}  <br><br>
      Thank's for playing</h1>`;
    }
    document.querySelector(".timer").textContent = timer;
  }, 1000);
}
function hitscount() {
  hitrn = Math.floor(Math.random() * 10);
  document.querySelector(".hits").textContent = hitrn;
}
function increaseScore() {
  score += 10;
  document.querySelector(".score").textContent = score;
}

document.querySelector(".pbtm").addEventListener("click", function (e) {
  let bubclick = Number(e.target.textContent);
  if (bubclick === hitrn) {
    increaseScore();
    makeBubble();
    hitscount();
  } else {
  }
});

makeBubble();
runTimer();
hitscount();
