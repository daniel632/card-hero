const GERALT = "Geralt";
const CIRI = "Ciri";
const DANDELION = "Dandelion";
const KEIRA = "Keira";

class Character {

    constructor(classType, health, spells, strength, agility, speed) {
        this.classType = classType;
        this.health = health;
        this.spells = spells;
        this.strength = strength;
        this.agility = agility;
        this.speed = speed;
    }

    attackValues() {
        let calcBaseDamage;
        if (this.spells > 50) {
            calcBaseDamage = this.strength * this.spells / 1000;
        } else {
            calcBaseDamage = this.strength * this.agility / 1000;
        }
        // Add some randomness to attacks
        let offsetDamage = Math.floor(Math.random() * Math.floor(10));

        let calcOutputDamage = calcBaseDamage + offsetDamage;

        // Number of hits on enemy depends on agility
        let numberOfHits = Math.floor(Math.random() * Math.floor(this.agility / 10) / 2) + 1;

        let attackValues = {
            'damagePerHit': calcOutputDamage, 
            'numberOfHits': numberOfHits
        };
        return attackValues;
    }

    attack(opponent) {
        let playerAttackValues = this.attackValues();
        let totalDamage = playerAttackValues.damagePerHit * playerAttackValues.numberOfHits;
        opponent.health -= totalDamage;
        return playerAttackValues;
    }
}