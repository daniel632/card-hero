// Since we only need one instance, we are not using the class object type

let GameManager = {

    startGame: function(classType) {
        this.createPlayer(classType);
        ViewManager.setPreFightView();
    }, 

    // Create an enemy oppponent, and set the view for a fight
    startFight: function() {
        this.createRandomEnemy();
        ViewManager.setFightView();
    },

    // Return to the home screen
    quit: function() {
        location.reload();
    },
    
    // Create / Reset player
    createPlayer: function(classType) {
        switch(classType) {
            case GERALT:
                player = new Player(classType, 80, 40, 85, 70, 60);
                break;
            case CIRI:
                player = new Player(classType, 65, 85, 40, 85, 65);
                break;
            case DANDELION:
                player = new Player(classType, 35, 10, 25, 90, 100);
                break;
            case KEIRA:
                player = new Player(classType, 40, 100, 35, 50, 50);
                break;
        }
    },

    // Create an enemy opponent randomly, and then assigns it to the 'enemy' global variable
    createRandomEnemy: function() {
        // Returns an integer within {0, ..., numberOfEnemies-1}
        const numberOfEnemies = 3;
        let randomNumber = randomNumberBetween(1, numberOfEnemies);
        // Create an enemy
        switch(randomNumber) {
            case 1:
                enemy = new Enemy("O'Dimm", 80, 90, 40, 40, 60);
                break;
            case 2:
                enemy = new Enemy("Eredin", 80, 30, 100, 35, 25);
                break;
            case 3:
                enemy = new Enemy("Morkvarg", 60, 15, 80, 80, 50);
                break;
        }
    },

    calculateActOrder: function() {
        let playerChance = (player.speed + randomNumberBetween(0, 100)) * 0.5;
        let enemyChance = (enemy.speed + randomNumberBetween(0, 100)) * 0.5;
        // console.log("player-chance: " + playerChance + " - enemy-chance: " + enemyChance);

        let character1, character2;
        if (playerChance >= enemyChance) {
            character1 = player;
            character2 = enemy;
        } else {
            character1 = enemy;
            character2 = player;
        }

        return [character1, character2];
    },

    go: function() {
        enemy.setAction(randomNumberBetween(0, Object.keys(Actions).length - 1));

        characters = this.calculateActOrder();
        character1 = characters[0];
        character2 = characters[1];

        alert(character1.type + " " + Object.keys(Actions)[character1.action]);
        alert(character2.type + " " + Object.keys(Actions)[character2.action]);

        // All combinations here 
        switch(character1.action) {
            case Actions['MELEE_ATTACK']:
            case Actions['SPELL_ATTACK']:
                switch(character2.action) {
                    case Actions['MELEE_ATTACK']: 
                    case Actions['SPELL_ATTACK']:
                        character1.attack(character2);
                        if (character2.health >= 0) {
                            character2.attack(character1);
                        }
                        break;
                    case Actions['BLOCK']:
                        character1.attack(character2);
                        break;
                }
                break;
            case Actions['BLOCK']:
                switch(character2.action) {
                    case Actions['MELEE_ATTACK']:
                    case Actions['SPELL_ATTACK']:
                        character1.block(character2);
                        break;
                    case Actions['BLOCK']:
                        // Neither character is harmed
                        break;
                }
                break;
        }
    },

    retreat: function() {
        ViewManager.setPreFightView();
    }
};