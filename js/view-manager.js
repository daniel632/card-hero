// Rsponsible for changes to HTML and CSS
// (Instance, because we only need on variant)
let ViewManager = {

    // TODO: init once? using a constructor (to avoid rerunning doc functions)
    domHeader: document.querySelector(".header"),
    domInfo: document.querySelector(".info"),
    domInterface: document.querySelector(".interface"),
    domPlayer: document.querySelector(".player"),
    domActions: document.querySelector(".actions"),
    domArena: document.querySelector(".arena"),
    domEnemy: document.querySelector(".enemy"),


    setPlayerView: function() {
        this.createCharacterView(this.domPlayer, player);
    },

    setPreFightView: function() {

        this.clearPage();

        // Player
        this.createCharacterView(this.domPlayer, player);

        // Create Paragraph node and insert text into it
        this.createAndAttachChildNode(this.domHeader, "p", {
            "text": "Task: Find an enemy!"
        });

        // Create Anchor node (which has a button attribute), to find an enemy
        this.createAndAttachChildNode(this.domActions, "a", {
            "text": "Search for an enemy!",
            "href": "#",
            "class": "btn-prefight",
            "onclick": "GameManager.startFight()"
        });
    },

    setFightView: function() {

        this.removeAllChildrenElements(this.domHeader);
        this.removeAllChildrenElements(this.domActions);

        // Prompt
        this.createAndAttachChildNode(this.domHeader, "p", {
            "text": "Task: Choose your move"
        });
        
        // Button
        this.createAndAttachChildNode(this.domActions, "a", {
            "text": "Melee Attack!",
            "href": "#",
            "class": "btn-fight",
            "onclick": "GameManager.commenceAttack()"
        });
        this.createAndAttachChildNode(this.domActions, "a", {
            "text": "Block!",
            "href": "#",
            "class": "btn-block",
            "onclick": "GameManager.commenceBlock()"
        });
        this.createAndAttachChildNode(this.domActions, "a", {
            "text": "White Flag!",
            "href": "#",
            "class": "btn-retreat",
            "onclick": "GameManager.retreat()"
        });

        // Making the arena div visible
        this.domArena.style.visibility = 'visible';
        
        // Creating the enemy view
        ViewManager.createCharacterView(this.domEnemy, enemy);
    },

    createAndAttachChildNode: function(parentNode, tagName, attributes=undefined) {
        let node = document.createElement(tagName);
        
        // Setting any attributes (and text) for the child node
        if (attributes !== undefined) {
            for (key in attributes) {

                // Text is not an actual HTML attribute
                if (key == "text") {
                    let textNode = document.createTextNode(attributes[key]);
                    node.appendChild(textNode);
                } else {
                    node.setAttribute(key, attributes[key]);
                }
            }
        }

        parentNode.appendChild(node);
    },

    createCharacterView: function(parentNode, character) {

        // Removing any content which may be in the character view (i.e. div)
        this.removeAllChildrenElements(parentNode);
        
        // Image
        this.createAndAttachChildNode(parentNode, "img", {
            "src": "img/" + character.type + "/" + character.classType.toLowerCase() + ".jpg",
            "class": "img-avatar"
        });

        // Div containing a header (h3), and paragraphs for each character stat
        this.createAndAttachChildNode(parentNode, "div", undefined);
        let divNode = parentNode.querySelector("div");
        this.createAndAttachChildNode(divNode, "h3", {
            "class": "character-name",
            "text": character.classType
        });

        // TODO: Make a character stats class. would allow a for loop to be used here
        this.createAndAttachChildNode(divNode, "p", {
            "class": character.type + "-health" + " character-text",
            "text": "Health: "+ character.health
        });
        this.createAndAttachChildNode(divNode, "p", {
            "class": character.type + "-spells" + " character-text",
            "text": "Spells: "+ character.spells
        });
        this.createAndAttachChildNode(divNode, "p", {
            "class": character.type + "-strength" + " character-text",
            "text": "Strength: "+ character.strength
        });
        this.createAndAttachChildNode(divNode, "p", {
            "class": character.type + "-agility" + " character-text",
            "text": "Agility: "+ character.agility
        });
        this.createAndAttachChildNode(divNode, "p", {
            "class": character.type + "-speed" + " character-text",
            "text": "Speed: "+ character.speed
        });
    },

    removeAllChildrenElements: function(parentElement) {
        parentElement.innerHTML = "";
    },

    // Remove all elements from the main divs
    // TODO: make an object for all divs - would allow us to enumerate through all with a loop
    clearPage: function() {
        this.removeAllChildrenElements(this.domHeader);
        this.removeAllChildrenElements(this.domInfo);
        this.removeAllChildrenElements(this.domInterface);
        this.removeAllChildrenElements(this.domPlayer);
        this.removeAllChildrenElements(this.domActions);
        this.removeAllChildrenElements(this.domArena);
        this.domArena.style.visibility = "hidden";
        this.removeAllChildrenElements(this.domEnemy);
    },

    // TODO: listeners on player and enemey healthHTML - 

    // Opens the help panel
    loadInfo: function() {
        this.domInfo.querySelector("div").querySelector("button").innerHTML = "Hide Info";
        this.domInfo.querySelector("div").querySelector("button").setAttribute("onclick", "ViewManager.hideInfo()");

        this.createAndAttachChildNode(this.domInfo.querySelector("div"), "p", {
            "class": "text",
            "text": "Health: Allows you to absorb damage from your opponent. Speed: Increases your chances of attacking first."
        });
    },
    
    hideInfo: function() {
        this.domInfo.querySelector("div").querySelector("p").remove();

        this.domInfo.querySelector("div").querySelector("button").innerHTML = "More Info!";
        this.domInfo.querySelector("div").querySelector("button").setAttribute("onclick", "ViewManager.loadInfo()");
    }

};