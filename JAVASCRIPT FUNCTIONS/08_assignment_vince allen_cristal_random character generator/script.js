function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
}

const character = {
    name: "Hero",
    health: 100
};

const classes = ["Warrior", "Mage", "Archer", "Healer", "Assassin"];
character.class = getRandomItem(classes);

character.randomizeHealth = function() {
    this.health = getRandomInt(50, 150);
};

const abilities = ["Fireball", "Healing Touch", "Stealth", "Lightning Strike", "Power Slash"];
character.specialAbility = getRandomItem(abilities);

function generateCharacter(givenName) {
    const defaultNames = ["Thorin", "Elara", "Zane", "Ivy", "Dante"];
    
    const charName = givenName ? givenName : getRandomItem(defaultNames);

    const newChar = {
        name: charName,
        class: getRandomItem(classes),
        health: getRandomInt(50, 150),
        specialAbility: getRandomItem(abilities),

        battle: function(otherCharacter) {
            const damage = getRandomInt(5, 20);
            const oldHealth = otherCharacter.health;
            
            otherCharacter.health -= damage;
            
            if (otherCharacter.health < 0) otherCharacter.health = 0;

            console.log(
                `Character ${this.name} attacked Character ${otherCharacter.name} with ${this.specialAbility}. ` +
                `${otherCharacter.name}'s health dropped from ${oldHealth} to ${otherCharacter.health}.`
            );
        }
    };

    return newChar;
}

function generateMultipleCharacters(x) {
    const characterArray = []; 
    
    for (let i = 0; i < x; i++) {
        const char = generateCharacter(); 
        characterArray.push(char);
    }
    
    return characterArray;
}

console.log("\n Generate Single Characters");
const character1 = generateCharacter("Zane"); 
const character2 = generateCharacter();       

console.log(character1);
console.log(character2);

console.log("\n Battle Simulation");
character1.battle(character2);
character2.battle(character1);

console.log("\n Generate Party of 5");
const party = generateMultipleCharacters(5);
console.log(party);