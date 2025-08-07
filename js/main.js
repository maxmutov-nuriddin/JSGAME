let sBtn = document.querySelector("#start_btn");
let fData = document.querySelector("#input_data");
let cBtn = document.querySelector("#check_btn");
let result = document.querySelector("#result");
let life = document.querySelector("#life");
let sms = document.querySelector("#sms");
let game = document.querySelector("#game");
let oBtn = document.querySelector("#okey_btn");
let rGame = document.querySelector("#result_game");
let sMusic = new Audio("/music/fon-music.mp3");
let gOver = new Audio("/music/game-over.mp3");
let wMusic = new Audio("/music/win-game.mp3");
let gStart = new Audio("/music/game-start.mp3");

let rNumb;
let lNumb;

life.textContent = "";

result.textContent = "Нажми на старт";

sBtn.addEventListener("click", (e) => {
  e.preventDefault();
  rNumb = Math.floor(Math.random() * 50);
  lNumb = Math.ceil(Math.random() * 5);

  gStart.play();

  sMusic.loop = true;
  sMusic.volume = 0.8;
  sMusic.play();

  life.textContent = lNumb--;
  result.textContent = "Я готов";

  cBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (rNumb == undefined) {
      game.classList.add("visually-hidden");
    }
    if (rNumb < fData.value) {
      life.textContent = lNumb--;
      result.textContent = "Слишком много!";
      fData.value = "";
    } else if (rNumb > fData.value) {
      life.textContent = lNumb--;
      fData.value = "";
      result.textContent = "Слишком мало!";
    } else if (rNumb == fData.value) {
      life.textContent = "";
      rGame.textContent = "Поздравляю ты угодал 😊!";
      sMusic.pause();
      wMusic.play();
      fData.value = "";
      game.classList.add("visually-hidden");
      sms.classList.remove("visually-hidden");
    }

    if (lNumb == -1) {
      game.classList.add("visually-hidden");
      sms.classList.remove("visually-hidden");
      rGame.textContent = `Tы проиграл 😔! ${rNumb}`;
      sMusic.pause();
      gOver.play();
    }
  });
});

cBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (rNumb == undefined) {
    game.classList.add("visually-hidden");
    sms.classList.remove("visually-hidden");
  }
});

oBtn.addEventListener("click", (e) => {
  e.preventDefault();
  location.reload();
  game.classList.remove("visually-hidden");
  sms.classList.add("visually-hidden");
});
