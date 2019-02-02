// Controls changes to HTML and CSS
// (Instance, because we only need on variant)
let ViewManager = {

    // TODO: Perform node creation with appendChild() etc, instead of using string notation

    // TODO: init once? using a constructor
    domHeader: document.querySelector(".header"),
    domInterface: document.querySelector(".interface"),
    domActions: document.querySelector(".actions"),
    domArena: document.querySelector(".arena"),
    domEnemy: document.querySelector(".enemy"),



    // setFightView: function() {
    //     this.createPlayer(classType);
    //     this.setPreFight();
    // },

    setPlayerView: function() {
        this.domInterface.innerHTML = this.createCharacterView('player', player);
    },

    setPreFightView: function() {
        
        this.domHeader.innerHTML = '<p>Task: Find an enemy!</p>';
        this.domActions.innerHTML = '<a href="#" class="btn-prefight"'
        + ' onclick="GameManager.startFight()">Search for an enemy!</a>';

        // Note: Setting is done via assignment (instead of setter functions?)
        this.domArena.style.visiblity = "visible";
    },

    setFightView: function() {

        this.domHeader.innerHTML = '<p>Task: Choose your move</p>';
        this.domActions.innerHTML = '<a href="#" class="btn-prefight"'
        + ' onclick="GameManager.commenceAttack()">Fight!</a>';
        this.domEnemy.innerHTML = ViewManager.createCharacterView('enemy', enemy);
    },

    createCharacterView: function(characterType, character) {
        str = '<img src="img/' + characterType + '/' + character.classType.toLowerCase() 
        + '.jpg" class="img-avatar"><div><h3>' + character.classType + '</h3>'
        + '<p class="' + characterType + '-health">Health: ' + character.health + '</p><p>Spells: ' + character.spells + '</p>'
        + '<p>Strength: ' + character.strength + '</p><p>Agility: ' + character.agility + '</p>'
        + '<p>Speed: ' + character.speed + '</p></div>';
        return str;
    }
};