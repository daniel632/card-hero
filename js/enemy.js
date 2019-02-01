let enemy;

class Enemy extends Character {
    attack(opponent, opponentHealthHTML) {
        let enemyAttackValues = super.attack(opponent);
        alert("Enemy hit you with " + enemyAttackValues.damagePerHit + " damage, " 
        + enemyAttackValues.numberOfHits + " times.");

        // Checking if player is alive or not
        if (opponent.health <= 0) {
            alert("You lose! Refresh the browser to play again.");
            opponentHealthHTML.innerHTML = 'Health: 0';
        } else {
            opponentHealthHTML.innerHTML = 'Health: ' + opponent.health;
        }
    }
}