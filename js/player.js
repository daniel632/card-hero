// Player is declared in the global scope (so that it can be used / initialsed anywhere)
let player;

class Player extends Character {

    // Attempt an attack. The opponent may land the first strike...
    attack(opponent, opponentHealthHTML) {
        let playerAttackValues = super.attack(opponent);
        alert("You hit with " + playerAttackValues.damagePerHit + " damage, " 
        + playerAttackValues.numberOfHits + " times.");

        // Checking if enemy is alive or not
        if (opponent.health <= 0) {
            alert("You win! Refresh the browser to play again.");
            opponentHealthHTML.innerHTML = 'Health: 0';
        } else {
            opponentHealthHTML.innerHTML = 'Health: ' + opponent.health;
        }
    }
    
    // Prepare for an attack. If correct, you will reflect their attack...
    defend() {

    }
}
