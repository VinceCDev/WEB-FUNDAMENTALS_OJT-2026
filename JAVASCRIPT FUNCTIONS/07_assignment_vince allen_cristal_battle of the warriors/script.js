const warrior1 = {
    name: "Thor",
    hp: 100,
    strength: 12,
    attack: function() {
        return Math.floor(Math.random() * (this.strength + 1));
    }
};

const warrior2 = {
    name: "Zeus",
    hp: 100,
    strength: 15,
    attack: function() {
        return Math.floor(Math.random() * (this.strength + 1));
    }
};

for (let round = 1; round <= 10; round++) {
    console.log("\n=== Round " + round + " ===");
    
    const thorAttack = warrior1.attack();
    warrior2.hp = warrior2.hp - thorAttack; 

    console.log(warrior1.name + " attacks " + warrior2.name + " and does " + thorAttack + " damage!");
    console.log(warrior1.name + " HP: " + warrior1.hp + " | " + warrior2.name + " HP: " + warrior2.hp);
    console.log();

    const zeusAttack = warrior2.attack();
    warrior1.hp = warrior1.hp - zeusAttack;

    console.log(warrior2.name + " attacks " + warrior1.name + " and does " + zeusAttack + " damage!");
    console.log(warrior1.name + " HP: " + warrior1.hp + " | " + warrior2.name + " HP: " + warrior2.hp);
}

console.log("\n=== FINAL RESULT ===");
if (warrior1.hp > warrior2.hp) {
    console.log(warrior1.name + " WINS the battle!");
} else if (warrior2.hp > warrior1.hp) {
    console.log(warrior2.name + " WINS the battle!");
} else {
    console.log("It's a DRAW!");
}