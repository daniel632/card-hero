// Player is declared in the global scope (so that it can be used / initialsed anywhere)
let player;

class Player extends Character {

    constructor(classType, health, spells, strength, agility, speed) {
        super(classType, health, spells, strength, agility, speed);
        this.type = 'player';
        this.xp = 0;    // TODO:
    }

    // Attempt an attack. The opponent may land the first strike...
    attack(opponent) {
        let playerAttackDamage = super.attack(opponent);

        // TODO: change text depending on if action is melee or spell attack
        alert("You hit with " + playerAttackDamage + " damage.");

        let opponentHealthHTML = document.querySelector(".enemy-health");

        // Checking if enemy is alive or not
        if (opponent.health <= 0) {
            alert("You win! Returning home.");
            // TODO: try using an event here?
            ViewManager.setPreFightView();
            opponentHealthHTML.innerHTML = 'Health: 0';
        } else {
            opponentHealthHTML.innerHTML = 'Health: ' + opponent.health;
        }
    }
    
    // Prepare for an attack. If correct, you will reflect their attack...
    // TODO: remove code duplication
    block(opponent) {
        let playerAttackDamage = super.block(opponent);

        // TODO: change text depending on if action is melee or spell attack
        alert("You blocked the enemy and reflected " + playerAttackDamage + " damage.");

        let opponentHealthHTML = document.querySelector(".enemy-health");

        // Checking if enemy is alive or not
        if (opponent.health <= 0) {
            alert("You win! Returning home.");
            // TODO: try using an event here?
            ViewManager.setPreFightView();
            opponentHealthHTML.innerHTML = 'Health: 0';
        } else {
            opponentHealthHTML.innerHTML = 'Health: ' + opponent.health;
        }
    }
}
