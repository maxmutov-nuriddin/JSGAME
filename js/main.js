let sBtn = document.querySelector("#start_btn");
let fData = document.querySelector("#input_data");
let cBtn = document.querySelector("#check_btn");
let result = document.querySelector("#result");
let life = document.querySelector("#life");
let sms = document.querySelector("#sms");
let game = document.querySelector("#game");
let oBtn = document.querySelector("#okey_btn");
let rGame = document.querySelector("#result_game");

let rNumb;
let lNumb;

localStorage.setItem("numb", Math.ceil(Math.random() * 5));

life.textContent = "";

result.textContent = "Нажми на старт";
lNumb = localStorage.getItem("numb");

life.textContent = lNumb--;

sBtn.addEventListener("click", (e) => {
  e.preventDefault();
  rNumb = Math.floor(Math.random() * 50);

  result.textContent = "Я готов";
  console.log("da");

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
      fData.value = "";
      game.classList.add("visually-hidden");
      sms.classList.remove("visually-hidden");
    }

    if (lNumb == -1) {
      game.classList.add("visually-hidden");
      sms.classList.remove("visually-hidden");
      rGame.textContent = "Tы проиграл 😔!";
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
  localStorage.clear();
});
