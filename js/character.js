const GERALT = "Geralt";
const CIRI = "Ciri";
const DANDELION = "Dandelion";
const KEIRA = "Keira";

// Enum
const Actions = {
    'MELEE_ATTACK': 0,
    'SPELL_ATTACK': 1,
    'BLOCK': 2
};

// TODO:
const SpecialAbilities = {
    STUN: 0    // Enemy does no damage on this turn, and they some damage
}

// TODO: PlayerType (PLAYER, ENEMY), and CharacterType (GERALT, ...) Enums

class Character {

    constructor(classType, health, spells, strength, agility, speed) {
        this.classType = classType;
        this.health = health;
        this.spells = spells;
        this.strength = strength;
        this.agility = agility;
        this.speed = speed;
        this.type;  // 'player' or 'enemy'
        this.action;
    }

    // TODO: singleton pattern for player & enemy

    // Set the action number
    setAction(action) {
        this.action = action;
    }

    attackValue() {
        // TODO: check that this.action is melee or magic
        let calcBaseDamage;
        switch(this.action) {
            case Actions['MELEE_ATTACK']:
                calcBaseDamage = (this.strength + this.agility / 2) / 100;
                break;
            case Actions['SPELL_ATTACK']:
                calcBaseDamage = (this.spells + this.agility / 2) / 100;
                break;
        }
        let offsetDamage = Math.floor(Math.random() * Math.floor(10));
        return calcBaseDamage + offsetDamage; 
    }

    attack(opponent) {
        let damage = this.attackValue();
        opponent.health -= damage;
        return damage;
    }


    // All or nothing. If you land a block before an enemy attacks, all of their damage will be reflected.
    // If you are attacked before you can succefully block, you do no damage.
    block(opponent) {
        let damage = opponent.attackValue();
        opponent.health -= damage;
        return damage;
    }
}