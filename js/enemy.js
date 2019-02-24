let enemy;

class Enemy extends Character {

    constructor(classType, health, spells, strength, agility, speed) {
        super(classType, health, spells, strength, agility, speed);
        this.type = 'enemy';
    }

    attack(opponent) {
        let enemyAttackDamage = super.attack(opponent);

        alert("Enemy hit you with " + enemyAttackDamage + " damage.");

        let opponentHealthHTML = document.querySelector(".player-health");

        // Checking if player is alive or not
        if (opponent.health <= 0) {
            alert("You lose! Refresh the portal to play again.");
            opponentHealthHTML.innerHTML = 'Health: 0';
        } else {
            opponentHealthHTML.innerHTML = 'Health: ' + opponent.health;
        }
    }

    // TODO: remove code duplication
    block(opponent) {
        let enemyAttackDamage = super.block(opponent);

        alert("Enemy blocked you and reflected " + enemyAttackDamage + " damage.");

        let opponentHealthHTML = document.querySelector(".player-health");

        // Checking if player is alive or not
        if (opponent.health <= 0) {
            alert("You lose! Refresh the portal to play again.");
            opponentHealthHTML.innerHTML = 'Health: 0';
        } else {
            opponentHealthHTML.innerHTML = 'Health: ' + opponent.health;
        }
    }
}