const pokémon = Object.freeze([
    { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
    { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
    { "id": 9,   "name": "Blastoise",  "types": ["water"] },
    { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
    { "id": 23,  "name": "Ekans",      "types": ["poison"] },
    { "id": 24,  "name": "Arbok",      "types": ["poison"] },
    { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
    { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
    { "id": 52,  "name": "Meowth",     "types": ["normal"] },
    { "id": 63,  "name": "Abra",       "types": ["psychic"] },
    { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
    { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
    { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
    { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
    { "id": 98,  "name": "Krabby",     "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
    { "id": 133, "name": "Eevee",      "types": ["normal"] },
    { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
]);

// const bListPkmn = pokémon.filter( p => p.name[0] === "B" ).map(p => p.id);
// console.log(bListPkmn);


// Divisible by 3
const divBy3 = pokémon.filter(p => p.id % 3 === 0).map(p => p.id);
console.log(divBy3);
console.log("___________________________");


// Fire type
const fireType = pokémon.filter( p => p.types[0] === "fire");
console.log(fireType);
console.log("___________________________");



// More than 1 type
const moreThanOne = pokémon.filter(p => p.types.length > 1);
console.log(moreThanOne);
console.log("___________________________");


// Just Names 
const justNames = pokémon.map(p => p.name);
console.log(justNames);
console.log("___________________________");


// justNames with id > 99
const greaterId = pokémon.filter(p => p.id > 99).map(p => p.name);
console.log(greaterId);
console.log("___________________________");


// names of Poison type
const poisonType = pokémon.filter( p => p.types[0] === "poison").map(p => p.name);
console.log(poisonType);
console.log("___________________________");


// first type if second is FLYING
const flyingType = pokémon.filter( p => p.types[1] === "flying").map(p => p.types[0]);
console.log(flyingType)
console.log("___________________________");


// Normal COUNT
const normalCount = pokémon.filter( p => p.types[0] === "normal").length;
console.log(normalCount);
console.log("___________________________");

