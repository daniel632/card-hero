// Since we only need one instance, we are not using the class object type

let GameManager = {

    setGameStart: function(classType) {
        this.createPlayer(classType);
        this.setPreFight();
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

        let getInterface = document.querySelector(".interface");
        getInterface.innerHTML = this.createCharacterHTML('player', player);
    }, 

    setPreFight: function() {
        let getHeader = document.querySelector(".header");
        let getActions = document.querySelector(".actions");
        let getArena = document.querySelector(".arena");
        
        getHeader.innerHTML = '<p>Task: Find an enemy!</p>';
        getActions.innerHTML = '<a href="#" class="btn-prefight"'
        + ' onclick="GameManager.setFight()">Search for an enemy!</a>';

        // Note: Setting is done via assignment (instead of setter functions?)
        getArena.style.visiblity = "visible";
    },

    setFight: function() {
        let getHeader = document.querySelector(".header");
        let getActions = document.querySelector(".actions");
        let getEnemy = document.querySelector(".enemy");
        
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

        getHeader.innerHTML = '<p>Task: Choose your move</p>';
        getActions.innerHTML = '<a href="#" class="btn-prefight"'
        + ' onclick="GameManager.startFight()">Fight!</a>';
        getEnemy.innerHTML = this.createCharacterHTML('enemy', enemy);
    },

    createCharacterHTML: function(characterType, character) {
        str = '<img src="img/' + characterType + '/' + character.classType.toLowerCase() 
        + '.jpg" class="img-avatar"><div><h3>' + character.classType + '</h3>'
        + '<p class="' + characterType + '-health">Health: ' + character.health + '</p><p>Spells: ' + character.spells + '</p>'
        + '<p>Strength: ' + character.strength + '</p><p>Agility: ' + character.agility + '</p>'
        + '<p>Speed: ' + character.speed + '</p></div>';
        return str;
    },

    startFight: function() {
        let getPlayerHealthHTML = document.querySelector(".player-health");
        let getEnemyHealthHTML = document.querySelector(".enemy-health");

        // Attack order - TODO: change (add more complexity and randomness)
        if(player.speed >= enemy.speed) {
            player.attack(enemy, getEnemyHealthHTML);
            
            if (enemy.health > 0) {
                enemy.attack(player, getPlayerHealthHTML);
            }
        }
        else {
            // TODO: if enemy is faster than player
            alert("WIP - Enemy is faster, please refresh for now");
        }
    }
};