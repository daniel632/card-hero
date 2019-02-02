let enemy;

class Enemy extends Character {

    constructor(classType, health, spells, strength, agility, speed) {
        super(classType, health, spells, strength, agility, speed);
        this.type = 'enemy';
        this.healthHTML = document.querySelector(".enemy-health");  // TODO: why is this defined only for enemy??
    }

    attack(opponent) {
        let enemyAttackValues = super.attack(opponent);

        alert("Enemy hit you with " + enemyAttackValues.damagePerHit + " damage, " 
        + enemyAttackValues.numberOfHits + " times.");

        let opponentHealthHTML = document.querySelector(".player-health");

        // Checking if player is alive or not
        if (opponent.health <= 0) {
            alert("You lose! Refresh the browser to play again.");
            opponentHealthHTML.innerHTML = 'Health: 0';
        } else {
            opponentHealthHTML.innerHTML = 'Health: ' + opponent.health;
        }
    }
}