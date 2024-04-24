let xp = 0;
let health = 100;
let gold = 50;
let currentWeapon = 0;
let fighting;
let monsterHealth;
let inventory = ["stick"];

const button1 = document.querySelector('#button1');
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const text = document.querySelector("#text");
const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const monsterStats = document.querySelector("#monsterStats");
const monsterName = document.querySelector("#monsterName");
const monsterHealthText = document.querySelector("#monsterHealth");
const weapons = [
  { name: 'stick', power: 5 },
  { name: 'dagger', power: 30 },
  { name: 'claw hammer', power: 50 },
  { name: 'sword', power: 100 }
];
const monsters = [
  {
    name: "slime",
    level: 2,
    health: 15
  },
  {
    name: "fanged beast",
    level: 8,
    health: 60
  },
  {
    name: "dragon",
    level: 20,
    health: 300
  }
];
const locations = [
  {
    name: "town square",
    "button text": ["Go to store", "Go to cave", "Fight dragon"],
    "button functions": [goStore, goCave, fightDragon],
    text: "You are in the town square. You see a sign that says \"Store\"."
  },
  {
    name: "store",
    "button text": ["Buy 10 health (10 gold)", "Buy weapon (30 gold)", "Go to town square"],
    "button functions": [buyHealth, buyWeapon, goTown],
    text: "You enter the store."
  },
  {
    name: "cave",
    "button text": ["Fight slime", "Fight fanged beast", "Go to town square"],
    "button functions": [fightSlime, fightBeast, goTown],
    text: "You enter the cave. You see some monsters."
  },
  {
    name: "fight",
    "button text": ["Attack", "Dodge", "Run"],
    "button functions": [attack, dodge, goTown],
    text: "You are fighting a monster."
  },
  {
    name: "kill monster",
    "button text": ["Go to town square", "Go to town square", "Easter Egg"],
    "button functions": [goTown, goTown, easterEgg],
    text: 'The monster screams "Arg!" as it dies. You gain experience points and find gold.'
  }
];

// Function to update the UI
function updateUI() {
  xpText.textContent = `XP: ${xp}`;
  healthText.textContent = `Health: ${health}`;
  goldText.textContent = `Gold: ${gold}`;
  text.textContent = locations[currentLocation].text;
  button1.textContent = locations[currentLocation]["button text"][0];
  button2.textContent = locations[currentLocation]["button text"][1];
  button3.textContent = locations[currentLocation]["button text"][2];
  if (fighting) {
    monsterName.textContent = `Monster: ${monsters[currentMonster].name}`;
    monsterHealthText.textContent = `Monster Health: ${monsterHealth}`;
    monsterStats.style.display = "block";
  } else {
    monsterStats.style.display = "none";
  }
}

// Function to handle button click
function buttonClicked(buttonIndex) {
  locations[currentLocation]["button functions"][buttonIndex]();
}

// Functions for button actions
function goStore() {
  currentLocation = 1;
  updateUI();
}

function goCave() {
  currentLocation = 2;
  updateUI();
}

function fightDragon() {
  fighting = true;
  currentMonster = 2;
  monsterHealth = monsters[currentMonster].health;
  updateUI();
}

function buyHealth() {
  if (gold >= 10) {
    health += 10;
    gold -= 10;
    updateUI();
  } else {
    text.textContent = "Not enough gold!";
  }
}

function buyWeapon() {
  if (gold >= 30) {
    currentWeapon++;
    gold -= 30;
    updateUI();
  } else {
    text.textContent = "Not enough gold!";
  }
}

function goTown() {
  currentLocation = 0;
  updateUI();
}

function fightSlime() {
  fighting = true;
  currentMonster = 0;
  monsterHealth = monsters[currentMonster].health;
  updateUI();
}

function fightBeast() {
  fighting = true;
  currentMonster = 1;
  monsterHealth = monsters[currentMonster].health;
  updateUI();
}

function attack() {
  const playerDamage = weapons[currentWeapon].power;
  const monsterDamage = Math.floor(Math.random() * 10) + 1;
  health -= monsterDamage;
  monsterHealth -= playerDamage;
  if (monsterHealth <= 0) {
    fighting = false;
    xp += monsters[currentMonster].level * 10;
    gold += monsters[currentMonster].level * 20;
    currentLocation = 4;
  }
  updateUI();
}

function dodge() {
  const dodgeChance = Math.random();
  if (dodgeChance > 0.5) {
    text.textContent = "You dodged the monster's attack!";
  } else {
    const monsterDamage = Math.floor(Math.random() * 10) + 1;
    health -= monsterDamage;
  }
  updateUI();
}

function easterEgg() {
  text.textContent = "Congratulations! You found the Easter Egg!";
  xp += 100;
  gold += 200;
  updateUI();
}

// Initialize game
let currentLocation = 0;
updateUI();

// Add event listeners to buttons
button1.addEventListener("click", () => buttonClicked(0));
button2.addEventListener("click", () => buttonClicked(1));
button3.addEventListener("click", () => buttonClicked(2));
