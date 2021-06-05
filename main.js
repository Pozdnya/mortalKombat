const $arenas = document.querySelector(".arenas");
const $randomButton = document.querySelector(".button");

const player1 = {
  player: 1,
  name: "Kitana",
  hp: 100,
  img: "http://reactmarathon-api.herokuapp.com/assets/kitana.gif",
  weapon: ["Steel fans"],
  attack: () => console.log(`${this.name} Fight...`),
};

const player2 = {
  player: 2,
  name: "Sonya",
  hp: 100,
  img: "http://reactmarathon-api.herokuapp.com/assets/sonya.gif",
  weapon: ["Wind blade"],
  attack: () => console.log(`${this.name} Fight...`),
};

const createElement = (tag, className) => {
  const $tag = document.createElement(tag);
  if (className) $tag.className = className;
  return $tag;
};

function createPlayer({ player, name, img, hp }) {
  const $player = createElement("div", `player${player}`);
  const $progressbar = createElement("div", "progressbar");
  const $character = createElement("div", "character");
  const $live = createElement("div", "live");
  const $name = createElement("div", "name");
  const $img = createElement("img");

  $player.appendChild($progressbar);
  $player.appendChild($character);
  $progressbar.appendChild($live);
  $progressbar.appendChild($name);
  $character.appendChild($img);

  $name.textContent = name;
  $img.src = img;
  $live.style.width = `${hp}%`;
  $live.style.backgroundColor = "blue";

  $randomButton.addEventListener("click", () => {
    if (hp <= 0) {
      hp = 0;
      alert(`${name} win`);
      $randomButton.disabled = true;
    } else {
      hp -= Math.ceil(Math.random() * 20);
    }
    $live.style.width = `${hp}%`;
  });

  return $player;
}

$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));
