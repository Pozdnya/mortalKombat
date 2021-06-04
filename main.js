//## Task #0
const player1 = {
  name: "Kitana",
  hp: 90,
  img: "http://reactmarathon-api.herokuapp.com/assets/kitana.gif",
  weapon: ["Steel fans"],
  attack: () => console.log(`${this.name} Fight...`),
};

const player2 = {
  name: "Sonya",
  hp: 80,
  img: "http://reactmarathon-api.herokuapp.com/assets/sonya.gif",
  weapon: ["Wind blade"],
  attack: () => console.log(`${this.name} Fight...`),
};

const $arenas = document.querySelector(".arenas");

function createPlayer(clas, { name, img, hp }) {
  const $player1 = document.createElement("div");
  $player1.className = clas;
  $arenas.appendChild($player1);

  const $progressbar = document.createElement("div");
  $progressbar.className = "progressbar";
  $player1.appendChild($progressbar);

  const $character = document.createElement("div");
  $character.className = "character";
  $player1.appendChild($character);

  const $live = document.createElement("div");
  $live.className = "live";
  $live.style.width = `${hp}%`;
  $live.innerHTML = hp;
  $progressbar.appendChild($live);

  const $name = document.createElement("div");
  $name.classList.add("name");
  $name.textContent = name;
  $progressbar.appendChild($name);

  const $img = document.createElement("img");
  $img.src = img;
  $character.appendChild($img);
}

//## Task #2
createPlayer("player1", player1);
createPlayer("player2", player2);
