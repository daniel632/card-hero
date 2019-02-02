// Since we only need one instance, we are not using the class object type

let GameManager = {

    startGame: function(classType) {
        this.createPlayer(classType);
        ViewManager.setPlayerView()
        ViewManager.setPreFightView();
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
        let randomNumber = Math.floor(Math.random() * Math.floor(numberOfEnemies));

        // Create an enemy:
        // TODO: modularise
        switch(randomNumber) {
            case 0:
                enemy = new Enemy("O'Dimm", 80, 90, 40, 40, 60);
                break;
            case 1:
                enemy = new Enemy("Eredin", 80, 30, 100, 35, 25);
                break;
            case 2:
                enemy = new Enemy("Morkvarg", 60, 15, 80, 80, 50);
                break;
        }
    },

    // Create an enemy oppponent, and set the view for a fight
    startFight: function() {
        this.createRandomEnemy();
        ViewManager.setFightView();
    },

    commenceAttack: function() {
        // Determining attack order
        // TODO: add more complexity and randomness
        let character1, character2;
        if (player.speed >= enemy.speed) {
            character1 = player;
            character2 = enemy;
        } else {
            character1 = enemy;
            character2 = player;
        }

        character1.attack(character2);

        if (character2.health >= 0) {
            character2.attack(character1);
        }
    }
};