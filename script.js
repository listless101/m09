// Create trainer object
const trainer = {
    name: 'Ash',
    age: 10,
    pokemon: [],
    friends: {
      brock: ['Onix', 'Geodude'],
      misty: ['Starmie', 'Gyarados']
    },
    talk: function() {
      console.log('Pikachu! I choose you!');
    }
  };
  
// Access trainer object properties using dot notation
console.log(trainer.name);
console.log(trainer.pokemon);
  
// Access trainer object properties using square bracket notation
console.log(trainer['age']);
console.log(trainer['friends']);
  
// Invoke trainer object method
trainer.talk();
  
// Constructor for creating Pokemon
function Pokemon(name, level) {
    this.name = name;
    this.level = level;
    this.health = level * 10;
    this.attack = level * 5;
    this.tackle = function(targetPokemon) {
      console.log(`${this.name} used Tackle on ${targetPokemon.name}!`);
      targetPokemon.health -= this.attack;
      console.log(`${targetPokemon.name} now has ${targetPokemon.health} health.`);
      if (targetPokemon.health <= 0) {
        this.faint(targetPokemon); 
      }
    };
    this.faint = function(targetPokemon) {
      console.log(`${targetPokemon.name} has fainted.`);
    };
  }
  
// Instantiate pokemon objects
const pikachu = new Pokemon('Pikachu', 5);
const bulbasaur = new Pokemon('Bulbasaur', 3);
const charmander = new Pokemon('Charmander', 2);
  
// Invoke tackle method of one pokemon object
pikachu.tackle(bulbasaur);
// Reduce health to 0
pikachu.tackle(bulbasaur);
  