function goToAnime() {
  window.open(
    "https://www12.9anime.to/watch/attack-on-titan-final-season.k524/ep-1"
  );
}

let audio;

function play(sound) {
  if (audio) {
    audio.pause();
  }
  audio = new Audio("./eren.wav");
  audio.play();
}

function updateClock() {
  Day = new Date().getDay();
  if (Day == 1) {
    document.getElementById("time").textContent = " New episode is out today!";
  }
  if (Day == 2) {
    document.getElementById("time").textContent =
      " New episode will air in 6 days!";
  }
  if (Day == 3) {
    document.getElementById("time").textContent =
      " New episode will air in 5 days!";
  }
  if (Day == 4) {
    document.getElementById("time").textContent =
      " New episode will air in 4 days!";
  }
  if (Day == 5) {
    document.getElementById("time").textContent =
      " New episode will air in 3 days!";
  }
  if (Day == 6) {
    document.getElementById("time").textContent =
      " New episode will air in 2 days!";
  }
  if (Day == 7) {
    document.getElementById("time").textContent =
      " New episode will air tomorrow!";
  }

  setTimeout(updateClock, 1000);
}
updateClock();
