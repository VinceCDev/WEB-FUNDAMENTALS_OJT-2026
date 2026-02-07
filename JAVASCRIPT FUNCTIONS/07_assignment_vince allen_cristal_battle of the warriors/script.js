// Object creation utilize all throughout the code
const warrior1 = {
    name: "Thor",
    hp: 100,
    strength: 12,
    attack: attack
};

const warrior2 = {
    name: "Zeus",
    hp: 100,
    strength: 15,
    attack: attack
};

/* * DOCU: Calculates random damage based on strength
 * @param {void} - Uses a this approach
 * @returns {number} - Damage amount
 * @throws {void}
 * * Last Updated: 2026-02-07
 * Author: Vince Allen D. Cristal
 * Last Updated By: Vince Allen D. Cristal
 */
function attack() {
    return Math.floor(Math.random() * (this.strength + 1));
}

// Loop demonstrate the battle for up to 10 rounds
for (let round = 1; round <= 10; round++) {
    console.log("\n=== Round " + round + " ===");
    
    // Thor attacks Zeus, updates HP to zero if negative, and stops battle if gain 0 HP
    const thorAttack = warrior1.attack();
    warrior2.hp = warrior2.hp - thorAttack; 

    if (warrior2.hp < 0) {
        warrior2.hp = 0;
    }

    console.log(warrior1.name + " attacks " + warrior2.name + " and does " + thorAttack + " damage!");
    console.log(warrior1.name + " HP: " + warrior1.hp + " | " + warrior2.name + " HP: " + warrior2.hp);

    if (warrior2.hp === 0) {
        console.log(warrior2.name + " has fallen!");
        break;
    }

    // Zeus attacks Thor, updates HP to zero if negative, and stops battle if Thor gain 0 HP
    const zeusAttack = warrior2.attack();
    warrior1.hp = warrior1.hp - zeusAttack;

    if (warrior1.hp < 0) {
        warrior1.hp = 0;
    }

    console.log("\n" + warrior2.name + " attacks " + warrior1.name + " and does " + zeusAttack + " damage!");
    console.log(warrior1.name + " HP: " + warrior1.hp + " | " + warrior2.name + " HP: " + warrior2.hp);

    if (warrior1.hp === 0) {
        console.log(warrior1.name + " has fallen!");
        break;
    }
}

// Compares final health to identify the result fo the battle
console.log("\n=== FINAL RESULT ===");
if (warrior1.hp > warrior2.hp) {
    console.log(warrior1.name + " WINS the battle!");
} else if (warrior2.hp > warrior1.hp) {
    console.log(warrior2.name + " WINS the battle!");
} else {
    console.log("It's a DRAW!");
}